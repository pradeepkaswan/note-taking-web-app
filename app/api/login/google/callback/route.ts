import { cookies } from "next/headers";
import { decodeIdToken, type OAuth2Tokens } from "arctic";
import { ObjectParser } from "@pilcrowjs/object-parser";

import {
  createSession,
  generateSessionToken,
  setSessionTokenCookie,
} from "@/app/_lib/server/session";
import { google } from "@/app/_lib/server/oauth";
import { createUser } from "@/app/_lib/server/user";
import { db } from "@/app/_lib/db";
import { users } from "@/app/_lib/db/schema";
import { eq } from "drizzle-orm";

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");

  const cookieStore = await cookies();
  const storedState = cookieStore.get("google_oauth_state")?.value ?? null;
  const codeVerifier = cookieStore.get("google_code_verifier")?.value ?? null;

  if (
    !code ||
    !state ||
    !storedState ||
    !codeVerifier ||
    state !== storedState
  ) {
    return new Response(null, { status: 400 });
  }

  let tokens: OAuth2Tokens;
  try {
    tokens = await google.validateAuthorizationCode(code, codeVerifier);
  } catch {
    return new Response(null, { status: 400 });
  }

  const claims = decodeIdToken(tokens.idToken());
  const claimsParser = new ObjectParser(claims);

  const googleId = claimsParser.getString("sub");
  const name = claimsParser.getString("name");
  const picture = claimsParser.getString("picture");
  const email = claimsParser.getString("email");

  // TODO: Check if user exists
  const existingUser = await db.query.users.findFirst({
    where: eq(users.email, email),
  });

  if (!existingUser) {
    // TODO: Create user
    const userId = await createUser(email, googleId, picture, name);
    const sessionToken = generateSessionToken();
    const session = await createSession(sessionToken, userId);
    await setSessionTokenCookie(sessionToken, session.expiresAt);
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/",
      },
    });
  } else {
    const sessionToken = generateSessionToken();
    const session = await createSession(sessionToken, existingUser.id);
    await setSessionTokenCookie(sessionToken, session.expiresAt);

    if (existingUser.hashedPassword) {
      await db
        .update(users)
        .set({ googleId, name, picture })
        .where(eq(users.id, existingUser.id));
    }

    return new Response(null, {
      status: 302,
      headers: {
        Location: "/",
      },
    });
  }
}

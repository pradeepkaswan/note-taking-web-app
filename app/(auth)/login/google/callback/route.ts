import { cookies } from "next/headers";
import { decodeIdToken, type OAuth2Tokens } from "arctic";
import { ObjectParser } from "@pilcrowjs/object-parser";

import { generateSessionToken, createSession } from "@/app/lib/server/session";
import { google } from "@/app/lib/server/oauth";
import { createUser } from "@/app/lib/server/user";

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const cookieStore = await cookies();
  const storedState = cookieStore.get("google_oauth_state")?.value ?? null;
  const codeVerifier = cookieStore.get("google_code_verifier")?.value ?? null;

  if (
    code === null ||
    state === null ||
    storedState === null ||
    codeVerifier === null
  ) {
    return new Response(null, { status: 400 });
  }

  if (state !== storedState) {
    return new Response("Please restart the process.", { status: 400 });
  }

  let tokens: OAuth2Tokens;
  try {
    tokens = await google.validateAuthorizationCode(code, codeVerifier);
  } catch {
    return new Response("Please restart the process.", { status: 400 });
  }

  const claims = decodeIdToken(tokens.idToken());
  const claimsParser = new ObjectParser(claims);

  const googleId = claimsParser.getString("sub");
  const name = claimsParser.getString("name");
  const picture = claimsParser.getString("picture");
  const email = claimsParser.getString("email");

  const user = await createUser(email, undefined, googleId, picture, name);

  const sessionToken = generateSessionToken();
  await createSession(sessionToken, user.id);

  return new Response(null, {
    status: 302,
    headers: {
      Location: "/",
    },
  });
}

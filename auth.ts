// import NextAuth, { type DefaultSession } from "next-auth";
// import Google from "next-auth/providers/google";
// import Credentials from "next-auth/providers/credentials";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import type { Provider } from "next-auth/providers";
// import { ZodError } from "zod";

// // import { saltAndHashPassword } from "@/lib/utils";
// // import { signInSchema } from "./lib/zod";

// // export async function createUserTable() {
// //   const db = new Database(process.env.SQLITECLOUD_URL as string);

// //   const user = await db.sql`CREATE TABLE "User" (
// //     "id" TEXT NOT NULL PRIMARY KEY,
// //     "name" TEXT,
// //     "email" TEXT NOT NULL,
// //     "emailVerified" DATETIME,
// //     "image" TEXT,
// //     "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
// //     "updatedAt" DATETIME NOT NULL
// //     )`;

// //   return user;
// // }

// declare module "next-auth" {
//   /**
//    * The shape of the user object returned in the OAuth providers' `profile` callback,
//    * or the second parameter of the `session` callback, when using a database.
//    */
//   interface User {}
//   /**
//    * The shape of the account object returned in the OAuth providers' `account` callback,
//    * Usually contains information about the provider being used, like OAuth tokens (`access_token`, etc).
//    */
//   interface Account {}
//   /**
//    * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
//    */
//   interface Session {
//     user: {
//       /** The user's avatar image URL */
//       image: string;
//       /**
//        * By default, TypeScript merges new interface properties and overwrites existing ones.
//        * In this case, the default session user properties will be overwritten,
//        * with the new ones defined above. To keep the default session user properties,
//        * you need to add them back into the newly declared interface.
//        */
//     } & DefaultSession["user"];
//   }
// }

// const providers: Provider[] = [
//   Google({
//     clientId: process.env.AUTH_GOOGLE_ID,
//     clientSecret: process.env.AUTH_GOOGLE_SECRET,
//     async profile(profile) {
//       return { ...profile };
//     },
//   }),
//   Credentials({
//     credentials: {
//       email: {},
//       password: { label: "Password", type: "password" },
//     },
//     async authorize(credentials, request) {
//       try {
//         let user = null;

//         const { email, password } = await signInSchema.parseAsync(credentials);

//         // const hashedPassword = saltAndHashPassword(
//         //   credentials.password as string,
//         // );

//         // logic to verfiy if the user exists

//         if (!user) {
//           throw new Error("Invalid credentials");
//         }

//         // return JSON object with the user data
//         return user;
//       } catch (error) {
//         if (error instanceof ZodError) {
//           // Return `null` to indicate that the credentials are invalid
//           return null;
//         }
//         return null;
//       }
//     },
//   }),
// ];

// export const providerMap = providers
//   .map((provider) => {
//     if (typeof provider === "function") {
//       const providerData = provider();
//       return {
//         id: providerData.id,
//         name: providerData.name,
//       };
//     } else {
//       return {
//         id: provider.id,
//         name: provider.name,
//       };
//     }
//   })
//   .filter((provider) => provider.id !== "credentials");

// export const { handlers, signIn, signOut, auth } = NextAuth({
//   adapter: PrismaAdapter(prisma),
//   providers,
//   callbacks: {
//     session({ session, user }) {
//       session.user.id = user.id;
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/login",
//     error: "/error",
//   },
// });

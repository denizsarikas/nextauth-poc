import NextAuth from "next-auth/next";
import { options } from './options'
import GithubProvider from "next-auth/providers/github";
import AppleProvider from "next-auth/providers/apple";
import GoogleProvider from "next-auth/providers/google";

// export const authOptions = {
//     providers: [
//         GithubProvider({
//             clientId: process.env.GITHUB_ID ?? "",
//             clientSecret: process.env.GUTHUB_SECRET ?? "",
//         }),
//         GoogleProvider({
//             clientId: process.env.GOOGLE_ID ?? "",
//             clientSecret: process.env.GOOGLE_SECRET ?? "",
//           }),
//     ],
// };

// export const authOptions2 = {
//     providers: [
//       AppleProvider({
//         clientId: process.env.APPLE_ID ?? "",
//         clientSecret: process.env.APPLE_SECRET ?? ""
//       }),
//       GoogleProvider({
//         clientId: process.env.GOOGLE_ID ?? "",
//         clientSecret: process.env.GOOGLE_SECRET ?? "",
//       }),
//     ],
//     cookies: {
//       pkceCodeVerifier: {
//         name: "next-auth.pkce.code_verifier",
//         options: {
//           httpOnly: true,
//           sameSite: "none",
//           path: "/",
//           secure: true,
//         },
//       },
//     },
//     callbacks: {
//       session: async ({ session }) => {
//         session.customValue = new Date().toISOString();
//         return Promise.resolve(session);
//       },
//     },
//   }

export const handler = NextAuth(options);

export { handler as GET, handler as POST };

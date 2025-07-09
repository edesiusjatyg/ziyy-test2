// import NextAuth from "next-auth"
// import Credentials from "next-auth/providers/credentials"
// import { PrismaAdapter } from "@auth/prisma-adapter"
// import { prisma } from "prisma"


// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [
//     Credentials({
//       credentials: {
//         username: {},
//         password: {},
//       },
//       authorize: async (credentials) => {
//         // const user = await getUserFromDB(credentials.username);

//         // if (!user) {
//         //   throw new Error("Invalid credentials.");
//         // }

//         // const isPasswordValid = await compare(
//         //   credentials.password,
//         //   user.password
//         // );

//         // if (!isPasswordValid) {
//         //   throw new Error("Invalid credentials.");
//         // }

//         // const { password, ...userWithoutPassword } = user;
//         // return userWithoutPassword;
//       },
//     }),
//   ],
// });
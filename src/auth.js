import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import Connect from "./utils/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await Connect();
        try {
          if (!credentials.email || !credentials.password) {
            throw new Error("Email and password are required");
          }

          const user = await User.findOne({ email: credentials.email });
          
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user; 
            } else {
              throw new Error("Incorrect password");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (err) {
          console.error("Authentication error:", err.message);
          throw new Error("Authentication error: " + err.message);
        }
      },
    }),
  ],
  pages: {
    error: "/dashboard/login",
  },
});

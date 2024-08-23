import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import Connect from "@/utils/db";

export const authOptions = {
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
    signIn: "/dashboard/login",
    error: "/dashboard/login", // Redirect to the login page on error
  },
  
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // Custom sign-in logic
      return true;
    },
    async redirect({ url, baseUrl }) {
      // Redirect users after login
      return baseUrl;
    },
    async session({ session, user, token }) {
      // Customize session returned to client
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      // Customize JWT
      return token;
    },
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);

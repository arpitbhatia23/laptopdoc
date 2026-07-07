import Credentialsprovider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import dbConnect from "@/utils/dbConnect";
import { User } from "@/models/user.model";
import apiError from "@/utils/apiError";
const authOptions = {
  providers: [
    Credentialsprovider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        await dbConnect();
        const user = await User.findOne({ email: credentials?.email }).lean();
        if (!user) {
          throw new Error("user not found");
        }
        const ispaswordVaild = await bcrypt.compare(
          credentials.password,
          user.password,
        );
        if (!ispaswordVaild) {
          throw new Error("inavaild password");
        }
        return user;
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      await dbConnect();
      const finduser = await User.findOne({ email: user?.email });
      if (!finduser) {
        throw new apiError(401, "unauthrized access");
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }

      return token;
    },

    async session({ session, token }) {
      session.user = token?.user;
      return session;
    },
  },

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/admin-login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

export default authOptions;

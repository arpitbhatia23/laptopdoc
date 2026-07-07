import NextAuth from "next-auth";
const handler = NextAuth(authOptions);
import authOptions from "../option";
export { handler as GET, handler as POST };

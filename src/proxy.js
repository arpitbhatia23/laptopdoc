import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function proxy(req) {
  const { pathname } = req.nextUrl;

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  console.log("PATH:", pathname);
  console.log("TOKEN:", token);

  // Already logged in → do not show login page
  if (pathname === "/admin-login" && token) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  // Not logged in → block admin pages
  if (pathname.startsWith("/admin") && !token) {
    return NextResponse.redirect(new URL("/admin-login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin-login", "/admin/:path*"],
};

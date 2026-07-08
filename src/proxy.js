import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function proxy(req) {
  const { pathname } = req.nextUrl;

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (pathname === "/admin-login" && token) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  // protect only /admin and /admin/*
  if ((pathname === "/admin" || pathname.startsWith("/admin/")) && !token) {
    return NextResponse.redirect(new URL("/admin-login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin-login", "/admin/:path*"],
};

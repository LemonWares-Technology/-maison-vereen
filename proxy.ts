// Next.js 16 proxy.ts — replaces middleware.ts
// Export must be named "proxy" (Next.js 16 breaking change from "middleware")
import { NextRequest, NextResponse } from "next/server";
import { getAdminFromRequest } from "./lib/auth";

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow login page through without auth check
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  // Protect everything under /admin
  if (pathname.startsWith("/admin")) {
    const admin = await getAdminFromRequest(req);
    if (!admin) {
      const url = req.nextUrl.clone();
      url.pathname = "/admin/login";
      url.searchParams.set("from", pathname);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};

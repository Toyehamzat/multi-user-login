import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const userType = request.cookies.get("userType")?.value;
  const path = request.nextUrl.pathname;

  if (path.includes("dashboard")) {
    if (path === "/" && userType) {
      return NextResponse.redirect(
        new URL(`/${userType}-dashboard`, request.url)
      );
    }
    if (!userType) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    const isAuthorized = path.startsWith(`/${userType}-dashboard`);
    if (!isAuthorized) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

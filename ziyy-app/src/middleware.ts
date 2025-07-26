import { auth } from "./auth"
import { hasRouteAccess } from "./lib/rbac"
import { NextResponse } from "next/server"

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth
  const userRole = req.auth?.user?.role

  // Remove debug logging for production
  const isDev = process.env.NODE_ENV === 'development';
  if (isDev) {
    console.log(`Middleware: ${nextUrl.pathname}, isLoggedIn: ${isLoggedIn}, role: ${userRole}`)
  }

  // Public routes that don't need authentication
  const isPublicRoute = nextUrl.pathname === "/signin" || nextUrl.pathname === "/signup"
  
  // Root path handling
  if (nextUrl.pathname === "/") {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL("/home", nextUrl))
    } else {
      return NextResponse.redirect(new URL("/signin", nextUrl))
    }
  }

  // If not logged in and trying to access protected route
  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL("/signin", nextUrl))
  }

  // If logged in and trying to access auth pages, redirect to home
  if (isLoggedIn && isPublicRoute) {
    return NextResponse.redirect(new URL("/home", nextUrl))
  }

  // Check route permissions for logged-in users
  if (isLoggedIn && userRole) {
    const hasAccess = hasRouteAccess(userRole, nextUrl.pathname)
    if (!hasAccess) {
      if (isDev) {
        console.log(`Access denied for ${userRole} to ${nextUrl.pathname}`)
      }
      return NextResponse.redirect(new URL("/unauthorized", nextUrl))
    }
  }

  return NextResponse.next()
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
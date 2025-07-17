import { auth } from "@/auth"
import { NextResponse } from "next/server"
import { hasRouteAccess } from "@/lib/rbac"

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth
  const userRole = req.auth?.user?.role

  // Define public routes that don't require authentication
  const publicRoutes = ['/signin', '/api/auth', '/unauthorized']
  
  // Check if current route is public
  const isPublicRoute = publicRoutes.some(route => 
    nextUrl.pathname.startsWith(route)
  )

  // If not logged in and trying to access protected route, redirect to signin
  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL('/signin', nextUrl))
  }

  // If logged in and trying to access signin, redirect to home
  if (isLoggedIn && nextUrl.pathname === '/signin') {
    return NextResponse.redirect(new URL('/home', nextUrl))
  }

  // Role-based authorization for protected routes
  if (isLoggedIn && userRole && !isPublicRoute && nextUrl.pathname !== '/unauthorized') {
    // Check if user has access to the requested route
    if (!hasRouteAccess(userRole, nextUrl.pathname)) {
      // Redirect to an unauthorized page or back to home
      return NextResponse.redirect(new URL('/unauthorized', nextUrl))
    }
  }

  return NextResponse.next()
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
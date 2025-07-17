import { UserRole } from "@/generated/prisma/client"

// Define role hierarchy and permissions
export const ROLE_HIERARCHY = {
  ADMIN: 4,
  SUPERVISOR: 3,
  ACCOUNTING: 2,
  MARKETING: 2,
  FRONT_OFFICE: 2,
  CANTEEN: 2,
} as const

// Define route permissions
export const ROUTE_PERMISSIONS = {
  "/home": ["ADMIN", "SUPERVISOR", "FRONT_OFFICE", "CANTEEN", "ACCOUNTING", "MARKETING"],
  "/fo": ["ADMIN", "SUPERVISOR", "FRONT_OFFICE"],
  "/canteen": ["ADMIN", "SUPERVISOR", "CANTEEN"],
  "/acc": ["ADMIN", "SUPERVISOR", "ACCOUNTING"],
  "/mkt": ["ADMIN", "SUPERVISOR", "MARKETING"],
  "/mgmt": ["ADMIN"],
} as const

// Module permissions for the home page cards
export const MODULE_PERMISSIONS = {
  fo: ["ADMIN", "SUPERVISOR", "FRONT_OFFICE"],
  canteen: ["ADMIN", "SUPERVISOR", "CANTEEN"],
  acc: ["ADMIN", "SUPERVISOR", "ACCOUNTING"],
  mkt: ["ADMIN", "SUPERVISOR", "MARKETING"],
  mgmt: ["ADMIN"],
} as const

// Helper functions
export function hasRoleAccess(userRole: UserRole, allowedRoles: readonly UserRole[]): boolean {
  return allowedRoles.includes(userRole)
}

export function hasRouteAccess(userRole: UserRole, route: string): boolean {
  // Check exact route match first
  if (ROUTE_PERMISSIONS[route as keyof typeof ROUTE_PERMISSIONS]) {
    const hasAccess = hasRoleAccess(userRole, ROUTE_PERMISSIONS[route as keyof typeof ROUTE_PERMISSIONS])
    console.log(`Route access check: ${route} for role ${userRole} = ${hasAccess}`)
    return hasAccess
  }
  
  // Check if route starts with any of the defined routes
  const matchingRoute = Object.keys(ROUTE_PERMISSIONS).find(routeKey => 
    route.startsWith(routeKey)
  )
  
  if (matchingRoute) {
    const hasAccess = hasRoleAccess(userRole, ROUTE_PERMISSIONS[matchingRoute as keyof typeof ROUTE_PERMISSIONS])
    console.log(`Route access check (prefix): ${route} (matched ${matchingRoute}) for role ${userRole} = ${hasAccess}`)
    return hasAccess
  }
  
  // If no route matches, allow access (for now)
  console.log(`No route match found for: ${route}, allowing access`)
  return true
}

export function hasModuleAccess(userRole: UserRole, module: keyof typeof MODULE_PERMISSIONS): boolean {
  return hasRoleAccess(userRole, MODULE_PERMISSIONS[module])
}

export function getRoleDisplayName(role: UserRole): string {
  const displayNames = {
    ADMIN: "Admin",
    SUPERVISOR: "Supervisor",
    ACCOUNTING: "Accounting",
    MARKETING: "Marketing",
    FRONT_OFFICE: "Front Office",
    CANTEEN: "Canteen",
  }
  return displayNames[role] || role
}

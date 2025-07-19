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
  "/api/members": ["ADMIN", "SUPERVISOR", "FRONT_OFFICE"],
  "/api/member-arrivals": ["ADMIN", "SUPERVISOR", "FRONT_OFFICE"],
  "/api/activities": ["ADMIN", "SUPERVISOR", "MARKETING"],
  "/api/campaigns": ["ADMIN", "SUPERVISOR", "MARKETING"],
  "/api/canteen": ["ADMIN", "SUPERVISOR", "CANTEEN"],
  "/api/canteen-item": ["ADMIN", "SUPERVISOR", "CANTEEN"],
  "/api/transaction-canteen": ["ADMIN", "SUPERVISOR", "CANTEEN"],
  "/api/transaction-accounting": ["ADMIN", "SUPERVISOR", "ACCOUNTING"],
  "/api/transaction-fo": ["ADMIN", "SUPERVISOR", "FRONT_OFFICE"],
  "/api/incidentile": ["ADMIN", "SUPERVISOR", "FRONT_OFFICE"],
  "/api/couples": ["ADMIN", "SUPERVISOR", "FRONT_OFFICE"],
  "/api/statistic": ["ADMIN", "SUPERVISOR", "ACCOUNTING"],
} as const

export const MODULE_PERMISSIONS = {
  fo: ["ADMIN", "SUPERVISOR", "FRONT_OFFICE"],
  canteen: ["ADMIN", "SUPERVISOR", "CANTEEN"],
  acc: ["ADMIN", "SUPERVISOR", "ACCOUNTING"],
  mkt: ["ADMIN", "SUPERVISOR", "MARKETING"],
  mgmt: ["ADMIN"],
} as const

export const FO_PERMISSIONS = {
  CREATE: ["ADMIN", "FRONT_OFFICE"],
  READ: ["ADMIN", "SUPERVISOR", "FRONT_OFFICE"],
  UPDATE: ["ADMIN"],
  DELETE: ["ADMIN"],
} as const

export const CANTEEN_PERMISSIONS = {
  CREATE: ["ADMIN", "CANTEEN"],
  READ: ["ADMIN", "SUPERVISOR", "CANTEEN"],
  UPDATE: ["ADMIN"],
  DELETE: ["ADMIN"],
} as const

export const ACC_PERMISSIONS = {
  CREATE: ["ADMIN", "ACCOUNTING"],
  READ: ["ADMIN", "SUPERVISOR", "ACCOUNTING"],
  UPDATE: ["ADMIN"],
  DELETE: ["ADMIN"],
} as const

export const MKT_PERMISSIONS = {
  CREATE: ["ADMIN", "MARKETING"],
  READ: ["ADMIN", "SUPERVISOR", "MARKETING"],
  UPDATE: ["ADMIN"],
  DELETE: ["ADMIN"],
} as const

export const MGMT_PERMISSIONS = {
  CREATE: ["ADMIN"],
  READ: ["ADMIN"],
  UPDATE: ["ADMIN"],
  DELETE: ["ADMIN"],
} as const

export type CrudPermission = "CREATE" | "READ" | "UPDATE" | "DELETE"

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
  
  // Default deny: If no route matches, deny access for security
  console.log(`No route match found for: ${route}, denying access (default deny policy)`)
  return false
}

export function hasModuleAccess(userRole: UserRole, module: keyof typeof MODULE_PERMISSIONS): boolean {
  return hasRoleAccess(userRole, MODULE_PERMISSIONS[module])
}

export function hasFoCrudAccess(userRole: UserRole, permission: CrudPermission): boolean {
  return hasRoleAccess(userRole, FO_PERMISSIONS[permission])
}

export function hasCanteenCrudAccess(userRole: UserRole, permission: CrudPermission): boolean {
  return hasRoleAccess(userRole, CANTEEN_PERMISSIONS[permission])
}

export function hasAccCrudAccess(userRole: UserRole, permission: CrudPermission): boolean {
  return hasRoleAccess(userRole, ACC_PERMISSIONS[permission])
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

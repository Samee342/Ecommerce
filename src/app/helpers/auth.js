import { ADMIN_ROLES, MERCHANT_ROLES } from "@/app/constants/userRoles";
export function allowededAdminRoles(userRoles) {
  const adminRoles = [ADMIN_ROLES, MERCHANT_ROLES];
  return userRoles?.some((role) => adminRoles.includes(role));
}

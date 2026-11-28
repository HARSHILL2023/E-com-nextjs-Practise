import { cookies } from "next/headers";

const adminCookieName = "shopsphere-admin-token";

export async function isAdmin() {
  const expectedToken = process.env.ADMIN_ACTION_TOKEN;

  if (!expectedToken) {
    return false;
  }

  const cookieStore = await cookies();
  return cookieStore.get(adminCookieName)?.value === expectedToken;
}

export { adminCookieName };

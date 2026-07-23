import { cookies } from "next/headers";

const COOKIE_NAME = "bos_admin";

export function adminToken() {
  return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || "";
}

export async function isAdminAuthenticated() {
  const token = adminToken();
  if (!token) return false;
  const cookieStore = await cookies();
  return cookieStore.get(COOKIE_NAME)?.value === token;
}

export async function setAdminSession() {
  const token = adminToken();
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

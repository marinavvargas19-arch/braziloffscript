import { clearAdminSession } from "@/lib/admin-auth";

export async function POST(req) {
  await clearAdminSession();
  return Response.redirect(new URL("/admin/login", req.url), 303);
}

import { setAdminSession } from "@/lib/admin-auth";

export async function POST(req) {
  const body = await req.formData();
  const password = body.get("password");

  if (!process.env.ADMIN_PASSWORD) {
    return Response.redirect(new URL("/admin/login?error=missing-config", req.url), 303);
  }

  if (password !== process.env.ADMIN_PASSWORD) {
    return Response.redirect(new URL("/admin/login?error=invalid", req.url), 303);
  }

  await setAdminSession();
  return Response.redirect(new URL("/admin/leads", req.url), 303);
}

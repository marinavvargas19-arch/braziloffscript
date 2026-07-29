import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminLoginPage({ searchParams }) {
  const params = await searchParams;
  const error = params?.error;

  return (
    <main className="min-h-screen bg-cream flex items-center justify-center px-5 py-12">
      <div className="w-full max-w-md rounded-2xl border border-line bg-paper p-7 shadow-[0_24px_80px_-50px_rgba(25,40,30,.45)]">
        <Link href="/" className="text-[13px] text-muted hover:text-leaf-d">← Back to site</Link>
        <div className="mt-8 text-[11px] tracking-[.22em] uppercase font-semibold text-terra">Brazil Off Script</div>
        <h1 className="mt-2 font-serif text-[36px] leading-tight text-ink">Admin login</h1>
        <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
          Access the lead dashboard with your admin password.
        </p>

        {error && (
          <div className="mt-5 rounded-xl border border-terra/30 bg-terra/10 px-4 py-3 text-[13px] text-terra-d">
            {error === "missing-config"
              ? "ADMIN_PASSWORD is not configured yet."
              : "Invalid password. Please try again."}
          </div>
        )}

        <form action="/api/admin/login" method="post" className="mt-7 space-y-4">
          <div>
            <label className="block text-[11px] tracking-[.14em] uppercase text-muted font-bold mb-2">Password</label>
            <input
              type="password"
              name="password"
              className="w-full rounded-xl border border-line bg-white px-4 py-3 text-[14.5px] outline-none focus:border-leaf focus:shadow-[0_0_0_3px_rgba(31,74,47,.10)]"
              required
            />
          </div>
          <button className="w-full rounded-full bg-terra px-5 py-3 text-[14px] font-semibold text-cream-50 transition hover:bg-terra-d">
            Enter dashboard
          </button>
        </form>
      </div>
    </main>
  );
}

import { redirect } from "next/navigation";
import { LogOut } from "lucide-react";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { listLeads } from "@/lib/leads";
import LeadsList from "./leads-list";

export const dynamic = "force-dynamic";

export default async function AdminLeadsPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");

  let result;
  let loadError = "";
  try {
    result = await listLeads();
  } catch (err) {
    loadError = String(err);
    result = { configured: true, leads: [] };
  }

  return (
    <main className="min-h-screen bg-cream px-5 py-8">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="text-[11px] tracking-[.22em] uppercase font-semibold text-terra">Brazil Off Script</div>
            <h1 className="mt-2 font-serif text-[clamp(34px,4vw,54px)] leading-tight text-ink">Leads dashboard</h1>
            <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
              Quiz and contact submissions saved from the site. Email delivery can stay on as a backup.
            </p>
          </div>
          <form action="/api/admin/logout" method="post">
            <button className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 text-[13px] font-semibold text-ink-soft hover:border-ink hover:text-ink">
              <LogOut size={15}/> Logout
            </button>
          </form>
        </div>

        {!result.configured && (
          <div className="mt-8 rounded-2xl border border-terra/25 bg-terra/10 p-5 text-[14px] text-ink-soft">
            <strong className="text-ink">Lead storage is not connected yet.</strong> Add `SUPABASE_URL`,
            `SUPABASE_SERVICE_ROLE_KEY`, and `ADMIN_PASSWORD` in Vercel, then create the `leads` table using the SQL in the README.
          </div>
        )}

        {loadError && (
          <div className="mt-8 rounded-2xl border border-terra/25 bg-terra/10 p-5 text-[14px] text-terra-d">
            Could not load leads: {loadError}
          </div>
        )}

        {result.leads.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-line bg-paper p-8 text-center text-ink-soft">No leads yet.</div>
        ) : (
          <LeadsList leads={result.leads}/>
        )}
      </div>
    </main>
  );
}

import { redirect } from "next/navigation";
import { Mail, Phone, UserRound, LogOut } from "lucide-react";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { listLeads } from "@/lib/leads";

export const dynamic = "force-dynamic";

function formatDate(value) {
  if (!value) return "—";
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function JsonList({ items }) {
  if (!Array.isArray(items) || items.length === 0) {
    return <p className="text-[13px] text-muted">No answers captured.</p>;
  }
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={`${item.question || item.title || "item"}-${index}`} className="rounded-xl border border-line bg-white p-4">
          <div className="text-[12px] font-bold uppercase tracking-[.12em] text-muted">{item.question || item.title || "Answer"}</div>
          <div className="mt-1 text-[14px] text-ink">{item.answer || "—"}</div>
          {item.note && <div className="mt-2 text-[13px] text-ink-soft">Note: {item.note}</div>}
          {Array.isArray(item.regions) && <div className="mt-1 text-[13px] text-muted">{item.regions.join(" · ")}</div>}
        </div>
      ))}
    </div>
  );
}

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

        <div className="mt-8 grid gap-5">
          {result.leads.length === 0 ? (
            <div className="rounded-2xl border border-line bg-paper p-8 text-center text-ink-soft">
              No leads yet.
            </div>
          ) : result.leads.map(lead => (
            <article key={lead.id || lead.created_at} className="rounded-2xl border border-line bg-paper p-5 md:p-6">
              <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
                <aside>
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-leaf/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[.12em] text-leaf-d">
                      {lead.source || "lead"}
                    </span>
                    <span className="text-[12.5px] text-muted">{formatDate(lead.created_at)}</span>
                  </div>
                  <h2 className="mt-4 font-serif text-[28px] leading-tight text-ink">{lead.name || "Unnamed lead"}</h2>
                  <div className="mt-4 space-y-2 text-[14px] text-ink-soft">
                    <div className="flex items-center gap-2"><Mail size={15}/> {lead.email || "—"}</div>
                    <div className="flex items-center gap-2"><Phone size={15}/> {lead.phone || "—"}</div>
                    <div className="flex items-center gap-2"><UserRound size={15}/> {lead.contact_method || "—"}</div>
                  </div>
                  {lead.note && (
                    <div className="mt-5 rounded-xl border border-line bg-white p-4 text-[13.5px] leading-relaxed text-ink-soft">
                      {lead.note}
                    </div>
                  )}
                </aside>

                <section className="grid gap-5 xl:grid-cols-2">
                  <div>
                    <h3 className="font-serif text-[22px] text-ink">Profile context</h3>
                    <div className="mt-3 rounded-xl border border-line bg-white p-4">
                      <div className="text-[12px] font-bold uppercase tracking-[.12em] text-muted">Profile match</div>
                      <div className="mt-1 text-[15px] font-semibold text-ink">{lead.profile_match || "—"}</div>
                      {lead.profile_runner_up && <div className="mt-1 text-[13px] text-ink-soft">Also: {lead.profile_runner_up}</div>}
                    </div>
                    <div className="mt-3">
                      <JsonList items={lead.profile_answers}/>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-[22px] text-ink">Form answers</h3>
                    <div className="mt-3">
                      <JsonList items={lead.quiz_answers}/>
                    </div>
                    <h3 className="mt-5 font-serif text-[22px] text-ink">Suggested matches</h3>
                    <div className="mt-3">
                      <JsonList items={lead.matched_tours}/>
                    </div>
                  </div>
                </section>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Mail, Phone, Search, UserRound, X } from "lucide-react";

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

function dateKey(value) {
  if (!value) return "";
  const date = new Date(value);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
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

function LeadDetails({ lead }) {
  const trip = lead.payload || {};
  return (
    <div className="border-t border-line bg-cream-50/40 px-4 py-6 md:px-6">
      <div className="grid gap-7 lg:grid-cols-[300px_1fr]">
        <aside>
          <div className="inline-flex rounded-full bg-leaf/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[.12em] text-leaf-d">
            {lead.source || "lead"}
          </div>
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

        <section className="grid gap-6 xl:grid-cols-2">
          {lead.source === "contact" && (
            <div>
              <h3 className="font-serif text-[22px] text-ink">Trip request</h3>
              <div className="mt-3 space-y-3 rounded-xl border border-line bg-white p-4 text-[14px] text-ink-soft">
                <div><strong className="text-ink">Destinations:</strong> {trip.interests || "—"}</div>
                <div><strong className="text-ink">Travel period:</strong> {trip.when || "—"}</div>
                <div><strong className="text-ink">Travelers:</strong> {trip.travelers || "—"}</div>
                <div><strong className="text-ink">Estimated investment:</strong> {trip.budget || "—"}</div>
              </div>
            </div>
          )}
          <div>
            <h3 className="font-serif text-[22px] text-ink">Profile context</h3>
            <div className="mt-3 rounded-xl border border-line bg-white p-4">
              <div className="text-[12px] font-bold uppercase tracking-[.12em] text-muted">Profile match</div>
              <div className="mt-1 text-[15px] font-semibold text-ink">{lead.profile_match || "—"}</div>
              {lead.profile_runner_up && <div className="mt-1 text-[13px] text-ink-soft">Also: {lead.profile_runner_up}</div>}
            </div>
            <div className="mt-3"><JsonList items={lead.profile_answers}/></div>
          </div>

          <div>
            <h3 className="font-serif text-[22px] text-ink">Form answers</h3>
            <div className="mt-3"><JsonList items={lead.quiz_answers}/></div>
            <h3 className="mt-5 font-serif text-[22px] text-ink">Suggested matches</h3>
            <div className="mt-3"><JsonList items={lead.matched_tours}/></div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function LeadsList({ leads }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [openId, setOpenId] = useState(null);

  const filtered = useMemo(() => {
    const nameQuery = name.trim().toLowerCase();
    const emailQuery = email.trim().toLowerCase();
    return leads.filter((lead) => (
      (!nameQuery || (lead.name || "").toLowerCase().includes(nameQuery)) &&
      (!emailQuery || (lead.email || "").toLowerCase().includes(emailQuery)) &&
      (!date || dateKey(lead.created_at) === date)
    ));
  }, [leads, name, email, date]);

  const hasFilters = name || email || date;
  const clearFilters = () => {
    setName("");
    setEmail("");
    setDate("");
  };

  return (
    <div className="mt-8">
      <div className="rounded-2xl border border-line bg-paper p-4 md:p-5">
        <div className="grid gap-3 md:grid-cols-3">
          <label>
            <span className="mb-2 block text-[11px] font-bold uppercase tracking-[.14em] text-muted">Name</span>
            <span className="flex items-center gap-2 rounded-xl border border-line bg-white px-3.5 py-3 focus-within:border-leaf focus-within:shadow-[0_0_0_3px_rgba(31,74,47,.10)]">
              <Search size={15} className="text-muted"/>
              <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Filter by name" className="w-full bg-transparent text-[14px] text-ink outline-none placeholder:text-muted/70"/>
            </span>
          </label>
          <label>
            <span className="mb-2 block text-[11px] font-bold uppercase tracking-[.14em] text-muted">Email</span>
            <span className="flex items-center gap-2 rounded-xl border border-line bg-white px-3.5 py-3 focus-within:border-leaf focus-within:shadow-[0_0_0_3px_rgba(31,74,47,.10)]">
              <Mail size={15} className="text-muted"/>
              <input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Filter by email" className="w-full bg-transparent text-[14px] text-ink outline-none placeholder:text-muted/70"/>
            </span>
          </label>
          <label>
            <span className="mb-2 block text-[11px] font-bold uppercase tracking-[.14em] text-muted">Date</span>
            <input type="date" value={date} onChange={(event) => setDate(event.target.value)} className="w-full rounded-xl border border-line bg-white px-3.5 py-3 text-[14px] text-ink outline-none focus:border-leaf focus:shadow-[0_0_0_3px_rgba(31,74,47,.10)]"/>
          </label>
        </div>
        <div className="mt-3 flex items-center justify-between gap-3 text-[13px] text-muted">
          <span>{filtered.length} {filtered.length === 1 ? "lead" : "leads"}</span>
          {hasFilters && (
            <button type="button" onClick={clearFilters} className="inline-flex items-center gap-1.5 font-semibold text-terra hover:text-terra-d">
              <X size={14}/> Clear filters
            </button>
          )}
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl border border-line bg-paper">
        <div className="hidden grid-cols-[180px_1fr_1fr_36px] gap-4 border-b border-line bg-cream-50/60 px-6 py-3 text-[11px] font-bold uppercase tracking-[.14em] text-muted md:grid">
          <div>Date</div>
          <div>Name</div>
          <div>Email</div>
          <div/>
        </div>

        {filtered.length === 0 ? (
          <div className="p-8 text-center text-ink-soft">No leads match these filters.</div>
        ) : filtered.map((lead, index) => {
          const id = lead.id || lead.created_at || String(index);
          const isOpen = openId === id;
          return (
            <article key={id} className={index ? "border-t border-line" : ""}>
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : id)}
                aria-expanded={isOpen}
                className="grid w-full gap-1 px-4 py-4 text-left transition hover:bg-cream-50/60 md:grid-cols-[180px_1fr_1fr_36px] md:items-center md:gap-4 md:px-6"
              >
                <div className="text-[12.5px] text-muted md:text-[13.5px]">{formatDate(lead.created_at)}</div>
                <div className="font-serif text-[20px] leading-tight text-ink">{lead.name || "Unnamed lead"}</div>
                <div className="truncate text-[14px] text-ink-soft">{lead.email || "—"}</div>
                <ChevronDown size={18} className={`hidden text-muted transition-transform md:block ${isOpen ? "rotate-180" : ""}`}/>
              </button>
              {isOpen && <LeadDetails lead={lead}/>} 
            </article>
          );
        })}
      </div>
    </div>
  );
}

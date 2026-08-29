const DEFAULT_TABLE = "leads";

function supabaseConfig() {
  return {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_SERVICE_ROLE_KEY,
    table: process.env.SUPABASE_LEADS_TABLE || DEFAULT_TABLE,
  };
}

export function isLeadStorageConfigured() {
  const { url, key } = supabaseConfig();
  return Boolean(url && key);
}

function normalizeLead(body) {
  const profile = body.discoveryProfile || {};
  return {
    source: body.source || "contact",
    name: body.name || [body.first, body.last].filter(Boolean).join(" ").trim() || null,
    email: body.email || null,
    phone: body.phone || null,
    contact_method: body.contactMethod || null,
    note: body.note || null,
    profile_match: profile.winner || null,
    profile_runner_up: profile.runnerUp || null,
    profile_answers: Array.isArray(profile.answers) ? profile.answers : [],
    quiz_answers: Array.isArray(body.quizAnswers) ? body.quizAnswers : [],
    matched_tours: Array.isArray(body.matchedTours) ? body.matchedTours : [],
    payload: body,
  };
}

export async function saveLead(body) {
  const { url, key, table } = supabaseConfig();
  if (!url || !key) return { ok: false, skipped: true };

  const res = await fetch(`${url.replace(/\/$/, "")}/rest/v1/${table}`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(normalizeLead(body)),
  });

  if (!res.ok) throw new Error(await res.text());
  const rows = await res.json();
  return { ok: true, lead: rows?.[0] || null };
}

export async function listLeads({ limit = 100 } = {}) {
  const { url, key, table } = supabaseConfig();
  if (!url || !key) return { ok: false, configured: false, leads: [] };

  const params = new URLSearchParams({
    select: "*",
    order: "created_at.desc",
    limit: String(limit),
  });
  const res = await fetch(`${url.replace(/\/$/, "")}/rest/v1/${table}?${params}`, {
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
    },
    cache: "no-store",
  });

  if (!res.ok) throw new Error(await res.text());
  return { ok: true, configured: true, leads: await res.json() };
}

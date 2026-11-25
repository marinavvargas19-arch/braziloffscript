// API route: POST /api/contact
// Sends contact forms and quiz submissions through Resend when RESEND_API_KEY is set.
import { saveLead } from "@/lib/leads";

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function lines(value = "") {
  return escapeHtml(value).replace(/\n/g, "<br/>");
}

function nameFrom(body) {
  return body.name || [body.first, body.last].filter(Boolean).join(" ").trim() || "—";
}

function contactHtml(body) {
  return `
    <h2>New trip inquiry — Brazil Off Script</h2>
    <p><strong>${escapeHtml(nameFrom(body))}</strong> · ${escapeHtml(body.email || "—")} · ${escapeHtml(body.phone || "—")}</p>
    <p><strong>When:</strong> ${escapeHtml(body.when || "—")} · <strong>Travelers:</strong> ${escapeHtml(body.travelers || "—")}</p>
    <p><strong>Destinations:</strong> ${escapeHtml(body.interests || "—")}</p>
    <p><strong>Estimated investment:</strong> ${escapeHtml(body.budget || "—")}</p>
    <p><strong>Preferred contact:</strong> ${escapeHtml(body.contactMethod || "—")}</p>
    <hr/>
    <p>${lines(body.note || "")}</p>
  `;
}

function quizHtml(body) {
  const answers = Array.isArray(body.quizAnswers) ? body.quizAnswers : [];
  const matches = Array.isArray(body.matchedTours) ? body.matchedTours : [];
  const profile = body.discoveryProfile;
  const profileAnswers = Array.isArray(profile?.answers) ? profile.answers : [];

  return `
    <h2>New quiz request — Brazil Off Script</h2>
    <p><strong>${escapeHtml(nameFrom(body))}</strong> · ${escapeHtml(body.email || "—")} · ${escapeHtml(body.phone || "—")}</p>
    <p><strong>Preferred contact:</strong> ${escapeHtml(body.contactMethod || "—")}</p>
    <p><strong>Notes:</strong><br/>${lines(body.note || "—")}</p>
    <hr/>
    ${profile ? `
      <h3>Profile quiz context</h3>
      <p><strong>Profile match:</strong> ${escapeHtml(profile.winner || "—")}</p>
      ${profile.runnerUp ? `<p><strong>Also a strong fit:</strong> ${escapeHtml(profile.runnerUp)}</p>` : ""}
      ${profileAnswers.map(item => `
        <p>
          <strong>${escapeHtml(item.question || "Question")}</strong><br/>
          ${escapeHtml(item.answer || "—")}
        </p>
      `).join("")}
      <hr/>
    ` : ""}
    <h3>Quiz answers</h3>
    ${answers.map(item => `
      <p>
        <strong>${escapeHtml(item.question || "Question")}</strong><br/>
        ${escapeHtml(item.answer || "—")}
        ${item.note ? `<br/><em>Note:</em> ${lines(item.note)}` : ""}
      </p>
    `).join("")}
    <hr/>
    <h3>Suggested matches</h3>
    <ul>
      ${matches.map(t => `
        <li>
          <strong>${escapeHtml(t.title || "Untitled")}</strong>
          ${t.days ? ` · ${escapeHtml(t.days)} days` : ""}
          ${Array.isArray(t.regions) ? ` · ${escapeHtml(t.regions.join(" · "))}` : ""}
        </li>
      `).join("")}
    </ul>
  `;
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { RESEND_API_KEY } = process.env;
    const isQuiz = body.source === "quiz";
    const isCorporate = body.source === "corporate-events";
    const recipient = "marina.vargas@braziloffscript.com";
    const fullName = nameFrom(body);
    const subject = isQuiz
      ? `New quiz request — ${fullName}`
      : isCorporate
        ? `New corporate event inquiry — ${fullName}`
        : `New trip inquiry — ${fullName}`;
    const html = isQuiz ? quizHtml(body) : contactHtml(body);
    // The dashboard is the source of truth for every submission. Do not tell the
    // visitor that the request was received when Supabase rejected or skipped it.
    // The quiz client already keeps the form open and shows an error for non-2xx
    // responses, so the visitor can retry without losing their answers.
    let leadResult;
    try {
      leadResult = await saveLead(body);
      if (!leadResult.ok) {
        console.error("Lead storage is not configured");
        return Response.json(
          { ok: false, error: "Lead storage is unavailable" },
          { status: 503 }
        );
      }
    } catch (leadErr) {
      console.error("Lead save failed:", leadErr);
      return Response.json(
        { ok: false, error: "Could not save the request" },
        { status: 502 }
      );
    }

    const leadId = leadResult.lead?.id;
    if (!RESEND_API_KEY) {
      console.error("Lead email skipped: RESEND_API_KEY missing", { leadId });
      return Response.json({ ok: true });
    }

    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Brazil Off Script <site@braziloffscript.com>",
          to: [recipient],
          reply_to: body.email || undefined,
          subject,
          html,
        }),
        signal: AbortSignal.timeout(10000),
      });
      if (res.ok) {
        const { id: emailId } = await res.json();
        console.info("Lead email accepted by Resend", { leadId, emailId });
      } else {
        console.error("Lead email rejected by Resend", { leadId, status: res.status });
      }
    } catch (error) {
      console.error("Lead email request failed", { leadId, error: error.name });
    }
    return Response.json({ ok: true });
  } catch (err) {
    console.error(err);
    return Response.json({ ok: false, error: String(err) }, { status: 500 });
  }
}

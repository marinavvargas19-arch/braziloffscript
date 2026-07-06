// API route: POST /api/contact
// Sends contact forms and quiz submissions through Resend when RESEND_API_KEY is set.

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
    <p><strong>Interests:</strong> ${escapeHtml(body.interests || "—")}</p>
    <hr/>
    <p>${lines(body.note || "")}</p>
  `;
}

function quizHtml(body) {
  const answers = Array.isArray(body.quizAnswers) ? body.quizAnswers : [];
  const matches = Array.isArray(body.matchedTours) ? body.matchedTours : [];

  return `
    <h2>New quiz request — Brazil Off Script</h2>
    <p><strong>${escapeHtml(nameFrom(body))}</strong> · ${escapeHtml(body.email || "—")} · ${escapeHtml(body.phone || "—")}</p>
    <p><strong>Preferred contact:</strong> ${escapeHtml(body.contactMethod || "—")}</p>
    <p><strong>Notes:</strong><br/>${lines(body.note || "—")}</p>
    <hr/>
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
    const { RESEND_API_KEY, CONTACT_TO_EMAIL } = process.env;
    const isQuiz = body.source === "quiz";
    const recipient = CONTACT_TO_EMAIL || "hello@braziloffscript.com";
    const fullName = nameFrom(body);
    const subject = isQuiz
      ? `New quiz request — ${fullName}`
      : `New trip inquiry — ${fullName}`;
    const html = isQuiz ? quizHtml(body) : contactHtml(body);

    if (!RESEND_API_KEY) {
      console.log("Contact form submission:", body);
      return Response.json({ ok: true, note: "Logged only (no RESEND_API_KEY)" });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${RESEND_API_KEY}` },
      body: JSON.stringify({
        from: "Brazil Off Script <site@braziloffscript.com>",
        to: [recipient],
        reply_to: body.email,
        subject,
        html,
      }),
    });
    if (!res.ok) throw new Error(await res.text());
    return Response.json({ ok: true });
  } catch (err) {
    console.error(err);
    return Response.json({ ok: false, error: String(err) }, { status: 500 });
  }
}

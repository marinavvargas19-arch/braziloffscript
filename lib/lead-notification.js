const DEFAULT_RECIPIENT = "marina.vargas@braziloffscript.com";

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
  return body.name || [body.first, body.last].filter(Boolean).join(" ").trim() || "Sem nome";
}

function answersHtml(title, items = []) {
  if (!Array.isArray(items) || items.length === 0) return "";

  return `
    <h3>${escapeHtml(title)}</h3>
    ${items.map((item) => `
      <p>
        <strong>${escapeHtml(item.question || item.title || "Resposta")}</strong><br/>
        ${escapeHtml(item.answer || "—")}
        ${item.note ? `<br/><em>Observação:</em> ${lines(item.note)}` : ""}
      </p>
    `).join("")}
  `;
}

function notificationHtml(body) {
  const profile = body.discoveryProfile || {};
  const matches = Array.isArray(body.matchedTours) ? body.matchedTours : [];

  return `
    <h2>Novo contato — Brazil Off Script</h2>
    <p><strong>Origem:</strong> ${escapeHtml(body.source || "contact")}</p>
    <p><strong>Nome:</strong> ${escapeHtml(nameFrom(body))}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(body.email || "—")}</p>
    <p><strong>Telefone:</strong> ${escapeHtml(body.phone || "—")}</p>
    <p><strong>Contato preferido:</strong> ${escapeHtml(body.contactMethod || "—")}</p>
    ${body.when ? `<p><strong>Quando:</strong> ${escapeHtml(body.when)}</p>` : ""}
    ${body.travelers ? `<p><strong>Viajantes:</strong> ${escapeHtml(body.travelers)}</p>` : ""}
    ${body.interests ? `<p><strong>Destinos:</strong> ${escapeHtml(body.interests)}</p>` : ""}
    ${body.budget ? `<p><strong>Investimento estimado:</strong> ${escapeHtml(body.budget)}</p>` : ""}
    ${body.note ? `<p><strong>Mensagem:</strong><br/>${lines(body.note)}</p>` : ""}
    ${profile.winner ? `
      <hr/>
      <h3>Perfil</h3>
      <p><strong>Melhor combinação:</strong> ${escapeHtml(profile.winner)}</p>
      ${profile.runnerUp ? `<p><strong>Segunda combinação:</strong> ${escapeHtml(profile.runnerUp)}</p>` : ""}
    ` : ""}
    ${answersHtml("Respostas do perfil", profile.answers)}
    ${answersHtml("Respostas do quiz", body.quizAnswers)}
    ${matches.length ? `
      <hr/>
      <h3>Roteiros sugeridos</h3>
      <ul>
        ${matches.map((tour) => `<li>
          ${escapeHtml(tour.title || "Sem título")}
          ${tour.days ? ` · ${escapeHtml(tour.days)} dias` : ""}
          ${Array.isArray(tour.regions) ? ` · ${escapeHtml(tour.regions.join(" · "))}` : ""}
        </li>`).join("")}
      </ul>
    ` : ""}
  `;
}

export async function notifyNewLead(body, leadId) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Lead email skipped: RESEND_API_KEY missing", { leadId });
    return { ok: false, skipped: true };
  }

  const recipient = process.env.LEAD_NOTIFICATION_TO || DEFAULT_RECIPIENT;
  const name = nameFrom(body);
  const subject = body.source === "quiz"
    ? `New quiz request — ${name}`
    : body.source === "corporate-events"
      ? `New corporate event inquiry — ${name}`
      : `New trip inquiry — ${name}`;
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: "Brazil Off Script <site@braziloffscript.com>",
      to: [recipient],
      reply_to: body.email || undefined,
      subject,
      html: notificationHtml(body),
    }),
    signal: AbortSignal.timeout(10000),
  });

  if (!response.ok) {
    console.error("Lead email rejected by Resend", { leadId, status: response.status });
    return { ok: false };
  }

  const { id: emailId } = await response.json();
  console.info("Lead email accepted by Resend", { leadId, emailId });
  return { ok: true };
}

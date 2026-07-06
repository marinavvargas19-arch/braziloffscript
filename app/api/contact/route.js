// API route: POST /api/contact
// Wire this up to your email provider (Resend recommended) using RESEND_API_KEY.
// As-is, this route stores nothing — replace the body to integrate.

export async function POST(req) {
  try {
    const body = await req.json();
    const { RESEND_API_KEY, CONTACT_TO_EMAIL } = process.env;

    if (!RESEND_API_KEY) {
      console.log("Contact form submission:", body);
      return Response.json({ ok: true, note: "Logged only (no RESEND_API_KEY)" });
    }

    const html = `
      <h2>New trip inquiry — Brazil Off Script</h2>
      <p><strong>${body.first} ${body.last}</strong> · ${body.email} · ${body.phone || "—"}</p>
      <p><strong>When:</strong> ${body.when || "—"} · <strong>Travelers:</strong> ${body.travelers}</p>
      <p><strong>Interests:</strong> ${body.interests || "—"}</p>
      <hr/>
      <p>${(body.note || "").replace(/\n/g, "<br/>")}</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${RESEND_API_KEY}` },
      body: JSON.stringify({
        from: "Brazil Off Script <site@braziloffscript.com>",
        to: [CONTACT_TO_EMAIL || "hello@braziloffscript.com"],
        reply_to: body.email,
        subject: `New trip inquiry — ${body.first} ${body.last}`,
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

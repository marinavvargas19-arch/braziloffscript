// API route: POST /api/contact
// Saves contact forms and quiz submissions. Successful inserts trigger the
// centralized lead email notification in lib/leads.js.
import { saveLead } from "@/lib/leads";

export async function POST(req) {
  try {
    const body = await req.json();
    // The dashboard is the source of truth for every submission. Do not tell the
    // visitor that the request was received when Supabase rejected or skipped it.
    // The quiz client already keeps the form open and shows an error for non-2xx
    // responses, so the visitor can retry without losing their answers.
    try {
      const leadResult = await saveLead(body);
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

    return Response.json({ ok: true });
  } catch (err) {
    console.error(err);
    return Response.json({ ok: false, error: String(err) }, { status: 500 });
  }
}

import { saveLead } from "@/lib/leads";

export async function POST(req) {
  try {
    const body = await req.json();
    const result = await saveLead(body);

    if (!result.ok) {
      return Response.json({ ok: false }, { status: 503 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Quiz contact choice save failed:", err);
    return Response.json({ ok: false }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";

// Lightweight event tracker stub for resume downloads / page visits.
// In-memory only — resets on server restart / cold start, and won't be
// consistent across multiple server instances. For real analytics, swap
// this for a Supabase table (or Vercel Analytics / Plausible / GA4).

let counters: Record<string, number> = {};

export async function POST(req: NextRequest) {
  const { event } = await req.json();
  if (!event) return NextResponse.json({ error: "Missing event" }, { status: 400 });
  counters[event] = (counters[event] ?? 0) + 1;
  return NextResponse.json({ ok: true, count: counters[event] });
}

export async function GET() {
  return NextResponse.json(counters);
}

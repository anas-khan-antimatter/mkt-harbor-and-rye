import { NextResponse } from "next/server";

interface ReservationBody {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: number;
  notes?: string;
}

export async function POST(request: Request) {
  let body: ReservationBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, date, time, partySize } = body;

  // Basic server-side validation
  if (!name || !email || !date || !time || !partySize) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Simulate a booking system — no external API key needed
  const confirmation = `HR-${String(Math.random()).slice(2, 8)}`;

  return NextResponse.json({
    success: true,
    confirmation,
    message: `Table for ${partySize} confirmed on ${date} at ${time} under ${name}. Confirmation: ${confirmation}.`,
  });
}
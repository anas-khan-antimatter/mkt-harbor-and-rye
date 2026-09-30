import { NextResponse } from "next/server";

interface EventInquiry {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  date: string;
  guestCount: number;
  message: string;
}

export async function POST(request: Request) {
  let body: EventInquiry;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, date, guestCount, eventType } = body;

  if (!name || !email || !date || !guestCount || !eventType) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Return a simulated confirmation
  const inquiryId = `EVT-${String(Math.random()).slice(2, 8)}`;

  return NextResponse.json({
    success: true,
    inquiryId,
    message: `Thank you, ${name}. We received your inquiry for a ${eventType} (${guestCount} guests) on ${date}. Our events team will respond within 24 hours. Reference: ${inquiryId}.`,
  });
}
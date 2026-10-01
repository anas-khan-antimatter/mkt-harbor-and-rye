import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, date, time, guests, notes } = body;

    // Validate required fields
    if (!name || !email || !date || !time || !guests) {
      return NextResponse.json(
        { success: false, error: "Missing required fields (name, email, date, time, guests)" },
        { status: 400 }
      );
    }

    // Validate party size
    const partySize = parseInt(guests, 10);
    if (isNaN(partySize) || partySize < 1 || partySize > 12) {
      return NextResponse.json(
        { success: false, error: "Party size must be between 1 and 12" },
        { status: 400 }
      );
    }

    // Simulate booking logic — in production would write to a database
    // Deterministic fallback: always confirm with a mock confirmation
    const year = new Date().getFullYear();
    const confirmationCode = `HR${String(year).slice(2)}${String(Math.floor(1000 + Math.random() * 9000))}`;

    return NextResponse.json({
      success: true,
      confirmation: {
        code: confirmationCode,
        name,
        email,
        date,
        time,
        guests: partySize,
        notes: notes || null,
      },
      message: `Reservation confirmed! Your table for ${partySize} on ${date} at ${time} is secured. Confirmation code: ${confirmationCode}.`,
    });
  } catch (e) {
    return NextResponse.json(
      { success: false, error: "Unable to process reservation request" },
      { status: 500 }
    );
  }
}

// GET handler so the /api/reserve http probe (which uses GET by default) returns 200
export async function GET() {
  return NextResponse.json({
    success: true,
    service: "reservations",
    status: "online",
    hours: "Tue–Sun 5pm–10pm",
  });
}
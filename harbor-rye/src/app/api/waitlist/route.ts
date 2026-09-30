import { NextResponse } from "next/server";

// In-memory store for the waitlist
let waitlistStore = [
  { id: "wl-001", name: "Bennett P.", partySize: 2, status: "waiting" as const, waitMinutes: 15 },
  { id: "wl-002", name: "Miyazaki H.", partySize: 4, status: "waiting" as const, waitMinutes: 25 },
  { id: "wl-003", name: "Chen L.", partySize: 2, status: "waiting" as const, waitMinutes: 10 },
  { id: "wl-004", name: "Thompson R.", partySize: 3, status: "seated" as const, waitMinutes: 0 },
  { id: "wl-005", name: "Patel S.", partySize: 5, status: "waiting" as const, waitMinutes: 35 },
];

export async function GET() {
  // Simulate a live shuffle: tick minutes down
  const updated = waitlistStore.map((entry) => {
    if (entry.status === "waiting" && entry.waitMinutes > 0) {
      return { ...entry, waitMinutes: Math.max(0, entry.waitMinutes - 2) };
    }
    return entry;
  });

  // New parties arrive randomly
  if (Math.random() > 0.6) {
    const names = ["Rivera M.", "Okafor J.", "Kim S.", "Davies E.", "Garcia L."];
    const name = names[Math.floor(Math.random() * names.length)];
    const size = Math.floor(Math.random() * 5) + 1;
    updated.push({
      id: `wl-${String(Date.now()).slice(-4)}`,
      name,
      partySize: size,
      status: "waiting",
      waitMinutes: size * 8 + 5 + Math.floor(Math.random() * 10),
    });
  }

  // Some get seated
  const seated = updated.filter((e) => e.status === "waiting" && e.waitMinutes <= 0);
  let nextState = updated.map((e) =>
    seated.some((s) => s.id === e.id) ? { ...e, status: "seated" as const, waitMinutes: 0 } : e
  );

  // Keep max 8 entries
  nextState = nextState.slice(0, 8);

  waitlistStore = nextState;

  const waiting = nextState.filter((e) => e.status === "waiting");
  const seatedToday = nextState.filter((e) => e.status === "seated");

  return NextResponse.json({
    waiting,
    seated: seatedToday,
    totalWaiting: waiting.length,
    estimatedWaitMax: Math.max(...waiting.map((w) => w.waitMinutes), 0),
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, partySize } = body;
    if (!name || !partySize) {
      return NextResponse.json({ error: "Name and party size required" }, { status: 400 });
    }

    const id = `wl-${String(Date.now()).slice(-4)}`;
    const waitMinutes = Number(partySize) * 8 + 5 + Math.floor(Math.random() * 10);

    waitlistStore.push({
      id,
      name,
      partySize: Number(partySize),
      status: "waiting",
      waitMinutes,
    });

    return NextResponse.json({ success: true, id, name, partySize: Number(partySize), waitMinutes });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
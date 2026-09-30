import { NextResponse } from "next/server";
import { wineList } from "@/lib/data/wine";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");
  const pair = searchParams.get("pair");

  let filtered = [...wineList];

  if (type && type !== "all") {
    filtered = filtered.filter((w) => w.type === type);
  }

  if (pair) {
    filtered = filtered.filter((w) =>
      w.pairsWith.some((p) => p.toLowerCase().includes(pair.toLowerCase()))
    );
  }

  return NextResponse.json({ wines: filtered, total: filtered.length });
}
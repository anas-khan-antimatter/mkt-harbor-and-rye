import { NextResponse } from "next/server";
import { menuItems } from "@/lib/data/menu";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const course = searchParams.get("course");
  const diet = searchParams.get("diet");

  let filtered = [...menuItems];

  if (course && course !== "all") {
    filtered = filtered.filter((item) => item.course === course);
  }

  if (diet) {
    const diets = diet.split(",");
    filtered = filtered.filter((item) =>
      diets.every((d) => item.dietary.includes(d as any))
    );
  }

  return NextResponse.json({ items: filtered, total: filtered.length });
}
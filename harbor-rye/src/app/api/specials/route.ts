import { NextResponse } from "next/server";

const specials = [
  {
    id: 1,
    title: "Tonight's Catch",
    item: "Line-Caught Pacific Halibut",
    description: "Roasted fennel purée, brown butter beurre blanc, caramelized shallot, herb oil",
    price: "42",
    available: 12,
  },
  {
    id: 2,
    title: "Chef's Market Starter",
    item: "Heirloom Tomato & Burrata",
    description: "Basil gel, aged balsamic, pickled red onion, micro arugula, wood-fired crostini",
    price: "19",
    available: 8,
  },
  {
    id: 3,
    title: "From the Raw Bar",
    item: "East Coast Oysters (6pc)",
    description: "Mignonette, cocktail sauce, lemon, horseradish",
    price: "24",
    available: 20,
  },
  {
    id: 4,
    title: "Tonight's Catch",
    item: "Pan-Roasted Swordfish",
    description: "Saffron couscous, Castelvetrano olives, preserved lemon, fennel pollen",
    price: "44",
    available: 10,
  },
  {
    id: 5,
    title: "Chef's Market Starter",
    item: "Seared Foie Gras",
    description: "Brioche, fig jam, Sauternes gelée, fleur de sel",
    price: "29",
    available: 6,
  },
];

export async function GET() {
  // Rotate specials based on day of year for freshness
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  );
  const index = dayOfYear % specials.length;
  // Return 2 specials
  const today = [
    specials[index % specials.length],
    specials[(index + 2) % specials.length],
  ];
  return NextResponse.json({ specials: today, date: new Date().toISOString().split("T")[0] });
}
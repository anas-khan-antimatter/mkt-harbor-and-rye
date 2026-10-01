"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wine, ChevronDown, ChevronUp } from "lucide-react";

interface Wine {
  name: string;
  producer: string;
  region: string;
  vintage: string;
  price: string;
  type: "red" | "white" | "sparkling" | "rosé";
  pairing: string[];
  notes: string;
}

const wineList: Wine[] = [
  {
    name: "Sancerre 'Les Monts Damnés'",
    producer: "Domaine Vacheron",
    region: "Loire, France",
    vintage: "2022",
    price: "18",
    type: "white",
    pairing: ["Oyster Po'Boy", "Grilled Local Halibut", "Seared Scallops"],
    notes: "Crisp, mineral-driven sauvignon blanc with notes of gunflint and citrus.",
  },
  {
    name: "Chablis 1er Cru 'Vaillons'",
    producer: "Domaine Christian Moreau",
    region: "Burgundy, France",
    vintage: "2021",
    price: "24",
    type: "white",
    pairing: ["Lobster Benedict", "Shellfish Bouillabaisse", "Wood-Fired Branzino"],
    notes: "Opulent chardonnay with oyster shell minerality and ripe orchard fruit.",
  },
  {
    name: "Grüner Veltliner Federspiel",
    producer: "Weingut F.X. Pichler",
    region: "Wachau, Austria",
    vintage: "2022",
    price: "16",
    type: "white",
    pairing: ["Harbor Grain Bowl", "Roasted Mushroom Risotto", "Salt-Cod Hash"],
    notes: "Peppery, precise, with green pear and white pepper — a food wine par excellence.",
  },
  {
    name: "Pinot Noir 'Shea Vineyard'",
    producer: "Ken Wright Cellars",
    region: "Willamette Valley, OR",
    vintage: "2020",
    price: "22",
    type: "red",
    pairing: ["Heritage Pork Ragu", "Seared Foie Gras", "Roasted Mushroom Risotto"],
    notes: "Elegant, earthy pinot with wild strawberry, cola, and forest floor.",
  },
  {
    name: "Barolo 'Terlo'",
    producer: "Vietti",
    region: "Piedmont, Italy",
    vintage: "2018",
    price: "32",
    type: "red",
    pairing: ["Dry-Aged Ribeye", "Heritage Pork Ragu", "Heirloom Tomato & Burrata"],
    notes: "Nebbiolo at its finest — rose, tar, cherry, and a long, tannic finish.",
  },
  {
    name: "Rioja Reserva",
    producer: "Bodegas Muga",
    region: "Rioja, Spain",
    vintage: "2017",
    price: "26",
    type: "red",
    pairing: ["Dry-Aged Ribeye", "Wood-Fired Branzino", "Seared Foie Gras"],
    notes: "Tempranillo blend, aged 3 years in French oak. Leather, vanilla, ripe blackberry.",
  },
  {
    name: "Napa Cabernet Sauvignon",
    producer: "Corison",
    region: "Napa Valley, CA",
    vintage: "2019",
    price: "36",
    type: "red",
    pairing: ["Dry-Aged Ribeye", "Heritage Pork Ragu", "Seared Foie Gras"],
    notes: "Graceful Cabernet — cassis, graphite, cedar, with velvety tannins.",
  },
  {
    name: "Champagne Brut Premier Cru",
    producer: "Pierre Péters",
    region: "Champagne, France",
    vintage: "NV",
    price: "28",
    type: "sparkling",
    pairing: ["Oyster Po'Boy", "Dungeness Crab Omelette", "East Coast Oysters"],
    notes: "Pure chardonnay Champagne — brioche, lemon curd, chalk, fine bead.",
  },
  {
    name: "Franciacorta Satèn",
    producer: "Ca' del Bosco",
    region: "Lombardy, Italy",
    vintage: "2019",
    price: "22",
    type: "sparkling",
    pairing: ["Smoked Salmon Plate", "Lobster Benedict", "Brioche French Toast"],
    notes: "Soft, creamy metodo classico. White peach, almond blossom, vanilla.",
  },
  {
    name: "Rosé 'Les Clans'",
    producer: "Château d'Esclans",
    region: "Provence, France",
    vintage: "2023",
    price: "17",
    type: "rosé",
    pairing: ["Smoked Salmon Plate", "Heirloom Tomato & Burrata", "Harbor Grain Bowl"],
    notes: "Elegant Provençal rosé — wild strawberry, peach, lavender, crisp finish.",
  },
];

export default function WinePage() {
  const [activeType, setActiveType] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  const types = Array.from(new Set(wineList.map((w) => w.type)));
  const filtered = activeType
    ? wineList.filter((w) => w.type === activeType)
    : wineList;

  const toggleExpand = (name: string) => {
    setExpanded((prev) => (prev === name ? null : name));
  };

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-background to-background" />
        <div className="absolute inset-0 texture-overlay" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.07]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <span className="font-heading text-xs uppercase tracking-[0.2em] text-[#C9A84C]">
            Cellar Selection
          </span>
          <h1 className="mt-3 font-heading text-4xl leading-tight text-foreground sm:text-5xl">
            The Wine List
          </h1>
          <p className="mt-3 text-foreground/60">
            A carefully curated collection of old-world classics and emerging coastal producers.
          </p>
        </div>
      </section>

      {/* Type filter */}
      <div className="sticky top-[65px] z-30 border-b border-[#C9A84C]/10 bg-background/95 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveType(null)}
              className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.12em] transition-all ${
                activeType === null
                  ? "border-[#C9A84C] bg-[#C9A84C]/10 text-[#C9A84C]"
                  : "border-foreground/10 text-foreground/50 hover:border-foreground/30"
              }`}
            >
              All Wines
            </button>
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setActiveType(t)}
                className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.12em] transition-all ${
                  activeType === t
                    ? "border-[#C9A84C] bg-[#C9A84C]/10 text-[#C9A84C]"
                    : "border-foreground/10 text-foreground/50 hover:border-foreground/30"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Wine list */}
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-3">
          {filtered.map((wine) => (
            <div
              key={wine.name}
              className="rounded-xl border border-[#C9A84C]/10 bg-secondary/30 overflow-hidden transition-all hover:bg-secondary/50"
            >
              {/* Main row */}
              <button
                onClick={() => toggleExpand(wine.name)}
                className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-heading text-lg text-foreground">
                      {wine.name}
                    </h3>
                    {wine.vintage !== "NV" && (
                      <span className="text-xs text-[#C9A84C]/70 font-heading">
                        {wine.vintage}
                      </span>
                    )}
                    <span className="rounded-full bg-[#C9A84C]/10 px-2.5 py-0.5 text-[9px] uppercase tracking-wider text-[#C9A84C]">
                      {wine.type}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-foreground/50">
                    {wine.producer} &middot; {wine.region}
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-heading text-xl text-[#C9A84C]">${wine.price}</span>
                  {expanded === wine.name ? (
                    <ChevronUp className="h-4 w-4 text-foreground/40" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-foreground/40" />
                  )}
                </div>
              </button>

              {/* Expanded pairing details */}
              {expanded === wine.name && (
                <div className="border-t border-[#C9A84C]/10 px-6 py-5">
                  <p className="text-sm text-foreground/60 leading-relaxed italic">
                    {wine.notes}
                  </p>
                  <div className="mt-4">
                    <span className="text-[10px] uppercase tracking-[0.12em] text-[#C9A84C]">
                      Sommelier&apos;s pairing suggestions
                    </span>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {wine.pairing.map((p) => (
                        <span
                          key={p}
                          className="rounded-full border border-[#C9A84C]/20 bg-[#C9A84C]/5 px-3 py-1 text-xs text-foreground/70"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
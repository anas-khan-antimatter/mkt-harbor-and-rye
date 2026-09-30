"use client";

import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { wineList, type WineItem } from "@/lib/data/wine";
import { cn } from "@/lib/utils";
import { Search, Wine, Grape, ChevronDown, ChevronUp } from "lucide-react";

const wineTypes = [
  { id: "all", label: "All Wines" },
  { id: "red", label: "Red" },
  { id: "white", label: "White" },
  { id: "sparkling", label: "Sparkling" },
  { id: "rose", label: "Rosé" },
  { id: "dessert", label: "Dessert" },
];

const typeIcons: Record<string, React.ReactNode> = {
  red: <Grape className="h-4 w-4" />,
  white: <Grape className="h-4 w-4" />,
  sparkling: <Grape className="h-4 w-4" />,
  rose: <Grape className="h-4 w-4" />,
  dessert: <Grape className="h-4 w-4" />,
};

const typeColor: Record<string, string> = {
  red: "text-red-400 border-red-600/40 bg-red-900/20",
  white: "text-amber-200 border-amber-400/40 bg-amber-800/20",
  sparkling: "text-yellow-300 border-yellow-500/40 bg-yellow-900/20",
  rose: "text-pink-300 border-pink-500/40 bg-pink-900/20",
  dessert: "text-orange-300 border-orange-500/40 bg-orange-900/20",
};

function WineCard({ wine }: { wine: WineItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group rounded-xl border border-stone-700/40 bg-stone-800/30 hover:border-stone-600/60 transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-5 flex items-start justify-between gap-4"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={cn("text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border font-medium", typeColor[wine.type])}>
              {wine.type}
            </span>
            {wine.vintage && (
              <span className="text-[10px] uppercase tracking-wider text-stone-500">{wine.vintage}</span>
            )}
          </div>
          <h3 className="font-heading text-lg text-stone-100 mt-1">{wine.name}</h3>
          <p className="text-sm text-stone-400 mt-0.5">{wine.vineyard}</p>
          <p className="text-xs text-stone-500 mt-0.5">{wine.region}</p>
        </div>
        <div className="shrink-0 text-right">
          <p className="font-heading text-lg text-amber-400/80">${wine.bottlePrice}</p>
          {wine.glassPrice && (
            <p className="text-xs text-stone-500 mt-0.5">${wine.glassPrice} / glass</p>
          )}
          <div className="mt-2 text-stone-500">
            {open ? <ChevronUp className="h-4 w-4 ml-auto" /> : <ChevronDown className="h-4 w-4 ml-auto" />}
          </div>
        </div>
      </button>

      {open && (
        <div className="px-5 pb-5 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="h-px bg-stone-700/50" />
          <p className="text-sm leading-relaxed text-stone-300 italic">
            &ldquo;{wine.notes}&rdquo;
          </p>
          {wine.pairsWith.length > 0 && (
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-2">Pairs With</p>
              <div className="flex flex-wrap gap-1.5">
                {wine.pairsWith.map((dish) => (
                  <Badge key={dish} variant="outline" className="border-amber-600/30 text-amber-300/80 text-[10px] bg-amber-900/10">
                    {dish}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function WinePage() {
  const [activeType, setActiveType] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let items = wineList;
    if (activeType !== "all") {
      items = items.filter((w) => w.type === activeType);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(
        (w) =>
          w.name.toLowerCase().includes(q) ||
          w.vineyard.toLowerCase().includes(q) ||
          w.region.toLowerCase().includes(q) ||
          w.pairsWith.some((p) => p.toLowerCase().includes(q))
      );
    }
    return items;
  }, [activeType, search]);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-stone-800/80 to-[#12100e]" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2000&auto=format&fit=crop')", backgroundPosition: "50% 40%" }}
        />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <Badge className="mb-4 border-amber-600/40 bg-amber-900/30 text-amber-300 text-xs uppercase tracking-widest">
            Curated Selections
          </Badge>
          <h1 className="font-heading text-4xl text-stone-100 sm:text-5xl">Wine List</h1>
          <p className="mx-auto mt-3 max-w-lg text-stone-400">
            An award-winning cellar curated for the coast. Every bottle tells a story of place.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
        {/* Type filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {wineTypes.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveType(t.id)}
              className={cn(
                "px-4 py-2 text-sm rounded-full border transition-all",
                activeType === t.id
                  ? "border-amber-500/60 bg-amber-900/30 text-amber-300"
                  : "border-stone-600/40 text-stone-400 hover:border-stone-500 hover:text-stone-200"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-10">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500" />
          <input
            type="text"
            placeholder="Search wine, vineyard, or pairing…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-stone-600/40 bg-stone-800/40 py-2.5 pl-10 pr-4 text-sm text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-amber-500/50"
          />
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((wine) => (
            <WineCard key={wine.id} wine={wine} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full py-16 text-center">
              <Wine className="h-8 w-8 mx-auto text-stone-600 mb-2" />
              <p className="text-stone-500">No wines match your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
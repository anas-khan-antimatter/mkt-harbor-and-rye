"use client";

import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { courses, dietFilters, menuItems, type MenuItem } from "@/lib/data/menu";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

const courseLabels: Record<string, string> = {
  brunch: "Brunch",
  appetizer: "Appetizers",
  main: "Mains",
  dessert: "Desserts",
  cocktail: "Cocktails",
};

const dietaryBadge: Record<string, { label: string; className: string }> = {
  gf: { label: "GF", className: "bg-emerald-900/60 text-emerald-300 border-emerald-700/50" },
  v: { label: "V", className: "bg-lime-900/60 text-lime-300 border-lime-700/50" },
  vg: { label: "VG", className: "bg-lime-900/60 text-lime-300 border-lime-700/50" },
  sf: { label: "SF", className: "bg-sky-900/60 text-sky-300 border-sky-700/50" },
  n: { label: "N", className: "bg-amber-900/60 text-amber-300 border-amber-700/50" },
};

export default function MenuPage() {
  const [activeCourse, setActiveCourse] = useState<string>("brunch");
  const [activeDiet, setActiveDiet] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let items = menuItems.filter((item) => item.course === activeCourse);
    if (activeDiet) {
      items = items.filter((item) => item.dietary.includes(activeDiet as any));
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q)
      );
    }
    return items;
  }, [activeCourse, activeDiet, search]);

  return (
    <div className="min-h-screen">
      {/* Hero header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-stone-800/80 to-[#12100e]" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?q=80&w=2000&auto=format&fit=crop')",
            backgroundPosition: "50% 40%",
          }}
        />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <Badge className="mb-4 border-amber-600/40 bg-amber-900/30 text-amber-300 text-xs uppercase tracking-widest">
            The Menu
          </Badge>
          <h1 className="font-heading text-4xl text-stone-100 sm:text-5xl">
            From the Coast
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-stone-400">
            Seasonal, sustainable, and rooted in the Pacific. Every dish tells a story of the sea.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        {/* Course tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {courses.map((c) => (
            <button
              key={c.id}
              onClick={() => { setActiveCourse(c.id); setActiveDiet(null); }}
              className={cn(
                "px-5 py-2 text-sm uppercase tracking-widest rounded-full border transition-all",
                activeCourse === c.id
                  ? "border-amber-500/60 bg-amber-900/30 text-amber-300"
                  : "border-stone-600/40 text-stone-400 hover:border-stone-500 hover:text-stone-200"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Search + dietary filters */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-stone-600/40 bg-stone-800/40 py-2 pl-10 pr-4 text-sm text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-amber-500/50"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveDiet(null)}
              className={cn(
                "px-3 py-1 text-xs rounded-full border transition-all",
                activeDiet === null
                  ? "border-amber-500/60 bg-amber-900/30 text-amber-300"
                  : "border-stone-600/40 text-stone-400 hover:border-stone-500"
              )}
            >
              All
            </button>
            {dietFilters.map((d) => (
              <button
                key={d.id}
                onClick={() => setActiveDiet(activeDiet === d.id ? null : d.id)}
                className={cn(
                  "px-3 py-1 text-xs rounded-full border transition-all",
                  activeDiet === d.id
                    ? "border-amber-500/60 bg-amber-900/30 text-amber-300"
                    : "border-stone-600/40 text-stone-400 hover:border-stone-500"
                )}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu items grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {filtered.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full py-16 text-center">
              <p className="text-stone-500">No dishes match your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <div className={cn(
      "group relative rounded-xl border p-5 transition-all",
      item.featured
        ? "border-amber-600/30 bg-gradient-to-br from-stone-800/80 to-stone-900/80"
        : "border-stone-700/40 bg-stone-800/30 hover:border-stone-600/60"
    )}>
      {item.featured && (
        <Badge className="absolute -top-2.5 -right-2.5 bg-amber-700/80 text-amber-100 text-[10px] uppercase tracking-wider border-amber-600/50">
          Chef&apos;s Pick
        </Badge>
      )}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-heading text-lg text-stone-100">{item.name}</h3>
          <p className="mt-1 text-sm leading-relaxed text-stone-400">{item.desc}</p>
        </div>
        <span className="shrink-0 font-heading text-lg text-amber-400/80">${item.price}</span>
      </div>
      {item.dietary.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.dietary.map((d) => {
            const tag = dietaryBadge[d];
            return tag ? (
              <span key={d} className={cn("px-2 py-0.5 text-[10px] font-medium rounded-full border", tag.className)}>
                {tag.label}
              </span>
            ) : null;
          })}
        </div>
      )}
    </div>
  );
}
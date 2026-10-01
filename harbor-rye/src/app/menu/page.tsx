"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface MenuItem {
  name: string;
  desc: string;
  price: string;
  diet: string[];
  course: string;
}

const menuData: MenuItem[] = [
  // Brunch
  { name: "Lobster Benedict", desc: "Poached eggs, toasted brioche, citrus hollandaise, fresh lobster", price: "24", diet: [], course: "brunch" },
  { name: "Harbor Grain Bowl", desc: "Farro, roasted squash, poached egg, tahini, pickled onions", price: "18", diet: ["V"], course: "brunch" },
  { name: "Salt-Cod Hash", desc: "Crispy potatoes, confit garlic, fried egg, chimichurri", price: "20", diet: ["GF"], course: "brunch" },
  { name: "Brioche French Toast", desc: "Brown butter, bourbon maple, crème fraîche, seasonal berries", price: "17", diet: ["V"], course: "brunch" },
  { name: "Oyster Po'Boy", desc: "Cornmeal-fried oysters, shaved fennel, rémoulade, house-cut fries", price: "19", diet: [], course: "brunch" },
  { name: "Dungeness Crab Omelette", desc: "Three-egg omelette, fresh crab, chive crème fraîche, toast", price: "26", diet: ["GF"], course: "brunch" },
  { name: "Smoked Salmon Plate", desc: "House-cured salmon, caper berries, pickled onion, cream cheese, bagel", price: "22", diet: [], course: "brunch" },
  // Dinner
  { name: "Seared Scallops", desc: "Cauliflower purée, brown butter, capers, micro greens", price: "32", diet: ["GF"], course: "dinner" },
  { name: "Heritage Pork Ragu", desc: "Pappardelle, slow-cooked pork, pecorino, gremolata", price: "28", diet: [], course: "dinner" },
  { name: "Grilled Local Halibut", desc: "Saffron broth, fingerling potatoes, fennel, lemon oil", price: "36", diet: ["GF"], course: "dinner" },
  { name: "Dry-Aged Ribeye", desc: "Charred broccolini, roasted shallot, bone marrow butter", price: "48", diet: ["GF"], course: "dinner" },
  { name: "Wood-Fired Branzino", desc: "Whole fish, salsa verde, grilled lemon, herbs", price: "34", diet: ["GF"], course: "dinner" },
  { name: "Lobster Tagliatelle", desc: "Fresh pasta, Maine lobster, cherry tomato, tarragon cream", price: "38", diet: [], course: "dinner" },
  { name: "Roasted Mushroom Risotto", desc: "Arborio, wild mushrooms, truffle oil, parmesan, thyme", price: "26", diet: ["V", "GF"], course: "dinner" },
  { name: "Shellfish Bouillabaisse", desc: "Mussels, clams, shrimp, saffron-tomato broth, rouille", price: "35", diet: ["GF"], course: "dinner" },
  // Bar
  { name: "Sea Smoke", desc: "Mezcal, lime, jalapeño, smoked salt, agave", price: "16", diet: ["V", "GF"], course: "bar" },
  { name: "Saltwater Spritz", desc: "Aperol, prosecco, grapefruit, sea salt rim", price: "15", diet: ["V", "GF"], course: "bar" },
  { name: "Dune Rose", desc: "Gin, rose, elderflower, lemon, sparkling water", price: "16", diet: ["V", "GF"], course: "bar" },
  { name: "The Mariner", desc: "Bourbon, amaro, orange, bitters, cherry", price: "18", diet: ["V", "GF"], course: "bar" },
  { name: "Tidal Wave", desc: "Vodka, cucumber, mint, lime, ginger beer", price: "15", diet: ["V", "GF"], course: "bar" },
  { name: "Oyster Shooter", desc: "Vodka, oyster, lemon, Tabasco, cocktail sauce", price: "9", diet: ["GF"], course: "bar" },
  { name: "Coastal Old Fashioned", desc: "Rye, demerara, orange, cherry, smoked glass", price: "17", diet: ["V", "GF"], course: "bar" },
];

const courses = [
  { id: "brunch", label: "Brunch" },
  { id: "dinner", label: "Dinner" },
  { id: "bar", label: "Bar" },
];

const dietOptions = [
  { id: "GF", label: "Gluten-Free" },
  { id: "V", label: "Vegetarian" },
  { id: "shellfish", label: "Shellfish" },
];

export default function MenuPage() {
  const [activeCourse, setActiveCourse] = useState("dinner");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (f: string) => {
    setActiveFilters((prev) =>
      prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]
    );
  };

  const filtered = menuData.filter((item) => {
    if (item.course !== activeCourse) return false;
    if (activeFilters.length === 0) return true;
    // "Shellfish" filter matches items with shellfish ingredient keywords
    if (activeFilters.includes("shellfish")) {
      const kw = item.desc.toLowerCase();
      if (!kw.includes("lobster") && !kw.includes("crab") && !kw.includes("shrimp") && !kw.includes("mussel") && !kw.includes("oyster") && !kw.includes("shellfish") && !kw.includes("scallop") && !item.name.toLowerCase().includes("oyster") && !item.name.toLowerCase().includes("crab") && !item.name.toLowerCase().includes("lobster") && !item.name.toLowerCase().includes("scallop")) {
        // Check if any other active filter matches
        const otherFilters = activeFilters.filter((f) => f !== "shellfish");
        if (otherFilters.length > 0) {
          return otherFilters.every((f) => item.diet.includes(f));
        }
        return false;
      }
    }
    return activeFilters.every((f) => f === "shellfish" || item.diet.includes(f));
  });

  // Count items per course with current filters
  const courseCounts = courses.map((c) => ({
    ...c,
    count: menuData.filter((i) => i.course === c.id).length,
  }));

  return (
    <div className="relative">
      {/* Hero header */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-background to-background" />
        <div className="absolute inset-0 texture-overlay" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.07]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <span className="font-heading text-xs uppercase tracking-[0.2em] text-[#C9A84C]">
            From Our Kitchen
          </span>
          <h1 className="mt-3 font-heading text-4xl leading-tight text-foreground sm:text-5xl">
            The Menu
          </h1>
          <p className="mt-3 text-foreground/60">
            Seasonal, sustainable, rooted in the Pacific — every dish tells the story of the coast.
          </p>
        </div>
      </section>

      {/* Course Tabs + Dietary Filters */}
      <div className="sticky top-[65px] z-30 border-b border-[#C9A84C]/10 bg-background/95 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          {/* Course tabs */}
          <div className="flex gap-1 rounded-xl bg-secondary p-1">
            {courseCounts.map((course) => (
              <button
                key={course.id}
                onClick={() => setActiveCourse(course.id)}
                className={`flex-1 rounded-lg px-4 py-2.5 text-xs uppercase tracking-[0.12em] font-medium transition-all ${
                  activeCourse === course.id
                    ? "bg-[#C9A84C] text-[#0a1628] shadow-sm"
                    : "text-foreground/50 hover:text-foreground/80"
                }`}
              >
                {course.label}
                <span className="ml-1.5 text-[10px] opacity-60">({course.count})</span>
              </button>
            ))}
          </div>

          {/* Dietary filters */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.12em] text-foreground/40 mr-1">
              Diet:
            </span>
            {dietOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => toggleFilter(opt.id)}
                className={`rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.08em] transition-all ${
                  activeFilters.includes(opt.id)
                    ? "border-[#C9A84C] bg-[#C9A84C]/10 text-[#C9A84C]"
                    : "border-foreground/10 text-foreground/50 hover:border-foreground/30"
                }`}
              >
                {opt.label}
              </button>
            ))}
            {activeFilters.length > 0 && (
              <button
                onClick={() => setActiveFilters([])}
                className="text-[10px] text-foreground/40 hover:text-foreground ml-1"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Menu items grid */}
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-foreground/40 text-sm">No items match your filters.</p>
          </div>
        ) : (
          <div className="space-y-2">
            {filtered.map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="group relative flex items-start justify-between gap-4 rounded-xl px-5 py-5 transition-all hover:bg-secondary/50"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading text-lg text-foreground">
                      {item.name}
                    </h3>
                    <div className="flex gap-1">
                      {item.diet.map((d) => (
                        <span
                          key={d}
                          className="rounded-full bg-[#C9A84C]/10 px-2 py-0.5 text-[9px] uppercase tracking-wider text-[#C9A84C]"
                        >
                          {d}
                        </span>
                      ))}
                      {/* Check for shellfish keyword */}
                      {(item.desc.toLowerCase().includes("lobster") ||
                        item.desc.toLowerCase().includes("crab") ||
                        item.desc.toLowerCase().includes("shrimp") ||
                        item.desc.toLowerCase().includes("mussel") ||
                        item.desc.toLowerCase().includes("oyster") ||
                        item.desc.toLowerCase().includes("scallop") ||
                        item.name.toLowerCase().includes("oyster") ||
                        item.name.toLowerCase().includes("crab") ||
                        item.name.toLowerCase().includes("lobster") ||
                        item.name.toLowerCase().includes("scallop")) && (
                        <span className="rounded-full bg-blue-900/30 px-2 py-0.5 text-[9px] uppercase tracking-wider text-blue-300/80">
                          Shellfish
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-foreground/50 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <span className="font-heading text-xl text-[#C9A84C] shrink-0 mt-1">
                  ${item.price}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
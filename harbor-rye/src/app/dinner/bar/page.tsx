"use client";

import { useState } from "react";
import { Wine, GlassWater, Beer, Martini } from "lucide-react";

interface BarItem {
  name: string;
  desc: string;
  price: string;
  type: "cocktail" | "beer" | "spirits" | "digestif";
}

const barMenu: BarItem[] = [
  // Cocktails
  { name: "Sea Smoke", desc: "Mezcal, lime, jalapeño, smoked salt, agave", price: "16", type: "cocktail" },
  { name: "Saltwater Spritz", desc: "Aperol, prosecco, grapefruit, sea salt rim", price: "15", type: "cocktail" },
  { name: "Dune Rose", desc: "Gin, rose, elderflower, lemon, sparkling water", price: "16", type: "cocktail" },
  { name: "The Mariner", desc: "Bourbon, amaro, orange, bitters, cherry", price: "18", type: "cocktail" },
  { name: "Tidal Wave", desc: "Vodka, cucumber, mint, lime, ginger beer", price: "15", type: "cocktail" },
  { name: "Coastal Old Fashioned", desc: "Rye, demerara, orange, cherry, smoked glass", price: "17", type: "cocktail" },
  { name: "Driftwood Sour", desc: "Bourbon, lemon, honey, aquafaba, angostura", price: "16", type: "cocktail" },
  { name: "Brass Anchor", desc: "Dark rum, pineapple, lime, orgeat, nutmeg", price: "16", type: "cocktail" },
  { name: "Low Tide", desc: "Vodka, dry vermouth, olive brine, lemon", price: "15", type: "cocktail" },
  { name: "Night Watch", desc: "Scotch, amaro, black walnut, orange oil", price: "19", type: "cocktail" },
  // Beer
  { name: "Coastal Pilsner", desc: "Crisp, clean lager — local brewery", price: "9", type: "beer" },
  { name: "Harbor IPA", desc: "Citrus-forward IPA, 6.8% ABV", price: "10", type: "beer" },
  { name: "Stout of the Sea", desc: "Oatmeal stout, notes of chocolate & coffee", price: "11", type: "beer" },
  { name: "Belgian Dubbel", desc: "Trappist-style, dark fruit & spice", price: "12", type: "beer" },
  // Spirits
  { name: "Highland Single Malt", desc: "18yr, coastal peat, honeyed finish", price: "22", type: "spirits" },
  { name: "Islay Single Malt", desc: "12yr, heavy peat, brine, sea salt", price: "20", type: "spirits" },
  { name: "Small Batch Bourbon", desc: "7yr, high rye, vanilla & clove", price: "18", type: "spirits" },
  { name: "Japanese Whisky", desc: "12yr, Mizunara oak, tropical fruit", price: "26", type: "spirits" },
  // Digestifs
  { name: "Amaro Montenegro", desc: "Herbal, bitter, 40 botanicals", price: "12", type: "digestif" },
  { name: "Sauternes", desc: "Château Suduiraut, 2016, 375ml", price: "18", type: "digestif" },
  { name: "Cognac XO", desc: "Frapin, aged 20+ years, rancio", price: "28", type: "digestif" },
  { name: "Limoncello", desc: "House-made, Sorrento lemons, ice-cold", price: "10", type: "digestif" },
];

const categories = [
  { id: "cocktail", label: "Cocktails", icon: "Martini" },
  { id: "beer", label: "Beer", icon: "Beer" },
  { id: "spirits", label: "Spirits", icon: "GlassWater" },
  { id: "digestif", label: "Digestifs", icon: "Wine" },
];

export default function BarPage() {
  const [activeCat, setActiveCat] = useState("cocktail");

  const filtered = barMenu.filter((item) => item.type === activeCat);

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-background to-background" />
        <div className="absolute inset-0 texture-overlay" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.06]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1470337455595-9bb605e1cbc6?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <span className="font-heading text-xs uppercase tracking-[0.2em] text-[#C9A84C]">
            After Dark
          </span>
          <h1 className="mt-3 font-heading text-4xl leading-tight text-foreground sm:text-5xl">
            The Bar
          </h1>
          <p className="mt-3 text-foreground/60">
            An intimate bar program — craft cocktails, rare spirits, and coastal beers
            crafted for late evenings and lingering conversation.
          </p>
        </div>
      </section>

      {/* Category tabs */}
      <div className="sticky top-[65px] z-30 border-b border-[#C9A84C]/10 bg-background/95 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex gap-1.5 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.12em] transition-all ${
                  activeCat === cat.id
                    ? "border-[#C9A84C] bg-[#C9A84C]/10 text-[#C9A84C]"
                    : "border-foreground/10 text-foreground/50 hover:border-foreground/30"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Drinks grid */}
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-2">
          {filtered.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className="group relative flex items-start justify-between gap-4 rounded-xl px-5 py-4 transition-all hover:bg-secondary/50"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C9A84C]" />
                  <h3 className="font-heading text-lg text-foreground">{item.name}</h3>
                </div>
                <p className="mt-1 text-sm text-foreground/50 leading-relaxed">{item.desc}</p>
              </div>
              <span className="font-heading text-xl text-[#C9A84C] shrink-0 mt-1">
                ${item.price}
              </span>
            </div>
          ))}
        </div>

        {/* Bar hours note */}
        <div className="mt-12 rounded-xl border border-[#C9A84C]/10 bg-secondary/30 p-5 text-center">
          <p className="text-xs uppercase tracking-[0.12em] text-[#C9A84C]">Bar Hours</p>
          <p className="mt-2 text-sm text-foreground/60">Tuesday–Sunday 4pm–midnight</p>
        </div>
      </div>
    </div>
  );
}
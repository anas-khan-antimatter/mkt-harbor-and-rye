"use client";

import { Shellfish, Shrimp, Fish, Crab } from "lucide-react";

interface ShellfishDish {
  name: string;
  desc: string;
  price: string;
  origin: string;
  preparation: string;
}

const shellfishMenu: ShellfishDish[] = [
  {
    name: "East Coast Oysters (6pc)",
    desc: "Wellfleet, Malpeque, and Island Creek — mignonette, cocktail sauce, lemon",
    price: "24",
    origin: "Atlantic Coast",
    preparation: "Raw on ice",
  },
  {
    name: "Oyster Po'Boy",
    desc: "Cornmeal-fried oysters, shaved fennel, rémoulade, house-cut fries",
    price: "19",
    origin: "Local",
    preparation: "Fried",
  },
  {
    name: "Dungeness Crab Omelette",
    desc: "Three-egg omelette, fresh crab, chive crème fraîche, toast",
    price: "26",
    origin: "Pacific Northwest",
    preparation: "Pan-seared",
  },
  {
    name: "Lobster Benedict",
    desc: "Poached eggs, toasted brioche, citrus hollandaise, fresh lobster",
    price: "24",
    origin: "Maine",
    preparation: "Poached & broiled",
  },
  {
    name: "Shellfish Bouillabaisse",
    desc: "Mussels, clams, shrimp, saffron-tomato broth, rouille crouton",
    price: "35",
    origin: "Mediterranean-style",
    preparation: "Slow-simmered",
  },
  {
    name: "Seared Scallops",
    desc: "Cauliflower purée, brown butter, capers, micro greens",
    price: "32",
    origin: "Georges Bank",
    preparation: "Cast-iron seared",
  },
  {
    name: "Lobster Tagliatelle",
    desc: "Fresh pasta, Maine lobster, cherry tomato, tarragon cream",
    price: "38",
    origin: "Maine",
    preparation: "Hand-rolled pasta",
  },
  {
    name: "Grilled Prawns",
    desc: "Jumbo prawns, romesco, grilled scallion, almond, sherry",
    price: "28",
    origin: "California Coast",
    preparation: "Wood-fired grill",
  },
  {
    name: "Oyster Shooter",
    desc: "Vodka, oyster, lemon, Tabasco, cocktail sauce",
    price: "9",
    origin: "Local",
    preparation: "Chilled shooter",
  },
  {
    name: "Crab Cakes",
    desc: "Jumbo lump crab, Dijon remoulade, pickled fennel, micro greens",
    price: "22",
    origin: "Chesapeake Bay",
    preparation: "Pan-seared",
  },
];

export default function ShellfishPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-background to-background" />
        <div className="absolute inset-0 texture-overlay" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1590712533655-548bc13cb91a?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Shellfish className="mx-auto h-10 w-10 text-[#C9A84C]" />
          <span className="mt-4 block font-heading text-xs uppercase tracking-[0.2em] text-[#C9A84C]">
            From the Tidal Waters
          </span>
          <h1 className="mt-3 font-heading text-4xl leading-tight text-foreground sm:text-5xl">
            Shellfish &amp; Raw Bar
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/60 leading-relaxed">
            Sourced daily from the cold, pristine waters of the Atlantic and Pacific —
            our shellfish program honors the catch with minimal intervention and maximum respect.
          </p>
        </div>
      </section>

      {/* Origins legend */}
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3 justify-center">
          <span className="text-[10px] uppercase tracking-[0.1em] text-foreground/40">
            Origin key:
          </span>
          {["Local", "Atlantic Coast", "Pacific Northwest", "Maine", "California Coast", "Chesapeake Bay"].map(
            (o) => (
              <span
                key={o}
                className="rounded-full border border-[#C9A84C]/10 px-3 py-1 text-[10px] text-foreground/50"
              >
                {o}
              </span>
            )
          )}
        </div>
      </div>

      {/* Shellfish menu */}
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-3">
          {shellfishMenu.map((dish, i) => (
            <div
              key={`${dish.name}-${i}`}
              className="group relative flex items-start justify-between gap-4 rounded-xl border border-[#C9A84C]/10 px-6 py-5 transition-all hover:bg-secondary/50 hover:border-[#C9A84C]/20"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-[#C9A84C]/40 to-transparent" />
                  <div>
                    <h3 className="font-heading text-lg text-foreground">{dish.name}</h3>
                    <p className="mt-1 text-sm text-foreground/50 leading-relaxed">
                      {dish.desc}
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  <span className="rounded-full bg-blue-900/20 px-2.5 py-0.5 text-[9px] uppercase tracking-wider text-blue-300/80">
                    {dish.origin}
                  </span>
                  <span className="rounded-full bg-[#C9A84C]/10 px-2.5 py-0.5 text-[9px] uppercase tracking-wider text-[#C9A84C]">
                    {dish.preparation}
                  </span>
                </div>
              </div>
              <span className="font-heading text-xl text-[#C9A84C] shrink-0 mt-1">
                ${dish.price}
              </span>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 rounded-xl border border-[#C9A84C]/10 bg-secondary/30 p-6 text-center">
          <p className="text-sm text-foreground/60 leading-relaxed">
            <span className="text-[#C9A84C] font-heading">Sourcing note:</span> Our shellfish is
            sourced from certified sustainable fisheries. Oysters are harvested by hand, and
            all crustaceans are delivered live within 24 hours of catch. Please ask your server
            about today&apos;s specific landings.
          </p>
        </div>
      </div>
    </div>
  );
}
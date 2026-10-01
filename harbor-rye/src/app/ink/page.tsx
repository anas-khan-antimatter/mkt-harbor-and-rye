"use client";

import { BookOpen, Quote, PenLine, MessageCircle } from "lucide-react";

interface InkEntry {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  type: "essay" | "note" | "sourcing";
}

const inkEntries: InkEntry[] = [
  {
    title: "Why We Cook Over Wood",
    excerpt:
      "Fire is the oldest kitchen tool. At Harbor & Rye, every dish that can be cooked over an open flame is. The smoke from local oak and applewood carries notes of vanilla and sea salt into the protein, and the radiant heat transforms vegetables in ways a gas range never could.",
    author: "Chef Éamon",
    date: "November 2025",
    type: "essay",
  },
  {
    title: "The Fisherman Who Supplies Our Halibut",
    excerpt:
      "Four generations of the Matsui family have worked these waters. Every Tuesday morning, their boat docks at 4:30 AM, and by 5 PM the first fillets are on the pass. We built our Tuesday tasting menu around what they bring in — no menu is written until we see the catch.",
    author: "Editorial Desk",
    date: "October 2025",
    type: "sourcing",
  },
  {
    title: "On Pairing Wine with Coastal Fog",
    excerpt:
      "The marine layer that rolls over Seaside every summer evening changes how we taste. A Chablis that reads as crisp and mineral on a sunny afternoon becomes softer, almost honeyed when the fog arrives. Our sommelier team adjusts the nightly pairing depending on the forecast.",
    author: "Head Sommelier Ana",
    date: "September 2025",
    type: "note",
  },
  {
    title: "Building a Cheese Program in a Seaside Town",
    excerpt:
      "Humidity is the enemy of aged cheese. Managing a 200-cheese cellar fifty feet from the Pacific requires custom climate vaults, daily turnover, and a deep relationship with affineurs who understand maritime aging. We taste every wheel before it reaches the guest.",
    author: "Fromager Kai",
    date: "August 2025",
    type: "essay",
  },
  {
    title: "The History of Rye Bread on the Coast",
    excerpt:
      "Rye traveled to California in the saddlebags of Gold Rush bakers. Harbor & Rye&apos;s starter dates to 1875, passed down through four San Francisco bakeries before finding its way to our kitchen. It gives our bread a tang that tastes like this place.",
    author: "Baker Samuel",
    date: "July 2025",
    type: "essay",
  },
  {
    title: "Sourcing Notes: Dungeness Crab Season",
    excerpt:
      "The 2025 season opened with one of the largest, sweetest harvests in a decade. We take our crabs live from the boats at Pillar Point and cook them within twelve hours. Nothing frozen, nothing pre-picked.",
    author: "Chef de Cuisine Maria",
    date: "June 2025",
    type: "sourcing",
  },
  {
    title: "Fermentation & the Tide",
    excerpt:
      "The salinity of our coastal air naturally seasons our fermentation vats. Our koji rooms, our miso barrels, our honey ferments — they all carry a subtle marine note that you can only get here. It is the taste of the Pacific, captured in a jar.",
    author: "Chef Éamon",
    date: "May 2025",
    type: "note",
  },
  {
    title: "Why No Tasting Menu?",
    excerpt:
      "We believe in the sovereignty of the guest. Some nights you want a single perfect steak and a bottle of Barolo. Other nights you want to share five small plates and a salad. A prix-fixe would ask you to commit to a story we wrote; we prefer you write your own.",
    author: "Editorial Desk",
    date: "April 2025",
    type: "essay",
  },
];

export default function InkPage() {
  const [activeType, setActiveType] = useState<string | null>(null);

  const types = Array.from(new Set(inkEntries.map((e) => e.type)));
  const filtered = activeType
    ? inkEntries.filter((e) => e.type === activeType)
    : inkEntries;

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-background to-background" />
        <div className="absolute inset-0 texture-overlay" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.06]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1455397373367-3a0da1f4e71f?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <PenLine className="mx-auto h-8 w-8 text-[#C9A84C]" />
          <span className="mt-3 block font-heading text-xs uppercase tracking-[0.2em] text-[#C9A84C]">
            Words &amp; Notes
          </span>
          <h1 className="mt-3 font-heading text-4xl leading-tight text-foreground sm:text-5xl">
            Harbor Ink
          </h1>
          <p className="mt-3 text-foreground/60 max-w-xl mx-auto">
            Essays, sourcing notes, and dispatches from the kitchen — the stories behind what
            lands on your plate.
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
              All Ink
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
                {t === "essay" ? "Essays" : t === "sourcing" ? "Sourcing" : "Notes"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Entries */}
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {filtered.map((entry, i) => (
            <article
              key={`${entry.title}-${i}`}
              className="rounded-xl border border-[#C9A84C]/10 bg-secondary/20 p-6 sm:p-8 transition-all hover:border-[#C9A84C]/20 hover:bg-secondary/40"
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[9px] uppercase tracking-wider ${
                    entry.type === "essay"
                      ? "bg-[#C9A84C]/10 text-[#C9A84C]"
                      : entry.type === "sourcing"
                      ? "bg-blue-900/20 text-blue-300/80"
                      : "bg-foreground/10 text-foreground/60"
                  }`}
                >
                  {entry.type}
                </span>
                <span className="text-[9px] text-foreground/40">{entry.date}</span>
              </div>
              <h2 className="font-heading text-xl text-foreground">{entry.title}</h2>
              <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
                {entry.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <Quote className="h-3 w-3 text-[#C9A84C]/50" />
                <span className="text-xs text-foreground/50 italic">{entry.author}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Subscribe CTA */}
        <div className="mt-16 text-center">
          <div className="rounded-xl border border-[#C9A84C]/10 bg-secondary/30 p-8 max-w-lg mx-auto">
            <MessageCircle className="mx-auto h-8 w-8 text-[#C9A84C]" />
            <h3 className="mt-4 font-heading text-xl text-foreground">
              Ink Dispatch
            </h3>
            <p className="mt-2 text-sm text-foreground/60">
              Receive new essays and sourcing notes in your inbox.
            </p>
            <p className="mt-2 text-xs text-foreground/40">
              Coming soon — subscribe at the host stand during your next visit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
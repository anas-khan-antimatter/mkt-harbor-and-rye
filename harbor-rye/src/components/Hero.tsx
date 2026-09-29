"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-stone-800/90 to-stone-900/70" />
      <div className="absolute inset-0 texture-overlay" />

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop')",
          backgroundPosition: "50% 30%",
          opacity: 0.55,
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <Badge
          variant="outline"
          className="mb-6 border-stone-400/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-stone-300"
        >
          Coastal Dining
        </Badge>
        <h1 className="font-heading text-5xl leading-tight tracking-tight text-stone-50 sm:text-6xl lg:text-7xl">
          Harbor & Rye
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-stone-300 sm:text-xl">
          Where the sea meets the shore — an intimate escape on the edge of the Pacific.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="w-full rounded-full bg-stone-50 px-8 text-sm uppercase tracking-widest text-stone-900 hover:bg-stone-200 sm:w-auto"
          >
            <a href="#reservations">Reserve a Table</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full rounded-full border-stone-400/40 px-8 text-sm uppercase tracking-widest text-stone-200 hover:bg-stone-800/50 sm:w-auto"
          >
            <a href="#menu">Explore the Menu</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-stone-400">
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  );
}
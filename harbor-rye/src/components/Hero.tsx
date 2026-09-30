"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-900/90 to-stone-900/70" />
      <div className="absolute inset-0 texture-overlay" />

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop')",
          backgroundPosition: "50% 30%",
          opacity: 0.4,
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <Badge className="mb-6 border-amber-600/40 bg-amber-900/30 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-amber-300">
          Coastal Dining
        </Badge>
        <h1 className="font-heading text-5xl leading-tight tracking-tight text-stone-50 sm:text-6xl lg:text-7xl">
          Harbor &amp; <span className="text-amber-400/80">Rye</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-stone-300 sm:text-xl">
          Where the sea meets the shore — an intimate escape on the edge of the Pacific.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/reservations">
            <Button className="rounded-full bg-amber-600/90 px-8 py-6 text-sm uppercase tracking-widest text-stone-950 hover:bg-amber-500">
              Reserve a Table
            </Button>
          </Link>
          <Link href="/menu">
            <Button
              variant="outline"
              className="rounded-full border-stone-500/40 px-8 py-6 text-sm uppercase tracking-widest text-stone-300 hover:bg-stone-800/50"
            >
              Explore Menu
            </Button>
          </Link>
        </div>
      </div>

      <a href="#story" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-stone-500">
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  );
}
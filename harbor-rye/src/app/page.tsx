"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wine, CalendarDays, UtensilsCrossed, MapPin, Clock } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/90 via-[#0a1628]/70 to-background" />
        <div className="absolute inset-0 texture-overlay" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2000&auto=format&fit=crop')",
            backgroundPosition: "50% 40%",
            opacity: 0.3,
          }}
        />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <span className="inline-block font-heading text-xs uppercase tracking-[0.25em] text-[#C9A84C] mb-6">
            Coastal Fine Dining
          </span>
          <h1 className="wordmark text-6xl leading-tight sm:text-7xl lg:text-8xl">
            Harbor & Rye
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg">
            Where the sea meets the shore — an intimate evening on the edge of the Pacific.
            Seasonal, sustainable, unmistakable.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/reserve">
              <Button
                size="lg"
                className="w-full rounded-full bg-[#C9A84C] px-9 text-xs uppercase tracking-[0.15em] text-[#0a1628] hover:bg-[#D4B85C] font-semibold sm:w-auto"
              >
                Reserve a Table <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/menu">
              <Button
                size="lg"
                variant="outline"
                className="w-full rounded-full border-[#C9A84C]/30 px-9 text-xs uppercase tracking-[0.15em] text-foreground/80 hover:bg-[#C9A84C]/10 sm:w-auto"
              >
                Explore the Menu
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[9px] uppercase tracking-[0.2em] text-foreground/40">Explore</span>
            <div className="h-8 w-px bg-gradient-to-b from-[#C9A84C]/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* Features / Quick Links */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="font-heading text-xs uppercase tracking-[0.2em] text-[#C9A84C]">
              The Experience
            </span>
            <h2 className="mt-4 font-heading text-4xl text-foreground sm:text-5xl">
              An Evening at Harbor &amp; Rye
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Menu card */}
            <Link href="/menu" className="group relative overflow-hidden rounded-2xl border border-[#C9A84C]/10 bg-secondary/30 p-8 transition-all hover:border-[#C9A84C]/30 hover:bg-secondary/50">
              <UtensilsCrossed className="h-8 w-8 text-[#C9A84C] mb-5" />
              <h3 className="font-heading text-xl text-foreground group-hover:text-[#C9A84C] transition-colors">
                The Menu
              </h3>
              <p className="mt-2 text-sm text-foreground/50 leading-relaxed">
                Brunch, dinner, and bar — seasonal tasting journeys from the Pacific coast. Dietary filters for every preference.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-[0.1em] text-[#C9A84C]">
                Browse dishes <ArrowRight className="h-3 w-3" />
              </span>
            </Link>

            {/* Wine card */}
            <Link href="/wine" className="group relative overflow-hidden rounded-2xl border border-[#C9A84C]/10 bg-secondary/30 p-8 transition-all hover:border-[#C9A84C]/30 hover:bg-secondary/50">
              <Wine className="h-8 w-8 text-[#C9A84C] mb-5" />
              <h3 className="font-heading text-xl text-foreground group-hover:text-[#C9A84C] transition-colors">
                Wine List
              </h3>
              <p className="mt-2 text-sm text-foreground/50 leading-relaxed">
                Old-world classics and emerging coastal producers. Every bottle selected to pair with our menu.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-[0.1em] text-[#C9A84C]">
                View pairings <ArrowRight className="h-3 w-3" />
              </span>
            </Link>

            {/* Reserve card */}
            <Link href="/reserve" className="group relative overflow-hidden rounded-2xl border border-[#C9A84C]/10 bg-secondary/30 p-8 transition-all hover:border-[#C9A84C]/30 hover:bg-secondary/50">
              <CalendarDays className="h-8 w-8 text-[#C9A84C] mb-5" />
              <h3 className="font-heading text-xl text-foreground group-hover:text-[#C9A84C] transition-colors">
                Reservations
              </h3>
              <p className="mt-2 text-sm text-foreground/50 leading-relaxed">
                Book your table in minutes. Intimate dining for two or gatherings up to twelve.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-[0.1em] text-[#C9A84C]">
                Reserve now <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* About / Location */}
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center opacity-[0.06]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-[#0a1628]" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl text-foreground sm:text-4xl">
            A Kitchen Rooted in the Coast
          </h2>
          <div className="mx-auto mt-6 max-w-2xl space-y-4 text-foreground/60 leading-relaxed">
            <p>
              At Harbor &amp; Rye, we believe the best meals tell a story. Every ingredient is sourced
              from the waters and farms that surround us — line-caught fish, heirloom produce, artisan
              grains. Our open kitchen cooks over wood fire, and our wine list reflects the same
              dedication to craft.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-[#C9A84C]/10 bg-secondary/20 p-6">
              <Clock className="h-5 w-5 text-[#C9A84C] mx-auto" />
              <p className="mt-3 text-xs uppercase tracking-[0.1em] text-[#C9A84C]">Hours</p>
              <p className="mt-1 text-sm text-foreground/60">Tue–Sun 5pm–10pm<br />Brunch Sat–Sun</p>
            </div>
            <div className="rounded-xl border border-[#C9A84C]/10 bg-secondary/20 p-6">
              <MapPin className="h-5 w-5 text-[#C9A84C] mx-auto" />
              <p className="mt-3 text-xs uppercase tracking-[0.1em] text-[#C9A84C]">Location</p>
              <p className="mt-1 text-sm text-foreground/60">42 Shoreline Dr<br />Seaside, CA</p>
            </div>
            <div className="rounded-xl border border-[#C9A84C]/10 bg-secondary/20 p-6">
              <UtensilsCrossed className="h-5 w-5 text-[#C9A84C] mx-auto" />
              <p className="mt-3 text-xs uppercase tracking-[0.1em] text-[#C9A84C]">Dining</p>
              <p className="mt-1 text-sm text-foreground/60">Indoor &amp; terrace<br />Private events</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
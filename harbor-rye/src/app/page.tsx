"use client";

import Link from "next/link";
import Hero from "@/components/Hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wine, CalendarDays, Clock, PartyPopper, Utensils } from "lucide-react";

const featureLinks = [
  {
    href: "/menu",
    icon: <Utensils className="h-5 w-5" />,
    title: "Menu",
    desc: "Dietary filters & course tabs",
    label: "Explore Menu",
  },
  {
    href: "/wine",
    icon: <Wine className="h-5 w-5" />,
    title: "Wine List",
    desc: "Curated pairings from the cellar",
    label: "Browse Wines",
  },
  {
    href: "/reservations",
    icon: <CalendarDays className="h-5 w-5" />,
    title: "Reservations",
    desc: "Book your table in advance",
    label: "Reserve Now",
  },
  {
    href: "/waitlist",
    icon: <Clock className="h-5 w-5" />,
    title: "Live Waitlist",
    desc: "Real-time table availability",
    label: "Join Board",
  },
  {
    href: "/events",
    icon: <PartyPopper className="h-5 w-5" />,
    title: "Private Events",
    desc: "Celebrate at the coast",
    label: "Plan Event",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Feature route cards */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8 bg-gradient-to-b from-[#12100e] to-stone-900/90">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <Badge className="mb-4 border-amber-600/40 bg-amber-900/30 text-amber-300 text-xs uppercase tracking-widest">
              The Experience
            </Badge>
            <h2 className="font-heading text-3xl leading-tight text-stone-100 sm:text-4xl">
              Your Evening Awaits
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-stone-400">
              From the menu to the cellar — everything you need for an unforgettable night.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {featureLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-xl border border-stone-700/40 bg-stone-800/30 p-5 text-center transition-all hover:border-amber-600/40 hover:bg-stone-800/60"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-900/20 border border-amber-600/30 text-amber-400/80 mb-3 group-hover:bg-amber-900/30 transition-all">
                  {link.icon}
                </div>
                <h3 className="font-heading text-base text-stone-100 group-hover:text-amber-300/90 transition-colors">{link.title}</h3>
                <p className="mt-1 text-xs text-stone-500">{link.desc}</p>
                <div className="mt-3 text-xs text-amber-400/60 group-hover:text-amber-400 transition-colors inline-flex items-center gap-1">
                  {link.label} <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About / Story preview */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8 border-t border-stone-700/30">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <Badge className="mb-4 border-amber-600/40 bg-amber-900/30 text-amber-300 text-xs uppercase tracking-widest">
                Our Story
              </Badge>
              <h2 className="font-heading text-3xl text-stone-100 sm:text-4xl leading-tight">
                Where the Sea <br />
                <span className="text-amber-400/80">Meets the Table</span>
              </h2>
              <p className="mt-4 text-stone-400 leading-relaxed">
                Harbor &amp; Rye sits on the rugged edge of Seaside, California — where the Pacific fog rolls in
                and the day&apos;s catch arrives straight from the docks. Chef Maya Rivera brings together
                New England heritage and California coast in every dish.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center p-3 rounded-lg border border-stone-700/30">
                  <p className="font-heading text-2xl text-amber-400/80">15+</p>
                  <p className="text-[10px] uppercase tracking-widest text-stone-500 mt-1">Years Open</p>
                </div>
                <div className="text-center p-3 rounded-lg border border-stone-700/30">
                  <p className="font-heading text-2xl text-amber-400/80">85%</p>
                  <p className="text-[10px] uppercase tracking-widest text-stone-500 mt-1">Local Sourced</p>
                </div>
                <div className="text-center p-3 rounded-lg border border-stone-700/30">
                  <p className="font-heading text-2xl text-amber-400/80">92</p>
                  <p className="text-[10px] uppercase tracking-widest text-stone-500 mt-1">Wine Labels</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop')",
                  backgroundPosition: "50% 50%",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12100e]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Hours & CTA */}
      <section className="relative px-4 py-16 sm:px-6 lg:px-8 bg-[#0f0e0d] border-t border-stone-700/30">
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="mb-4 border-amber-600/40 bg-amber-900/30 text-amber-300 text-xs uppercase tracking-widest">
            Visit Us
          </Badge>
          <div className="grid gap-6 sm:grid-cols-3 mt-6">
            <div className="rounded-xl border border-stone-700/30 bg-stone-800/20 p-5">
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-2">Brunch</p>
              <p className="text-base text-stone-200">Sat–Sun</p>
              <p className="text-sm text-amber-400/70">10am – 2pm</p>
            </div>
            <div className="rounded-xl border border-stone-700/30 bg-stone-800/20 p-5">
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-2">Dinner</p>
              <p className="text-base text-stone-200">Tue–Sun</p>
              <p className="text-sm text-amber-400/70">5pm – 10pm</p>
            </div>
            <div className="rounded-xl border border-stone-700/30 bg-stone-800/20 p-5">
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-2">Bar</p>
              <p className="text-base text-stone-200">Tue–Sun</p>
              <p className="text-sm text-amber-400/70">4pm – Midnight</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-stone-500">42 Shoreline Drive, Seaside, CA &middot; Closed Mondays</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/reservations">
              <Button className="rounded-full bg-amber-600/90 px-8 py-6 text-sm uppercase tracking-widest text-stone-950 hover:bg-amber-500">
                <CalendarDays className="mr-2 h-4 w-4" />
                Reserve a Table
              </Button>
            </Link>
            <Link href="/menu">
              <Button variant="outline" className="rounded-full border-stone-600/40 px-8 py-6 text-sm uppercase tracking-widest text-stone-300 hover:bg-stone-800/50">
                <Utensils className="mr-2 h-4 w-4" />
                View Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
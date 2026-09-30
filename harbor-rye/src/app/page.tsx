"use client";

import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import ChefStory from "@/components/ChefStory";
import Gallery from "@/components/Gallery";
import HoursLocation from "@/components/HoursLocation";
import ReservationForm from "@/components/ReservationForm";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const brunchItems = [
  { name: "Lobster Benedict", desc: "Poached eggs, toasted brioche, citrus hollandaise, fresh lobster", price: "24" },
  { name: "Harbor Grain Bowl", desc: "Farro, roasted squash, poached egg, tahini, pickled onions", price: "18" },
  { name: "Salt-Cod Hash", desc: "Crispy potatoes, confit garlic, fried egg, chimichurri", price: "20" },
  { name: "Brioche French Toast", desc: "Brown butter, bourbon maple, crème fraîche, seasonal berries", price: "17" },
  { name: "Oyster Po'Boy", desc: "Cornmeal-fried oysters, shaved fennel, rémoulade, house-cut fries", price: "19" },
];

const dinnerItems = [
  { name: "Seared Scallops", desc: "Cauliflower purée, brown butter, capers, micro greens", price: "32" },
  { name: "Heritage Pork Ragu", desc: "Pappardelle, slow-cooked pork, pecorino, gremolata", price: "28" },
  { name: "Grilled Local Halibut", desc: "Saffron broth, fingerling potatoes, fennel, lemon oil", price: "36" },
  { name: "Dry-Aged Ribeye", desc: "Charred broccolini, roasted shallot, bone marrow butter", price: "48" },
  { name: "Wood-Fired Branzino", desc: "Whole fish, salsa verde, grilled lemon, herbs", price: "34" },
];

const cocktailItems = [
  { name: "Sea Smoke", desc: "Mezcal, lime, jalapeño, smoked salt, agave", price: "16" },
  { name: "Saltwater Spritz", desc: "Aperol, prosecco, grapefruit, sea salt rim", price: "15" },
  { name: "Dune Rose", desc: "Gin, rose, elderflower, lemon, sparkling water", price: "16" },
  { name: "The Mariner", desc: "Bourbon, amaro, orange, bitters, cherry", price: "18" },
  { name: "Tidal Wave", desc: "Vodka, cucumber, mint, lime, ginger beer", price: "15" },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Menu Section */}
      <section id="menu" className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <Badge className="mb-4 bg-stone-800 text-stone-50 text-xs uppercase tracking-widest">
              The Menu
            </Badge>
            <h2 className="font-heading text-3xl leading-tight text-stone-800 sm:text-4xl">
              From the Coast
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-stone-500">
              Seasonal, sustainable, and rooted in the Pacific.
            </p>
          </div>

          <div className="mt-16">
            <MenuSection title="Brunch" tagline="Weekend mornings on the terrace" items={brunchItems} />
            <MenuSection title="Dinner" tagline="Evening tasting journeys" items={dinnerItems} reverse />
            <MenuSection title="Cocktails" tagline="Crafted with sea salt & citrus" items={cocktailItems} />
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-2xl bg-stone-200/60" />
      <ChefStory />
      <Separator className="mx-auto max-w-2xl bg-stone-200/60" />
      <Gallery />
      <HoursLocation />
      <ReservationForm />
    </>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "Our Story" },
  { href: "#gallery", label: "Gallery" },
  { href: "#hours", label: "Hours & Location" },
  { href: "#reservations", label: "Reservations" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/70 bg-[#faf8f5]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-heading text-xl tracking-wide text-stone-800 sm:text-2xl"
        >
          Harbor & Rye
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest text-stone-600 transition-colors hover:text-stone-900"
            >
              {link.label}
            </Link>
          ))}
          <Link href="#reservations">
            <Button className="rounded-full bg-stone-800 px-6 text-sm uppercase tracking-widest text-stone-50 hover:bg-stone-700">
              Reserve a Table
            </Button>
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="h-6 w-6 text-stone-800" />
          ) : (
            <Menu className="h-6 w-6 text-stone-800" />
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="flex flex-col gap-4 border-t border-stone-200/70 bg-[#faf8f5] px-4 py-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium uppercase tracking-widest text-stone-600 transition-colors hover:text-stone-900"
            >
              {link.label}
            </Link>
          ))}
          <Link href="#reservations" onClick={() => setOpen(false)}>
            <Button className="mt-2 rounded-full bg-stone-800 px-6 text-sm uppercase tracking-widest text-stone-50 hover:bg-stone-700">
              Reserve a Table
            </Button>
          </Link>
        </nav>
      )}
    </header>
  );
}
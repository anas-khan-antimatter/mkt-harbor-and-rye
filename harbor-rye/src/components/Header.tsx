"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/wine", label: "Wine" },
  { href: "/reservations", label: "Reservations" },
  { href: "/waitlist", label: "Waitlist" },
  { href: "/events", label: "Events" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-700/50 bg-[#1a1817]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-heading text-xl tracking-wide text-stone-100 sm:text-2xl"
        >
          Harbor & <span className="text-amber-400/80">Rye</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium uppercase tracking-widest transition-colors",
                pathname === link.href
                  ? "text-amber-400/80"
                  : "text-stone-400 hover:text-stone-100"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/reservations">
            <Button className="rounded-full bg-amber-600/90 px-6 text-sm uppercase tracking-widest text-stone-950 hover:bg-amber-500">
              Reserve
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
            <X className="h-6 w-6 text-stone-300" />
          ) : (
            <Menu className="h-6 w-6 text-stone-300" />
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="flex flex-col gap-4 border-t border-stone-700/50 bg-[#1a1817] px-4 py-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "text-sm font-medium uppercase tracking-widest transition-colors",
                pathname === link.href
                  ? "text-amber-400/80"
                  : "text-stone-400 hover:text-stone-100"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/reservations" onClick={() => setOpen(false)}>
            <Button className="mt-2 rounded-full bg-amber-600/90 px-6 text-sm uppercase tracking-widest text-stone-950 hover:bg-amber-500">
              Reserve a Table
            </Button>
          </Link>
        </nav>
      )}
    </header>
  );
}
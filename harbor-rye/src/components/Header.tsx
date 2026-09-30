"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/wine", label: "Wine" },
  { href: "/reserve", label: "Reservations" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#C9A84C]/15 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="wordmark text-2xl sm:text-3xl">
          Harbor & Rye
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm uppercase tracking-[0.15em] transition-colors ${
                pathname === link.href
                  ? "text-[#C9A84C]"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/reserve">
            <Button className="rounded-full bg-[#C9A84C] px-7 text-xs uppercase tracking-[0.12em] text-[#0a1628] hover:bg-[#D4B85C] font-semibold">
              Book a Table
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
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="flex flex-col gap-5 border-t border-[#C9A84C]/15 bg-background px-4 py-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-sm uppercase tracking-[0.15em] transition-colors ${
                pathname === link.href
                  ? "text-[#C9A84C]"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/reserve" onClick={() => setOpen(false)}>
            <Button className="mt-2 w-full rounded-full bg-[#C9A84C] px-7 text-xs uppercase tracking-[0.12em] text-[#0a1628] hover:bg-[#D4B85C] font-semibold">
              Book a Table
            </Button>
          </Link>
        </nav>
      )}
    </header>
  );
}
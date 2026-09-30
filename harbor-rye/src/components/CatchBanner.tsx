"use client";

import { useEffect, useState } from "react";
import { Fish, X } from "lucide-react";

interface Special {
  id: number;
  title: string;
  item: string;
  description: string;
  price: string;
  available: number;
}

export default function CatchBanner() {
  const [specials, setSpecials] = useState<Special[]>([]);
  const [dismissed, setDismissed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/specials")
      .then((r) => r.json())
      .then((data) => {
        setSpecials(data.specials || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading || dismissed || specials.length === 0) return null;

  return (
    <div className="relative bg-gradient-to-r from-[#0a1628] via-[#162040] to-[#0a1628] border-b border-[#C9A84C]/20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
        <div className="flex items-center gap-3 text-sm">
          <Fish className="h-4 w-4 text-[#C9A84C]" />
          <span className="font-heading text-xs uppercase tracking-[0.15em] text-[#C9A84C]">
            Tonight&apos;s Catch
          </span>
          <span className="hidden h-4 w-px bg-[#C9A84C]/20 sm:block" />
          <div className="hidden gap-2 sm:flex">
            {specials.map((s) => (
              <span key={s.id} className="text-xs text-foreground/80">
                <span className="font-medium text-foreground">{s.item}</span>{" "}
                <span className="text-[#C9A84C]">${s.price}</span>
                {s.available <= 10 && (
                  <span className="ml-1 text-[#C9A84C]/70">— only {s.available} left</span>
                )}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="ml-4 shrink-0 text-foreground/50 hover:text-foreground transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
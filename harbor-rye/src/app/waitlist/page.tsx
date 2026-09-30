"use client";

import { useEffect, useState, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Clock, Users, UserCheck, Plus, Timer } from "lucide-react";

interface WaitlistEntry {
  id: string;
  name: string;
  partySize: number;
  status: "waiting" | "seated";
  waitMinutes: number;
}

export default function WaitlistPage() {
  const [waiting, setWaiting] = useState<WaitlistEntry[]>([]);
  const [seated, setSeated] = useState<WaitlistEntry[]>([]);
  const [estMax, setEstMax] = useState(0);
  const [addName, setAddName] = useState("");
  const [addParty, setAddParty] = useState("2");
  const [showAdd, setShowAdd] = useState(false);
  const [adding, setAdding] = useState(false);

  const fetchWaitlist = useCallback(async () => {
    try {
      const res = await fetch("/api/waitlist");
      const data = await res.json();
      setWaiting(data.waiting || []);
      setSeated(data.seated || []);
      setEstMax(data.estimatedWaitMax || 0);
    } catch {
      // silently fail — UI still works
    }
  }, []);

  useEffect(() => {
    fetchWaitlist();
    const interval = setInterval(fetchWaitlist, 6000);
    return () => clearInterval(interval);
  }, [fetchWaitlist]);

  const addToWaitlist = async () => {
    if (!addName.trim()) return;
    setAdding(true);
    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: addName.trim(), partySize: Number(addParty) }),
      });
      setAddName("");
      setAddParty("2");
      setShowAdd(false);
      await fetchWaitlist();
    } catch {
      // silently fail
    } finally {
      setAdding(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-stone-800/80 to-[#12100e]" />
        <div className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop')", backgroundPosition: "50% 60%" }}
        />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <Badge className="mb-4 border-amber-600/40 bg-amber-900/30 text-amber-300 text-xs uppercase tracking-widest">
            Live Board
          </Badge>
          <h1 className="font-heading text-4xl text-stone-100 sm:text-5xl">Waitlist</h1>
          <p className="mx-auto mt-3 max-w-lg text-stone-400">
            Real-time table availability — updated every few seconds.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 pb-24 sm:px-6 lg:px-8">
        {/* Live status bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 rounded-full border border-stone-700/40 bg-stone-800/40 px-5 py-2">
            <Timer className="h-4 w-4 text-amber-400/70" />
            <span className="text-sm text-stone-300">
              Est. wait: <strong className="text-amber-400/80">{estMax} min</strong>
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-stone-700/40 bg-stone-800/40 px-5 py-2">
            <Users className="h-4 w-4 text-amber-400/70" />
            <span className="text-sm text-stone-300">
              Parties waiting: <strong className="text-amber-400/80">{waiting.length}</strong>
            </span>
          </div>
          <Button
            onClick={() => setShowAdd(!showAdd)}
            className="rounded-full bg-amber-600/90 px-5 text-sm text-stone-950 hover:bg-amber-500"
          >
            <Plus className="h-4 w-4 mr-1" /> Add Party
          </Button>
        </div>

        {/* Add form */}
        {showAdd && (
          <div className="rounded-xl border border-stone-700/40 bg-stone-800/30 p-5 mb-8 space-y-4 animate-in slide-in-from-top-2 duration-200">
            <h3 className="font-heading text-lg text-stone-100">Add to Waitlist</h3>
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <Label className="text-stone-300">Name</Label>
                <Input
                  value={addName}
                  onChange={(e) => setAddName(e.target.value)}
                  placeholder="Guest name"
                  className="mt-1 border-stone-600/40 bg-stone-800/60 text-stone-200"
                />
              </div>
              <div>
                <Label className="text-stone-300">Party Size</Label>
                <Select value={addParty} onValueChange={setAddParty}>
                  <SelectTrigger className="mt-1 border-stone-600/40 bg-stone-800/60 text-stone-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="border-stone-700/50 bg-stone-900 text-stone-200">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <SelectItem key={n} value={String(n)}>{n}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button
                  onClick={addToWaitlist}
                  disabled={!addName.trim() || adding}
                  className="w-full rounded-full bg-amber-600/90 text-stone-950 hover:bg-amber-500 disabled:opacity-40"
                >
                  {adding ? "Adding…" : "Add to Waitlist"}
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Live board */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Waiting */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-amber-400/70" />
              <h2 className="font-heading text-lg text-stone-100">Waiting</h2>
              <span className="text-xs text-stone-500">({waiting.length})</span>
            </div>
            {waiting.length === 0 && (
              <p className="text-sm text-stone-500 py-8 text-center border border-dashed border-stone-700/30 rounded-xl">
                No parties currently waiting.
              </p>
            )}
            {waiting.map((entry, i) => (
              <div
                key={entry.id}
                className={cn(
                  "rounded-xl border p-4 transition-all",
                  "border-stone-700/40 bg-stone-800/30"
                )}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-stone-500 font-mono">#{i + 1}</span>
                      <h3 className="font-heading text-base text-stone-100">{entry.name}</h3>
                    </div>
                    <p className="text-sm text-stone-400 mt-0.5">
                      <Users className="inline h-3 w-3 mr-1" />
                      {entry.partySize} {entry.partySize === 1 ? "guest" : "guests"}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center gap-1 rounded-full bg-amber-900/30 px-3 py-1 border border-amber-600/30">
                      <Clock className="h-3 w-3 text-amber-400/70" />
                      <span className="text-sm font-medium text-amber-300">
                        {entry.waitMinutes > 0 ? `~${entry.waitMinutes} min` : "Now"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recently Seated */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <UserCheck className="h-4 w-4 text-emerald-400/70" />
              <h2 className="font-heading text-lg text-stone-100">Seated</h2>
              <span className="text-xs text-stone-500">({seated.length})</span>
            </div>
            {seated.length === 0 && (
              <p className="text-sm text-stone-500 py-8 text-center border border-dashed border-stone-700/30 rounded-xl">
                No parties seated yet tonight.
              </p>
            )}
            {seated.map((entry) => (
              <div
                key={entry.id}
                className="rounded-xl border border-emerald-700/30 bg-emerald-900/10 p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-heading text-base text-stone-100">{entry.name}</h3>
                    <p className="text-sm text-stone-400 mt-0.5">
                      <Users className="inline h-3 w-3 mr-1" />
                      {entry.partySize} {entry.partySize === 1 ? "guest" : "guests"}
                    </p>
                  </div>
                  <Badge className="border-emerald-600/40 bg-emerald-800/30 text-emerald-300 text-[10px]">
                    Seated
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-stone-600">
          Board updates automatically every 6 seconds &middot; Walk-ins welcome
        </p>
      </div>
    </div>
  );
}
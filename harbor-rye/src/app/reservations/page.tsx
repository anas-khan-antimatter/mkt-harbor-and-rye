"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarDays, CheckCircle, Clock, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const timeSlots = [
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
  "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM",
];

const partySizes = Array.from({ length: 8 }, (_, i) => i + 1);

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: string;
  notes: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  partySize: "2",
  notes: "",
};

export default function ReservationsPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [step, setStep] = useState<"details" | "confirm" | "done">("details");
  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState("");
  const [error, setError] = useState("");

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          date: form.date,
          time: form.time,
          partySize: Number(form.partySize),
          notes: form.notes,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        return;
      }

      setConfirmation(data.confirmation);
      setStep("done");
    } catch {
      setError("Unable to reach the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const valid =
    form.name && form.email && form.date && form.time && form.partySize;

  return (
    <div className="min-h-screen">
      {/* Hero header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-stone-800/80 to-[#12100e]" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=2000&auto=format&fit=crop')",
            backgroundPosition: "50% 50%",
          }}
        />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <Badge className="mb-4 border-amber-600/40 bg-amber-900/30 text-amber-300 text-xs uppercase tracking-widest">
            Reservations
          </Badge>
          <h1 className="font-heading text-4xl text-stone-100 sm:text-5xl">
            Book Your Table
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-stone-400">
            Reserve your evening at the edge of the sea.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-2xl px-4 pb-24 sm:px-6 lg:px-8">
        {/* Step indicator */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {["details", "confirm", "done"].map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium border transition-all",
                  step === s
                    ? "border-amber-500/60 bg-amber-900/30 text-amber-300"
                    : s === "done" || (step === "done" && s === "confirm")
                    ? "border-emerald-600/50 bg-emerald-900/30 text-emerald-300"
                    : "border-stone-600/40 text-stone-500"
                )}
              >
                {s === "done" ? <CheckCircle className="h-4 w-4" /> : i + 1}
              </div>
              {i < 2 && <div className="h-px w-8 bg-stone-700/50" />}
            </div>
          ))}
        </div>

        {step === "details" && (
          <div className="space-y-6 rounded-xl border border-stone-700/40 bg-stone-800/30 p-6 sm:p-8">
            <h2 className="font-heading text-xl text-stone-100">Reservation Details</h2>

            {/* Date & Time row */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label className="text-stone-300">Date</Label>
                <div className="relative">
                  <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500 pointer-events-none" />
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full rounded-lg border border-stone-600/40 bg-stone-800/60 py-2 pl-10 pr-3 text-sm text-stone-200 focus:outline-none focus:border-amber-500/50"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label className="text-stone-300">Time</Label>
                <Select value={form.time} onValueChange={(v) => update("time", v)}>
                  <SelectTrigger className="w-full border-stone-600/40 bg-stone-800/60 text-stone-200">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent className="border-stone-700/50 bg-stone-900 text-stone-200">
                    {timeSlots.map((t) => (
                      <SelectItem key={t} value={t}>{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Party size */}
            <div className="space-y-1.5">
              <Label className="text-stone-300">Party Size</Label>
              <Select value={form.partySize} onValueChange={(v) => update("partySize", v)}>
                <SelectTrigger className="w-full border-stone-600/40 bg-stone-800/60 text-stone-200">
                  <SelectValue placeholder="Number of guests" />
                </SelectTrigger>
                <SelectContent className="border-stone-700/50 bg-stone-900 text-stone-200">
                  {partySizes.map((n) => (
                    <SelectItem key={n} value={String(n)}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="h-px bg-stone-700/50" />

            {/* Contact info */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label className="text-stone-300">Name</Label>
                <Input
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Your name"
                  className="border-stone-600/40 bg-stone-800/60 text-stone-200 placeholder:text-stone-500"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-stone-300">Email</Label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="you@example.com"
                  className="border-stone-600/40 bg-stone-800/60 text-stone-200 placeholder:text-stone-500"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label className="text-stone-300">Phone (optional)</Label>
              <Input
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="(555) 000-0000"
                className="border-stone-600/40 bg-stone-800/60 text-stone-200 placeholder:text-stone-500"
              />
            </div>

            <div className="space-y-1.5">
              <Label className="text-stone-300">Special requests (optional)</Label>
              <Textarea
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
                placeholder="Allergies, celebrations, seating preferences…"
                className="border-stone-600/40 bg-stone-800/60 text-stone-200 placeholder:text-stone-500"
                rows={3}
              />
            </div>

            {error && <p className="text-sm text-red-400">{error}</p>}

            <Button
              onClick={() => setStep("confirm")}
              disabled={!valid}
              className="w-full rounded-full bg-amber-600/90 py-6 text-sm uppercase tracking-widest text-stone-950 hover:bg-amber-500 disabled:opacity-40"
            >
              <CalendarDays className="mr-2 h-4 w-4" />
              Review Reservation
            </Button>
          </div>
        )}

        {step === "confirm" && (
          <div className="space-y-6 rounded-xl border border-stone-700/40 bg-stone-800/30 p-6 sm:p-8">
            <h2 className="font-heading text-xl text-stone-100">Confirm Your Reservation</h2>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-stone-300">
                <CalendarDays className="h-4 w-4 text-amber-400/70" />
                <span className="text-stone-400">Date:</span> {form.date}
              </div>
              <div className="flex items-center gap-3 text-stone-300">
                <Clock className="h-4 w-4 text-amber-400/70" />
                <span className="text-stone-400">Time:</span> {form.time}
              </div>
              <div className="flex items-center gap-3 text-stone-300">
                <Users className="h-4 w-4 text-amber-400/70" />
                <span className="text-stone-400">Party:</span> {form.partySize} {Number(form.partySize) === 1 ? "Guest" : "Guests"}
              </div>
              <div className="mt-4 pt-4 border-t border-stone-700/50 text-stone-300">
                <span className="text-stone-400">Name:</span> {form.name}
              </div>
              <div className="text-stone-300">
                <span className="text-stone-400">Email:</span> {form.email}
              </div>
              {form.phone && (
                <div className="text-stone-300">
                  <span className="text-stone-400">Phone:</span> {form.phone}
                </div>
              )}
              {form.notes && (
                <div className="text-stone-300">
                  <span className="text-stone-400">Notes:</span> {form.notes}
                </div>
              )}
            </div>

            {error && <p className="text-sm text-red-400">{error}</p>}

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setStep("details")}
                className="flex-1 rounded-full border-stone-600/40 text-stone-300 hover:bg-stone-700/50"
              >
                Edit
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 rounded-full bg-amber-600/90 py-5 text-sm uppercase tracking-widest text-stone-950 hover:bg-amber-500 disabled:opacity-40"
              >
                {loading ? "Booking…" : "Confirm Booking"}
              </Button>
            </div>
          </div>
        )}

        {step === "done" && (
          <div className="text-center space-y-6 rounded-xl border border-emerald-700/30 bg-emerald-900/10 p-8 sm:p-12">
            <div className="flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-800/40">
                <CheckCircle className="h-8 w-8 text-emerald-400" />
              </div>
            </div>
            <h2 className="font-heading text-2xl text-stone-100">Reservation Confirmed</h2>
            <p className="text-stone-400">
              We look forward to welcoming you to Harbor & Rye.
            </p>
            <div className="inline-block rounded-lg border border-stone-700/50 bg-stone-800/60 px-6 py-3">
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-1">Confirmation</p>
              <p className="font-heading text-2xl text-amber-400/80">{confirmation}</p>
            </div>
            <div className="text-sm text-stone-400 space-y-1">
              <p><span className="text-stone-300">{form.name}</span> &middot; {form.partySize} guests</p>
              <p>{form.date} at {form.time}</p>
            </div>
            <Button
              onClick={() => { setStep("details"); setForm(initialForm); setConfirmation(""); }}
              className="mt-4 rounded-full bg-amber-600/90 px-8 text-sm uppercase tracking-widest text-stone-950 hover:bg-amber-500"
            >
              Book Another
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
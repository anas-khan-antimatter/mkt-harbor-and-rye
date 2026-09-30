"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, ChevronLeft, ChevronRight, Calendar, Clock, Users } from "lucide-react";

const timeSlots = [
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
  "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
  "9:00 PM", "9:30 PM",
];

const partySizes = Array.from({ length: 12 }, (_, i) => i + 1);

type Step = "details" | "datetime" | "confirm";

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
}

interface Confirmation {
  code: string;
  name: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  notes: string | null;
}

export default function ReservePage() {
  const [step, setStep] = useState<Step>("details");
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    notes: "",
  });
  const [confirmation, setConfirmation] = useState<Confirmation | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const canProceedToDateTime = form.name.trim() && form.email.trim();
  const canProceedToConfirm = form.date && form.time;

  const handleSubmit = async () => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/reserve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        setSubmitting(false);
        return;
      }
      setConfirmation(data.confirmation);
      setStep("confirm");
    } catch {
      setError("Unable to reach our server. Please try again.");
    }
    setSubmitting(false);
  };

  const reset = () => {
    setForm({ name: "", email: "", phone: "", date: "", time: "", guests: "2", notes: "" });
    setConfirmation(null);
    setError(null);
    setStep("details");
  };

  // Confirmation view
  if (confirmation) {
    return (
      <div className="relative min-h-[70vh] flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-background to-background" />
        <div className="relative z-10 mx-auto max-w-lg w-full text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-[#C9A84C]" />
          <h1 className="mt-6 font-heading text-3xl text-foreground">Reservation Confirmed</h1>
          <p className="mt-2 text-foreground/60">
            Your table is secured. We look forward to welcoming you.
          </p>
          <div className="mt-8 rounded-xl border border-[#C9A84C]/20 bg-secondary/50 p-6 text-left space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.1em] text-foreground/40">Confirmation</span>
              <span className="font-heading text-[#C9A84C]">{confirmation.code}</span>
            </div>
            <div className="h-px bg-[#C9A84C]/10" />
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-foreground/40 block text-[10px] uppercase tracking-wide">Name</span>
                <span className="text-foreground">{confirmation.name}</span>
              </div>
              <div>
                <span className="text-foreground/40 block text-[10px] uppercase tracking-wide">Date</span>
                <span className="text-foreground">{confirmation.date}</span>
              </div>
              <div>
                <span className="text-foreground/40 block text-[10px] uppercase tracking-wide">Time</span>
                <span className="text-foreground">{confirmation.time}</span>
              </div>
              <div>
                <span className="text-foreground/40 block text-[10px] uppercase tracking-wide">Guests</span>
                <span className="text-foreground">{confirmation.guests}</span>
              </div>
            </div>
          </div>
          <Button
            onClick={reset}
            className="mt-6 rounded-full bg-[#C9A84C] text-[#0a1628] hover:bg-[#D4B85C] font-semibold px-8"
          >
            Make Another Reservation
          </Button>
        </div>
      </div>
    );
  }

  // Step progress
  const steps: { id: Step; label: string; icon: React.ReactNode }[] = [
    { id: "details", label: "Your Details", icon: <Users className="h-4 w-4" /> },
    { id: "datetime", label: "Date & Time", icon: <Calendar className="h-4 w-4" /> },
    { id: "confirm", label: "Confirm", icon: <CheckCircle className="h-4 w-4" /> },
  ];

  return (
    <div className="relative min-h-[80vh] px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-background to-background" />
      <div className="absolute inset-0 texture-overlay" />

      <div className="relative z-10 mx-auto max-w-xl">
        <div className="text-center mb-10">
          <span className="font-heading text-xs uppercase tracking-[0.2em] text-[#C9A84C]">
            Reserve Your Evening
          </span>
          <h1 className="mt-3 font-heading text-4xl text-foreground sm:text-5xl">
            Book a Table
          </h1>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-4 mb-10">
          {steps.map((s, i) => (
            <div key={s.id} className="flex items-center gap-2">
              <div
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs uppercase tracking-wide transition-all ${
                  step === s.id
                    ? "bg-[#C9A84C]/20 text-[#C9A84C] border border-[#C9A84C]/30"
                    : steps.findIndex((x) => x.id === step) > i
                    ? "text-foreground/40"
                    : "text-foreground/30"
                }`}
              >
                {s.icon}
                {s.label}
              </div>
              {i < steps.length - 1 && (
                <div className="h-px w-6 bg-[#C9A84C]/20" />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Personal Details */}
        {step === "details" && (
          <div className="rounded-xl border border-[#C9A84C]/10 bg-secondary/30 p-6 sm:p-8 space-y-5">
            <div>
              <Label htmlFor="name" className="text-xs uppercase tracking-[0.1em] text-foreground/50">
                Full Name *
              </Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Jane Doe"
                className="mt-1.5 bg-background border-[#C9A84C]/15 text-foreground placeholder:text-foreground/30"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-xs uppercase tracking-[0.1em] text-foreground/50">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="jane@example.com"
                className="mt-1.5 bg-background border-[#C9A84C]/15 text-foreground placeholder:text-foreground/30"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-xs uppercase tracking-[0.1em] text-foreground/50">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="(831) 555-1234"
                className="mt-1.5 bg-background border-[#C9A84C]/15 text-foreground placeholder:text-foreground/30"
              />
            </div>
            <div className="flex justify-end pt-2">
              <Button
                onClick={() => setStep("datetime")}
                disabled={!canProceedToDateTime}
                className="rounded-full bg-[#C9A84C] text-[#0a1628] hover:bg-[#D4B85C] font-semibold disabled:opacity-40"
              >
                Continue <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Date, Time, Party Size */}
        {step === "datetime" && (
          <div className="rounded-xl border border-[#C9A84C]/10 bg-secondary/30 p-6 sm:p-8 space-y-5">
            <div>
              <Label htmlFor="date" className="text-xs uppercase tracking-[0.1em] text-foreground/50">
                Date *
              </Label>
              <Input
                id="date"
                type="date"
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="mt-1.5 bg-background border-[#C9A84C]/15 text-foreground [color-scheme:dark]"
              />
            </div>
            <div>
              <Label htmlFor="time" className="text-xs uppercase tracking-[0.1em] text-foreground/50">
                Time *
              </Label>
              <Select value={form.time} onValueChange={(v) => update("time", v)}>
                <SelectTrigger id="time" className="mt-1.5 bg-background border-[#C9A84C]/15 text-foreground">
                  <SelectValue placeholder="Select a time" />
                </SelectTrigger>
                <SelectContent className="bg-[#0a1628] border-[#C9A84C]/20 text-foreground">
                  {timeSlots.map((t) => (
                    <SelectItem key={t} value={t}>{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="guests" className="text-xs uppercase tracking-[0.1em] text-foreground/50">
                Party Size *
              </Label>
              <Select value={form.guests} onValueChange={(v) => update("guests", v)}>
                <SelectTrigger id="guests" className="mt-1.5 bg-background border-[#C9A84C]/15 text-foreground">
                  <SelectValue placeholder="Number of guests" />
                </SelectTrigger>
                <SelectContent className="bg-[#0a1628] border-[#C9A84C]/20 text-foreground">
                  {partySizes.map((n) => (
                    <SelectItem key={n} value={String(n)}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-between pt-2">
              <Button
                variant="ghost"
                onClick={() => setStep("details")}
                className="text-foreground/50 hover:text-foreground"
              >
                <ChevronLeft className="mr-1 h-4 w-4" /> Back
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={!canProceedToConfirm || submitting}
                className="rounded-full bg-[#C9A84C] text-[#0a1628] hover:bg-[#D4B85C] font-semibold disabled:opacity-40"
              >
                {submitting ? "Booking..." : "Confirm Reservation"}
              </Button>
            </div>
          </div>
        )}

        {error && (
          <div className="mt-6 rounded-lg border border-red-900/30 bg-red-900/10 px-4 py-3 text-sm text-red-300">
            {error}
          </div>
        )}

        {/* Info card */}
        <div className="mt-10 rounded-xl border border-[#C9A84C]/10 bg-secondary/20 p-5">
          <h3 className="text-xs uppercase tracking-[0.15em] text-[#C9A84C]">Dinner Service Hours</h3>
          <p className="mt-2 text-sm text-foreground/50">
            Tuesday–Sunday &middot; 5:00 PM – 10:00 PM<br />
            Last seating at 9:30 PM<br />
            Bar opens at 4:00 PM
          </p>
        </div>
      </div>
    </div>
  );
}
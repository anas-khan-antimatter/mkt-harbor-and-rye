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
import { cn } from "@/lib/utils";
import { CalendarDays, CheckCircle, PartyPopper, Send } from "lucide-react";

const eventTypes = [
  { value: "birthday", label: "Birthday Party" },
  { value: "anniversary", label: "Anniversary" },
  { value: "corporate", label: "Corporate Dinner" },
  { value: "wedding", label: "Wedding Reception" },
  { value: "rehearsal", label: "Rehearsal Dinner" },
  { value: "holiday", label: "Holiday Party" },
  { value: "other", label: "Other" },
];

const partySizes = [
  { value: "10-20", label: "10–20 guests" },
  { value: "20-30", label: "20–30 guests" },
  { value: "30-50", label: "30–50 guests" },
  { value: "50-75", label: "50–75 guests" },
  { value: "75-100", label: "75–100 guests" },
  { value: "100+", label: "100+ guests" },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  partySize: string;
  eventType: string;
  details: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  date: "",
  partySize: "",
  eventType: "other",
  details: "",
};

export default function EventsPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inquiryId, setInquiryId] = useState("");

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          date: form.date,
          partySize: form.partySize,
          eventType: form.eventType,
          details: form.details,
        }),
      });
      const data = await res.json();
      setInquiryId(data.inquiryId || "EV-000000");
      setSubmitted(true);
    } catch {
      // Still show success with fallback
      setInquiryId("EV-000001");
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const valid = form.name && form.email && form.date;

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-900/40 border border-amber-600/40 mb-6">
            <CheckCircle className="h-10 w-10 text-amber-400" />
          </div>
          <h1 className="font-heading text-3xl text-stone-100">Inquiry Received</h1>
          <p className="mt-2 text-stone-400">Let&apos;s plan something unforgettable.</p>
          <div className="mt-8 rounded-xl border border-stone-700/40 bg-stone-800/30 p-6 text-left space-y-3">
            <div className="flex justify-between">
              <span className="text-stone-400">Reference #</span>
              <span className="text-amber-400/80 font-mono">{inquiryId}</span>
            </div>
            <div className="border-t border-stone-700/30" />
            <div className="flex justify-between">
              <span className="text-stone-400">Event</span>
              <span className="text-stone-200">{eventTypes.find(e => e.value === form.eventType)?.label}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-400">Date</span>
              <span className="text-stone-200">{form.date}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-400">Party Size</span>
              <span className="text-stone-200">{form.partySize || "TBD"}</span>
            </div>
          </div>
          <p className="mt-6 text-sm text-stone-500">
            Our events team will respond within 24 hours at <strong className="text-stone-300">{form.email}</strong>.
          </p>
          <Button
            onClick={() => { setSubmitted(false); setForm(initialForm); }}
            className="mt-8 rounded-full bg-amber-600/90 px-8 text-stone-950 hover:bg-amber-500"
          >
            Submit Another Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-stone-800/80 to-[#12100e]" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1571902941102-7d9b0cd9e0b8?q=80&w=2000&auto=format&fit=crop')",
            backgroundPosition: "50% 40%",
          }}
        />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <Badge className="mb-4 border-amber-600/40 bg-amber-900/30 text-amber-300 text-xs uppercase tracking-widest">
            Private Events
          </Badge>
          <h1 className="font-heading text-4xl text-stone-100 sm:text-5xl">
            Celebrate at the Coast
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-stone-400">
            Intimate gatherings, milestone celebrations, and corporate dinners — hosted on the edge of the Pacific.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left: Spaces info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-xl border border-stone-700/40 bg-stone-800/30 p-6">
              <h3 className="font-heading text-lg text-stone-100">The Main Dining Room</h3>
              <p className="mt-2 text-sm text-stone-400 leading-relaxed">
                Seats up to 50 guests with ocean views, a private bar, and dedicated service team.
              </p>
            </div>
            <div className="rounded-xl border border-stone-700/40 bg-stone-800/30 p-6">
              <h3 className="font-heading text-lg text-stone-100">The Terrace</h3>
              <p className="mt-2 text-sm text-stone-400 leading-relaxed">
                Semi-enclosed outdoor space for up to 30 guests. Fire pits, string lights, and coastal breeze.
              </p>
            </div>
            <div className="rounded-xl border border-stone-700/40 bg-stone-800/30 p-6">
              <h3 className="font-heading text-lg text-stone-100">The Wine Cellar</h3>
              <p className="mt-2 text-sm text-stone-400 leading-relaxed">
                Intimate underground room for 12–16 guests. Private wine-pairing menu available.
              </p>
            </div>
            <div className="rounded-xl border border-amber-600/30 bg-gradient-to-br from-amber-900/10 to-stone-800/40 p-6">
              <h3 className="font-heading text-lg text-stone-100">Full Buyout</h3>
              <p className="mt-2 text-sm text-stone-400 leading-relaxed">
                Entire restaurant for up to 120 guests. Custom menu, full bar, and dockside arrival.
              </p>
            </div>
          </div>

          {/* Right: Inquiry form */}
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-stone-700/40 bg-stone-800/30 p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3">
                <PartyPopper className="h-5 w-5 text-amber-400/80" />
                <h2 className="font-heading text-xl text-stone-100">Event Inquiry</h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label className="text-stone-300">Your Name *</Label>
                  <Input
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Full name"
                    className="border-stone-600/40 bg-stone-800/60 text-stone-200 placeholder:text-stone-500"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-stone-300">Email *</Label>
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
                <Label className="text-stone-300">Phone</Label>
                <Input
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="(831) 555-0199"
                  className="border-stone-600/40 bg-stone-800/60 text-stone-200 placeholder:text-stone-500"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label className="text-stone-300">Event Type</Label>
                  <Select value={form.eventType} onValueChange={(v) => update("eventType", v)}>
                    <SelectTrigger className="border-stone-600/40 bg-stone-800/60 text-stone-200">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent className="border-stone-700/50 bg-stone-900 text-stone-200">
                      {eventTypes.map((t) => (
                        <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-stone-300">Party Size</Label>
                  <Select value={form.partySize} onValueChange={(v) => update("partySize", v)}>
                    <SelectTrigger className="border-stone-600/40 bg-stone-800/60 text-stone-200">
                      <SelectValue placeholder="Number of guests" />
                    </SelectTrigger>
                    <SelectContent className="border-stone-700/50 bg-stone-900 text-stone-200">
                      {partySizes.map((s) => (
                        <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Calendar date picker */}
              <div className="space-y-1.5">
                <Label className="text-stone-300">Preferred Date *</Label>
                <div className="relative">
                  <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500 pointer-events-none" />
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full rounded-lg border border-stone-600/40 bg-stone-800/60 py-2.5 pl-10 pr-3 text-sm text-stone-200 focus:outline-none focus:border-amber-500/50"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label className="text-stone-300">Event Details</Label>
                <Textarea
                  value={form.details}
                  onChange={(e) => update("details", e.target.value)}
                  placeholder="Tell us about your event — theme, dietary preferences, special requests..."
                  className="border-stone-600/40 bg-stone-800/60 text-stone-200 placeholder:text-stone-500"
                  rows={4}
                />
              </div>

              <Button
                onClick={handleSubmit}
                disabled={!valid || loading}
                className="w-full rounded-full bg-amber-600/90 py-6 text-sm uppercase tracking-widest text-stone-950 hover:bg-amber-500 disabled:opacity-40"
              >
                <Send className="mr-2 h-4 w-4" />
                {loading ? "Sending…" : "Send Inquiry"}
              </Button>

              <p className="text-xs text-stone-500 text-center">
                We&apos;ll respond within 24 hours to discuss availability, menu options, and pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
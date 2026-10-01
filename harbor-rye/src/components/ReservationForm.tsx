"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export default function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="reservations" className="relative px-4 py-24 sm:px-6 lg:px-8 bg-stone-100/50">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-lg text-center">
            <div className="rounded-2xl border border-stone-200 bg-white p-10">
              <Star className="mx-auto h-10 w-10 text-stone-400" />
              <h3 className="mt-4 font-heading text-2xl text-stone-800">
                Request Sent
              </h3>
              <p className="mt-3 text-stone-500">
                Thank you! We&rsquo;ll confirm your reservation within 2 hours.
                Please check your email.
              </p>
              <Button
                variant="outline"
                className="mt-6 rounded-full border-stone-300 text-stone-700 hover:bg-stone-100"
                onClick={() => setSubmitted(false)}
              >
                Make Another Reservation
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="reservations" className="relative px-4 py-24 sm:px-6 lg:px-8 bg-stone-100/50">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <Badge className="mb-4 bg-stone-800 text-stone-50 text-xs uppercase tracking-widest">
            Reservations
          </Badge>
          <h2 className="font-heading text-3xl leading-tight text-stone-800 sm:text-4xl">
            Book Your Table
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-stone-500">
            We&rsquo;ll hold the best table by the window. Let us know how many
            and when.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-xl">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Label htmlFor="name" className="text-sm font-medium text-stone-700">
                  Full Name
                </Label>
                <Input
                  id="name"
                  required
                  placeholder="Your name"
                  className="mt-1 border-stone-200 bg-stone-50/50 focus:border-stone-400"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-stone-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-1 border-stone-200 bg-stone-50/50 focus:border-stone-400"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-stone-700">
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  placeholder="(831) 555–0199"
                  className="mt-1 border-stone-200 bg-stone-50/50 focus:border-stone-400"
                />
              </div>

              <div>
                <Label htmlFor="date" className="text-sm font-medium text-stone-700">
                  Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  required
                  className="mt-1 border-stone-200 bg-stone-50/50 focus:border-stone-400"
                />
              </div>

              <div>
                <Label htmlFor="time" className="text-sm font-medium text-stone-700">
                  Time
                </Label>
                <Select>
                  <SelectTrigger
                    id="time"
                    className="mt-1 border-stone-200 bg-stone-50/50 focus:border-stone-400"
                  >
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent className="border-stone-200 bg-white">
                    {[
                      "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
                      "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM",
                    ].map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="guests" className="text-sm font-medium text-stone-700">
                  Party Size
                </Label>
                <Select>
                  <SelectTrigger
                    id="guests"
                    className="mt-1 border-stone-200 bg-stone-50/50 focus:border-stone-400"
                  >
                    <SelectValue placeholder="Number of guests" />
                  </SelectTrigger>
                  <SelectContent className="border-stone-200 bg-white">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <SelectItem key={n} value={String(n)}>
                        {n} {n === 1 ? "Guest" : "Guests"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="requests" className="text-sm font-medium text-stone-700">
                  Special Requests
                </Label>
                <Textarea
                  id="requests"
                  placeholder="Allergies, celebrations, seating preferences…"
                  className="mt-1 border-stone-200 bg-stone-50/50 focus:border-stone-400"
                  rows={3}
                />
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="mt-6 w-full rounded-full bg-stone-800 px-8 text-sm uppercase tracking-widest text-stone-50 hover:bg-stone-700"
            >
              Request Reservation
            </Button>

            <p className="mt-4 text-center text-xs text-stone-400">
              We&rsquo;ll respond within 2 hours to confirm your booking.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
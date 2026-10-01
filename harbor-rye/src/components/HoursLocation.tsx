import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Phone } from "lucide-react";

export default function HoursLocation() {
  return (
    <section id="hours" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <Badge className="mb-4 bg-stone-800 text-stone-50 text-xs uppercase tracking-widest">
            Visit Us
          </Badge>
          <h2 className="font-heading text-3xl leading-tight text-stone-800 sm:text-4xl">
            Hours & Location
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Hours */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-stone-500" />
              <h3 className="font-heading text-xl text-stone-800">Hours</h3>
            </div>
            <div className="space-y-3">
              {[
                { day: "Brunch", time: "Sat – Sun · 10am – 2pm" },
                { day: "Dinner", time: "Tue – Sun · 5pm – 10pm" },
                { day: "Bar", time: "Tue – Sun · 4pm – Midnight" },
              ].map((row) => (
                <div
                  key={row.day}
                  className="flex items-center justify-between border-b border-stone-200/60 pb-2 text-sm"
                >
                  <span className="font-medium text-stone-700">{row.day}</span>
                  <span className="text-stone-500">{row.time}</span>
                </div>
              ))}
              <p className="pt-2 text-sm text-stone-400 italic">
                Closed Mondays · Happy hour daily 4–6pm
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-stone-500" />
                <span className="text-stone-700">
                  42 Shoreline Drive, Seaside, CA 93955
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-stone-500" />
                <span className="text-stone-700">(831) 555–0199</span>
              </div>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-stone-400">
              Complimentary valet parking available. We welcome walk-ins at the
              bar. For the full experience, reservations are encouraged.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-stone-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto h-10 w-10 text-stone-400" />
                <p className="mt-2 text-sm font-medium text-stone-500">
                  42 Shoreline Drive, Seaside
                </p>
                <p className="text-xs text-stone-400">
                  Map integration placeholder
                </p>
              </div>
            </div>
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
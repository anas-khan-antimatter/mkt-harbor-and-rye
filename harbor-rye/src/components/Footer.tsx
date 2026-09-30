import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-700/50 bg-[#0f0e0d] text-stone-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-lg text-stone-100">
              Harbor & <span className="text-amber-400/70">Rye</span>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-500">
              An intimate coastal dining experience where the sea meets the shore.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              Explore
            </h4>
            <nav className="mt-3 flex flex-col gap-2 text-sm">
              <Link href="/menu" className="text-stone-400 hover:text-amber-400/80 transition-colors">Menu</Link>
              <Link href="/wine" className="text-stone-400 hover:text-amber-400/80 transition-colors">Wine List</Link>
              <Link href="/reservations" className="text-stone-400 hover:text-amber-400/80 transition-colors">Reservations</Link>
              <Link href="/waitlist" className="text-stone-400 hover:text-amber-400/80 transition-colors">Waitlist</Link>
              <Link href="/events" className="text-stone-400 hover:text-amber-400/80 transition-colors">Private Events</Link>
            </nav>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              Hours
            </h4>
            <ul className="mt-3 space-y-1 text-sm text-stone-400">
              <li>Brunch: Sat–Sun 10am–2pm</li>
              <li>Dinner: Tue–Sun 5pm–10pm</li>
              <li>Bar: Tue–Sun 4pm–midnight</li>
              <li className="text-stone-500">Closed Mondays</li>
            </ul>
          </div>

          {/* Location & Social */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              Location
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-stone-400">
              42 Shoreline Drive<br />
              Seaside, CA 93955
            </p>
            <p className="mt-1 text-sm text-stone-400">(831) 555–0199</p>
            <div className="mt-4 flex gap-4 text-sm">
              <Link href="#" className="text-stone-400 hover:text-amber-400/80 transition-colors">Instagram</Link>
              <Link href="#" className="text-stone-400 hover:text-amber-400/80 transition-colors">Facebook</Link>
            </div>
            <p className="mt-4 text-xs text-stone-600">
              &copy; {new Date().getFullYear()} Harbor &amp; Rye. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
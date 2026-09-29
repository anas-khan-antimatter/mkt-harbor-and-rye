import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200/70 bg-stone-900 text-stone-400">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-lg text-stone-100">Harbor & Rye</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-400">
              An intimate coastal dining experience where the sea meets the shore.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-300">
              Hours
            </h4>
            <ul className="mt-3 space-y-1 text-sm text-stone-400">
              <li>Brunch: Sat–Sun 10am–2pm</li>
              <li>Dinner: Tue–Sun 5pm–10pm</li>
              <li>Bar: Tue–Sun 4pm–midnight</li>
              <li>Closed Mondays</li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-300">
              Location
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-stone-400">
              42 Shoreline Drive<br />
              Seaside, CA 93955
            </p>
            <p className="mt-1 text-sm text-stone-400">(831) 555–0199</p>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-300">
              Follow Us
            </h4>
            <div className="mt-3 flex gap-4 text-sm text-stone-400">
              <Link href="#" className="hover:text-stone-100 transition-colors">
                Instagram
              </Link>
              <Link href="#" className="hover:text-stone-100 transition-colors">
                Facebook
              </Link>
            </div>
            <p className="mt-4 text-xs text-stone-500">
              &copy; {new Date().getFullYear()} Harbor &amp; Rye. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
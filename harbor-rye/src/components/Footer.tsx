import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#C9A84C]/15 bg-[#0a1628] text-foreground/60">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="wordmark text-xl">Harbor & Rye</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/50">
              An intimate coastal dining experience where the sea meets the shore.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#C9A84C]/70">
              Explore
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/menu" className="text-foreground/60 hover:text-foreground transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/wine" className="text-foreground/60 hover:text-foreground transition-colors">
                  Wine List
                </Link>
              </li>
              <li>
                <Link href="/reserve" className="text-foreground/60 hover:text-foreground transition-colors">
                  Reservations
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours & Location */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#C9A84C]/70">
              Hours
            </h4>
            <ul className="mt-4 space-y-1.5 text-sm text-foreground/60">
              <li>Brunch: Sat–Sun 10am–2pm</li>
              <li>Dinner: Tue–Sun 5pm–10pm</li>
              <li>Bar: Tue–Sun 4pm–midnight</li>
              <li className="text-foreground/40">Closed Mondays</li>
            </ul>
            <p className="mt-4 text-sm text-foreground/60">
              42 Shoreline Drive<br />
              Seaside, CA 93955
            </p>
            <p className="mt-1 text-sm text-foreground/60">(831) 555–0199</p>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#C9A84C]/70">
              Follow
            </h4>
            <div className="mt-4 flex gap-5 text-sm text-foreground/60">
              <Link href="#" className="hover:text-foreground transition-colors">
                Instagram
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Facebook
              </Link>
            </div>
            <p className="mt-6 text-xs text-foreground/40">
              &copy; {new Date().getFullYear()} Harbor &amp; Rye.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
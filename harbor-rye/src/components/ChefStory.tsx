import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Quote } from "lucide-react";

export default function ChefStory() {
  return (
    <section id="story" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-4 bg-stone-800 text-stone-50 text-xs uppercase tracking-widest">
            Our Story
          </Badge>

          <div className="relative">
            <Quote className="absolute -left-6 -top-4 h-10 w-10 text-stone-200 sm:-left-10" />
            <h2 className="font-heading text-3xl leading-tight text-stone-800 sm:text-4xl">
              Chef Marcus & the Sea
            </h2>
          </div>

          <div className="mt-8 space-y-5 text-left text-base leading-relaxed text-stone-600 sm:text-lg">
            <p>
              Chef Marcus Delacroix grew up on the docks of Portland, Maine —
              shucking oysters at dawn, learning the rhythm of the tides before he
              could read. After stages in Lyon, Copenhagen, and Tokyo, he returned
              to the coast with a singular vision: a restaurant that honours the
              ocean not as ingredient, but as muse.
            </p>
            <p>
              At Harbor & Rye, Marcus works directly with local fishermen,
              foragers, and farmers. The menu changes nightly, driven by what the
              morning catch and the season&rsquo;s last light bring. Every plate
              tells a story of provenance — the boat, the field, the tide pool.
            </p>
            <div className="border-l-4 border-stone-800/20 pl-6 italic text-stone-500">
              &ldquo;We don&rsquo;t just serve seafood. We serve the memory of
              salt air, the sound of hulls against the dock, the warmth of a
              kitchen that never sleeps.&rdquo;
              <br />
              <span className="mt-2 block text-sm not-italic text-stone-400">
                — Chef Marcus Delacroix
              </span>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-center">
            <div>
              <p className="font-heading text-3xl text-stone-800">14+</p>
              <p className="text-xs uppercase tracking-wider text-stone-500">
                Years at the pass
              </p>
            </div>
            <Separator orientation="vertical" className="h-12 w-px bg-stone-300" />
            <div>
              <p className="font-heading text-3xl text-stone-800">3</p>
              <p className="text-xs uppercase tracking-wider text-stone-500">
                Michelin-recognized kitchens
              </p>
            </div>
            <Separator orientation="vertical" className="h-12 w-px bg-stone-300" />
            <div>
              <p className="font-heading text-3xl text-stone-800">100%</p>
              <p className="text-xs uppercase tracking-wider text-stone-500">
                Sustainably sourced
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
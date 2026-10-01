import { Badge } from "@/components/ui/badge";

const galleryItems = [
  { label: "The Dining Room", colors: "from-stone-300 to-stone-400" },
  { label: "The Bar", colors: "from-stone-400 to-stone-500" },
  { label: "In the Kitchen", colors: "from-amber-200 to-stone-400" },
  { label: "Sunset Terrace", colors: "from-stone-300 to-sky-300" },
  { label: "Raw Bar", colors: "from-stone-400 to-stone-600" },
  { label: "Evening Ambiance", colors: "from-stone-300 to-stone-500" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative px-4 py-24 sm:px-6 lg:px-8 bg-stone-100/50">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <Badge className="mb-4 bg-stone-800 text-stone-50 text-xs uppercase tracking-widest">
            Ambiance
          </Badge>
          <h2 className="font-heading text-3xl leading-tight text-stone-800 sm:text-4xl">
            The Space
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-stone-500">
            Warm light, weathered wood, and the endless blue beyond the window.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((img, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-stone-200"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br transition-all duration-500 group-hover:scale-105 ${img.colors}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="text-sm font-medium text-stone-100">
                  {img.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
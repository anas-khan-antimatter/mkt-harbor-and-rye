import { Badge } from "@/components/ui/badge";

export interface MenuItem {
  name: string;
  desc: string;
  price: string;
}

export default function MenuSection({
  title,
  tagline,
  items,
  reverse,
}: {
  title: string;
  tagline: string;
  items: MenuItem[];
  reverse?: boolean;
}) {
  return (
    <div className="mb-20 last:mb-0">
      <div
        className={`flex flex-col items-start gap-8 sm:flex-row ${
          reverse ? "sm:flex-row-reverse" : ""
        }`}
      >
        {/* Decorative panel */}
        <div className="relative w-full sm:w-5/12">
          <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-stone-200 to-stone-300" />
          <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-full bg-stone-800/10" />
        </div>

        {/* Menu items */}
        <div className="w-full sm:w-7/12">
          <div className="mb-6">
            <Badge className="mb-2 bg-stone-800 text-stone-50 text-xs uppercase tracking-widest">
              {title}
            </Badge>
            <p className="text-sm italic text-stone-500">{tagline}</p>
          </div>

          <div className="space-y-5">
            {items.map((item, i) => (
              <div
                key={i}
                className="group border-b border-stone-200/60 pb-4 last:border-0"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-heading text-lg font-semibold text-stone-800 group-hover:text-stone-600 transition-colors">
                    {item.name}
                  </h4>
                  <span className="shrink-0 font-heading text-lg text-stone-600">
                    ${item.price}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-stone-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
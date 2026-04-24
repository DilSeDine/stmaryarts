import React from "react";
import { Home, Building2, Briefcase } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const PLACES = [
  {
    number: "01",
    label: "At Home",
    title: "A doorway that greets you back.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    icon: Home,
    points: [
      "Villa gates & heritage doorways",
      "Weather-tested brass & bronze",
      "Custom calligraphy or serif typography",
    ],
  },
  {
    number: "02",
    label: "In the Apartment",
    title: "Block-wide signage, one cohesive voice.",
    image:
      "https://images.pexels.com/photos/9060306/pexels-photo-9060306.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    icon: Building2,
    points: [
      "Apartment blocks & societies",
      "Unit numbering systems",
      "Matching directory & lobby plaques",
    ],
  },
  {
    number: "03",
    label: "At the Office",
    title: "Quiet confidence on a reception wall.",
    image:
      "https://images.pexels.com/photos/35339499/pexels-photo-35339499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    icon: Briefcase,
    points: [
      "Reception & cabin name plates",
      "Edge-lit acrylic with warm LED",
      "Multi-location corporate roll-outs",
    ],
  },
];

const FeatureWalkthrough = () => {
  const { t } = useI18n();
  return (
    <section
      id="places"
      data-testid="places-section"
      className="relative bg-stone-900 text-stone-100 py-24 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="section-label text-stone-400 before:bg-stone-500">
              <span className="text-stone-400">{t("places.label")}</span>
            </span>
            <h2 className="mt-4 font-display font-[800] text-[40px] md:text-[56px] leading-[0.98] tracking-tightest text-stone-50 max-w-2xl whitespace-pre-line">
              {t("places.h2")}
            </h2>
          </div>
          <p className="text-stone-400 max-w-sm text-[15px] leading-relaxed">
            {t("places.p")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {PLACES.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.number} className="group">
                <div className="relative aspect-square overflow-hidden rounded-[20px] bg-stone-800">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 grayscale"
                  />
                  <div className="absolute top-5 left-5 w-11 h-11 rounded-full bg-stone-50/10 border border-stone-50/20 flex items-center justify-center backdrop-blur-md">
                    <Icon className="w-4 h-4 text-stone-50" strokeWidth={1.5} />
                  </div>
                  <span className="absolute bottom-5 left-5 font-display font-bold text-[11px] tracking-[0.25em] uppercase text-stone-50">
                    {p.number} · {p.label}
                  </span>
                </div>
                <h3 className="mt-6 font-display font-[700] text-[24px] leading-tight tracking-tight text-stone-50">
                  {p.title}
                </h3>
                <ul className="mt-5 space-y-2.5 text-[14px] text-stone-300 marker-plus">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureWalkthrough;

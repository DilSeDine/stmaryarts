import React from "react";
import { Star, Quote } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const REVIEWS = [
  {
    name: "Ramesh K.",
    role: "Homeowner · Begur",
    text: "Anthony and Jackson went through three renders with me until the lettering felt right. The brass plate arrived two days early and looks even better in person.",
    rating: 5,
  },
  {
    name: "Priya S.",
    role: "Architect · JP Nagar",
    text: "We commission St Mary Arts for most of our residential projects. The craft is genuinely old-world — and the communication is modern. Rare combination.",
    rating: 5,
  },
  {
    name: "Vinay M.",
    role: "Office Manager · Koramangala",
    text: "Ordered edge-lit acrylic plates for all our cabins. Installation was on-site, clean, and done in an afternoon. Everything squared up to the mm.",
    rating: 5,
  },
];

const Reviews = () => {
  const { t } = useI18n();
  return (
    <section
      id="reviews"
      data-testid="reviews-section"
      className="relative py-24 md:py-32 bg-stone-100"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="section-label">{t("reviews.label")}</span>
            <h2 className="mt-4 font-display font-[800] text-stone-900 text-[40px] md:text-[56px] leading-[0.98] tracking-tightest max-w-2xl whitespace-pre-line">
              {t("reviews.h2")}
            </h2>
          </div>
          <div className="flex items-center gap-2 text-stone-700">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="w-5 h-5 fill-stone-900 text-stone-900" />
            ))}
            <span className="ml-2 text-[13px] uppercase tracking-[0.2em]">
              {t("reviews.google")}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {REVIEWS.map((r, i) => (
            <article
              key={i}
              data-testid={`review-card-${i}`}
              className="bg-white rounded-[24px] border border-stone-200 p-8 flex flex-col hover:shadow-[0_20px_40px_-20px_rgba(28,25,23,0.15)] transition-shadow duration-500"
            >
              <Quote className="w-6 h-6 text-stone-300" strokeWidth={1.5} />
              <p className="mt-5 text-stone-800 text-[16px] leading-[1.75]">
                {r.text}
              </p>
              <div className="mt-6 pt-6 border-t border-stone-200 flex items-center justify-between">
                <div>
                  <p className="font-display font-bold text-stone-900 text-[15px]">
                    {r.name}
                  </p>
                  <p className="text-[12px] uppercase tracking-[0.18em] text-stone-500 mt-1">
                    {r.role}
                  </p>
                </div>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: r.rating }).map((_, k) => (
                    <Star
                      key={k}
                      className="w-3.5 h-3.5 fill-stone-900 text-stone-900"
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

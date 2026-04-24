import React from "react";
import { useI18n } from "@/lib/i18n";

const IMAGES = [
  {
    src: "https://images.pexels.com/photos/14853641/pexels-photo-14853641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Artisan metalworker",
    h: "h-[260px] md:h-[340px]",
  },
  {
    src: "https://images.pexels.com/photos/32612238/pexels-photo-32612238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Wood carver at work",
    h: "h-[200px] md:h-[260px]",
  },
  {
    src: "https://images.pexels.com/photos/13701662/pexels-photo-13701662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Tools laid out on a workbench",
    h: "h-[200px] md:h-[260px]",
  },
  {
    src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Hand polishing brass",
    h: "h-[260px] md:h-[340px]",
    fallback:
      "https://images.pexels.com/photos/5202422/pexels-photo-5202422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

const EditorialPhilosophy = () => {
  const { t } = useI18n();
  return (
    <section
      id="philosophy"
      data-testid="philosophy-section"
      className="relative py-24 md:py-32 bg-stone-100"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        <div className="lg:sticky lg:top-32">
          <span className="section-label">{t("philosophy.label")}</span>
          <h2 className="mt-5 font-display font-[800] text-stone-900 text-[40px] md:text-[56px] leading-[0.98] tracking-tightest whitespace-pre-line">
            {t("philosophy.h2")}
          </h2>
          <div className="mt-8 space-y-5 text-stone-700 text-[16px] md:text-[17px] leading-[1.8] max-w-xl">
            <p>{t("philosophy.p1")}</p>
            <p>{t("philosophy.p2")}</p>
            <p>{t("philosophy.p3")}</p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
            {[
              ["3", t("philosophy.stat_gen")],
              ["128", t("philosophy.stat_rev")],
              ["38+", t("philosophy.stat_yrs")],
            ].map(([n, l], i) => (
              <div key={i}>
                <dt className="font-display font-bold text-[32px] text-stone-900 tracking-tightest">
                  {n}
                </dt>
                <dd className="mt-1 text-[11px] uppercase tracking-[0.2em] text-stone-500">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-5">
          <div className="flex flex-col gap-4 md:gap-5 pt-10 md:pt-16">
            {[IMAGES[0], IMAGES[1]].map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-[20px] bg-stone-200 ${img.h}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  onError={(e) => {
                    if (img.fallback) e.currentTarget.src = img.fallback;
                  }}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 md:gap-5">
            {[IMAGES[2], IMAGES[3]].map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-[20px] bg-stone-200 ${img.h}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  onError={(e) => {
                    if (img.fallback) e.currentTarget.src = img.fallback;
                  }}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialPhilosophy;

import React from "react";
import { Star, Quote } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const REVIEWS = [
  {
    name: "Suresh K.",
    role: "Shop Owner · Begur",
    text: "Needed a LED glow sign for my new store. Anthony's team sent a design mockup on WhatsApp the same day and had it installed within 4 days. Looks exactly as designed — several neighbours have already asked where I got it done.",
    rating: 5,
  },
  {
    name: "Priya S.",
    role: "Office Manager · Koramangala",
    text: "We use St Mary Arts for all our Bengaluru offices — reception boards, cabin name plates and lobby acrylic letters. Consistent quality across every branch, smooth communication and delivery never slips.",
    rating: 5,
  },
  {
    name: "Vinay M.",
    role: "Store Owner · JP Nagar",
    text: "Ordered flex banners and vinyl stickers for our store launch. Colours were sharp, turnaround was two days and the team handled installation neatly. Fair pricing and zero hassle.",
    rating: 5,
  },
  {
    name: "Rajan P.",
    role: "Restaurant Owner · Bannerghatta Rd",
    text: "Got a full LED backlit fascia board for my restaurant. Designed, fabricated and installed in 5 days flat. Quality is solid and it looks amazing at night. Highly recommend St Mary Arts.",
    rating: 5,
  },
  {
    name: "Sneha T.",
    role: "Clinic Owner · BTM Layout",
    text: "Beautiful acrylic 3D letters for my clinic entrance. Anthony understood exactly what I wanted and the mockup was spot on. Clean, professional and delivered ahead of time.",
    rating: 5,
  },
  {
    name: "Mohammed R.",
    role: "Real Estate · Hebbal",
    text: "Ordered site hoardings and vinyl banners for 3 properties. Good print quality, timely delivery and they handle installation too. Will use again for future projects.",
    rating: 5,
  },
  {
    name: "Kavitha N.",
    role: "Boutique Owner · Jayanagar",
    text: "The LED sign for my boutique is exactly what I envisioned. They sent a WhatsApp preview before making anything — no surprises, just great work. Very happy.",
    rating: 5,
  },
  {
    name: "Arun S.",
    role: "IT Company · Electronic City",
    text: "Large acrylic letters on our office wall and a reception board. Both came out brilliant. Installation was done after office hours to avoid disruption. Very professional.",
    rating: 5,
  },
  {
    name: "Deepa M.",
    role: "Event Coordinator · MG Road",
    text: "Flex banners, standees and stage backdrops for a corporate event. Everything was ready 24 hours before — print quality was excellent and pricing very reasonable.",
    rating: 5,
  },
  {
    name: "Lokesh B.",
    role: "Pharmacist · Begur",
    text: "Running a pharmacy near their studio. Got my shop board and a glow sign from them. Jackson is very helpful and understands what a local business needs. Quick and affordable.",
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

        {/* Auto-scrolling reviews container */}
        <div className="relative overflow-hidden w-full flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] mt-8">
          <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-max">
            {[...REVIEWS, ...REVIEWS].map((r, i) => (
              <article
                key={i}
                data-testid={`review-card-${i}`}
                className="flex-none w-[320px] sm:w-[380px] bg-white rounded-[24px] border border-stone-200 p-8 flex flex-col hover:shadow-[0_20px_40px_-20px_rgba(28,25,23,0.15)] transition-all duration-500 hover:-translate-y-2 relative group overflow-hidden"
              >
                {/* Beautiful gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-stone-50/80 via-white to-stone-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <Quote className="w-8 h-8 text-stone-200 group-hover:text-stone-300 transition-colors duration-500 mb-4" strokeWidth={1.5} />
                  <p className="text-stone-700 text-[16px] leading-[1.75] flex-1">
                    {r.text}
                  </p>
                  <div className="mt-8 pt-6 border-t border-stone-100 group-hover:border-stone-200 transition-colors duration-500 flex items-center justify-between">
                    <div>
                      <p className="font-display font-bold text-stone-900 text-[15px] group-hover:text-stone-950 transition-colors duration-300">
                        {r.name}
                      </p>
                      <p className="text-[12px] uppercase tracking-[0.18em] text-stone-500 mt-1.5 group-hover:text-stone-600 transition-colors duration-300">
                        {r.role}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: r.rating }).map((_, k) => (
                        <Star
                          key={k}
                          className="w-3.5 h-3.5 fill-stone-900 text-stone-900 transition-transform duration-300 ease-out group-hover:scale-110"
                          style={{ transitionDelay: `${k * 50}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

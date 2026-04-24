import React from "react";
import { ArrowRight, Star } from "lucide-react";

const HeroTheater = ({ onOpenInquiry }) => {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-[140px] pb-20 md:pb-28 overflow-hidden"
    >
      <div className="absolute inset-0 hero-radial pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Small eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in">
          <div className="flex items-center gap-1.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                className="w-3.5 h-3.5 fill-stone-900 text-stone-900"
              />
            ))}
          </div>
          <span className="text-[12px] uppercase tracking-[0.22em] text-stone-600">
            4.9 · 128 Reviews · Begur, Bengaluru
          </span>
        </div>

        {/* Headline */}
        <h1
          data-testid="hero-headline"
          className="font-display font-[800] text-stone-900 text-[44px] sm:text-[60px] md:text-[80px] lg:text-[96px] leading-[0.92] tracking-tightest text-center max-w-5xl mx-auto animate-fade-in-up"
        >
          Name plates,{" "}
          <span className="italic font-medium text-stone-600">handcrafted</span>{" "}
          for the <br className="hidden md:block" />
          doorways that matter.
        </h1>

        {/* Subtext */}
        <p
          className="mt-8 text-stone-600 text-[17px] md:text-[20px] leading-relaxed max-w-2xl mx-auto text-center animate-fade-in-up"
          style={{ animationDelay: "150ms" }}
        >
          Three generations of metal-work, one quiet studio in Begur. Each plate
          is cast, cut and finished by hand — then delivered with a rendered
          preview before a single letter is cut.
        </p>

        {/* Buttons */}
        <div
          className="mt-10 flex items-center justify-center gap-6 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <button
            data-testid="hero-primary-cta"
            onClick={onOpenInquiry}
            className="group inline-flex items-center gap-2 bg-stone-900 text-stone-50 rounded-full px-7 py-4 text-[13px] uppercase tracking-[0.2em] font-medium hover:bg-stone-800 transition-all duration-300"
          >
            Begin a design
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <a
            href="#models"
            data-testid="hero-secondary-link"
            className="text-[13px] uppercase tracking-[0.2em] font-medium text-stone-800 border-b border-stone-900 pb-1 hover:text-stone-600 hover:border-stone-400 transition-colors"
          >
            Compare materials
          </a>
        </div>

        {/* Hero image - 21:9 */}
        <div
          className="mt-16 md:mt-24 relative animate-fade-in-up"
          style={{ animationDelay: "500ms" }}
        >
          <div className="relative rounded-[28px] md:rounded-[32px] overflow-hidden bg-stone-100 aspect-[21/9]">
            <img
              src="https://images.unsplash.com/photo-1531685250784-7569952593d2?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920"
              alt="A hand-crafted brass name plate mounted on a textured wall"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.pexels.com/photos/5202422/pexels-photo-5202422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1800";
              }}
            />

            {/* Material badges */}
            <div
              data-testid="material-badge-top"
              className="hidden md:flex absolute top-8 left-8 flex-col gap-1 backdrop-blur-md bg-white/85 border border-stone-200 rounded-2xl px-5 py-4 shadow-sm"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-stone-500">
                Materials
              </span>
              <span className="text-[14px] font-medium text-stone-900">
                Cast Brass · Hand-finished
              </span>
            </div>

            <div
              data-testid="material-badge-bottom"
              className="hidden md:flex absolute bottom-8 right-8 flex-col gap-1 backdrop-blur-md bg-white/85 border border-stone-200 rounded-2xl px-5 py-4 shadow-sm"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-stone-500">
                Craft
              </span>
              <span className="text-[14px] font-medium text-stone-900">
                Rendered preview before production
              </span>
            </div>
          </div>

          {/* Caption row */}
          <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[13px] text-stone-500">
            <span className="uppercase tracking-[0.22em]">
              Studio · Begur, Bengaluru
            </span>
            <span className="uppercase tracking-[0.22em]">
              Est. craftsmanship · 3 generations
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTheater;

import React from "react";
import { Check, Hammer, Sparkles, Lightbulb } from "lucide-react";
import { MODELS } from "@/lib/constants";

const IconFor = ({ id }) => {
  if (id === "brass")
    return <Hammer className="w-4 h-4" strokeWidth={1.5} />;
  if (id === "bronze")
    return <Sparkles className="w-4 h-4" strokeWidth={1.5} />;
  return <Lightbulb className="w-4 h-4" strokeWidth={1.5} />;
};

const ModelSelection = ({ selected, onSelect }) => {
  return (
    <section
      id="models"
      data-testid="models-section"
      className="relative py-24 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="section-label">Choose your material</span>
            <h2 className="mt-4 font-display font-[800] text-stone-900 text-[40px] md:text-[56px] leading-[0.98] tracking-tightest max-w-2xl">
              Three materials.<br />
              One quiet doorway ritual.
            </h2>
          </div>
          <p className="text-stone-600 max-w-sm text-[15px] leading-relaxed">
            Every plate begins with a conversation. Pick the material that
            speaks to your space — we render a preview before any metal is cut.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {MODELS.map((m) => {
            const active = selected === m.id;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => onSelect(m.id)}
                data-testid={`model-card-${m.id}`}
                className={`group text-left bg-white rounded-[28px] p-6 md:p-7 h-[500px] flex flex-col border-2 transition-all duration-500 ease-out ${
                  active
                    ? "border-stone-900 shadow-[0_20px_60px_-20px_rgba(28,25,23,0.25)] scale-[1.015]"
                    : "border-transparent hover:border-stone-300"
                }`}
              >
                {/* Image */}
                <div className="relative rounded-[20px] overflow-hidden bg-stone-100 flex-1">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover mix-multiply transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2 backdrop-blur-md bg-white/85 border border-stone-200 rounded-full px-3 py-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: m.swatch }}
                    />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-700">
                      {m.badgeText}
                    </span>
                  </div>
                  {active && (
                    <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-stone-900 text-stone-50 flex items-center justify-center">
                      <Check className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {/* Name / Price */}
                <div className="mt-5 flex items-baseline justify-between">
                  <h3 className="font-display text-[22px] font-bold text-stone-900 tracking-tight">
                    {m.name}
                  </h3>
                  <span className="text-[13px] font-medium text-stone-700">
                    {m.priceLabel}
                  </span>
                </div>
                <p className="mt-2 text-[14px] text-stone-600 leading-relaxed line-clamp-2">
                  {m.description}
                </p>

                {/* Footer */}
                <div className="mt-5 pt-5 border-t border-stone-200 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-stone-600">
                    <IconFor id={m.id} />
                    {m.keyTrait}
                  </div>
                  <span
                    className={`text-[11px] uppercase tracking-[0.2em] font-medium ${
                      active ? "text-stone-900" : "text-stone-400"
                    }`}
                  >
                    {active ? "Selected" : "Select"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ModelSelection;

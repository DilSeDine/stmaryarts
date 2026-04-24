import React from "react";
import { MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { MODELS, WHATSAPP_NUMBER } from "@/lib/constants";

const StickyCheckoutBar = ({ selected, onOpenInquiry }) => {
  const model = MODELS.find((m) => m.id === selected) || MODELS[0];
  const waText = encodeURIComponent(
    `Hello St Mary Arts — I'm interested in the "${model.name}" name plate. Could you share design options and pricing?`
  );
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

  return (
    <div
      data-testid="sticky-checkout-bar"
      className="fixed bottom-4 left-4 right-4 md:left-6 md:right-6 z-40 animate-fade-in-up"
    >
      <div className="max-w-[1400px] mx-auto backdrop-blur-xl bg-white/90 border border-stone-200 rounded-full shadow-[0_20px_60px_-20px_rgba(28,25,23,0.2)] px-4 md:px-6 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 md:gap-4 min-w-0">
          <span
            className="hidden md:inline-flex w-10 h-10 rounded-full items-center justify-center flex-shrink-0"
            style={{ background: `${model.swatch}30` }}
          >
            <span
              className="w-3 h-3 rounded-full"
              style={{ background: model.swatch }}
            />
          </span>
          <div className="min-w-0">
            <p className="font-display font-bold text-stone-900 text-[14px] md:text-[15px] truncate">
              {model.name}
            </p>
            <p className="text-[11px] text-stone-600 flex items-center gap-1.5 mt-0.5">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>In studio · Ready to design</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
          <span className="hidden md:block text-[13px] font-medium text-stone-800">
            {model.priceLabel}
          </span>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            data-testid="checkout-whatsapp-btn"
            className="hidden sm:inline-flex items-center gap-2 border-2 border-stone-900 text-stone-900 rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-stone-900 hover:text-stone-50 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            WhatsApp
          </a>
          <button
            data-testid="checkout-inquiry-btn"
            onClick={onOpenInquiry}
            className="inline-flex items-center gap-2 bg-stone-900 text-stone-50 rounded-full px-4 md:px-5 py-2.5 text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-stone-800 transition-colors"
          >
            Request
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyCheckoutBar;

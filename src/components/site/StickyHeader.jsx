import React, { useState, useEffect } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import LanguageSwitcher from "@/components/site/LanguageSwitcher";
import { useI18n } from "@/lib/i18n";

const NAV_KEYS = ["models", "philosophy", "places", "specs", "reviews", "visit"];
const HREFS = {
  models: "#models",
  philosophy: "#philosophy",
  places: "#places",
  specs: "#specs",
  reviews: "#reviews",
  visit: "#visit",
};

const StickyHeader = ({ onOpenInquiry, onOpenAppointment, cartCount = 1 }) => {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="sticky-header"
      className={`fixed top-0 left-0 right-0 z-50 h-[80px] flex items-center transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#FAF7F5]/80 border-b border-stone-200"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#top"
          data-testid="logo-link"
          className="flex items-center gap-2 group"
        >
          <span className="h-8 w-8 rounded-full bg-stone-900 text-stone-50 flex items-center justify-center font-display font-bold text-sm">
            SM
          </span>
          <span className="font-display font-bold text-[18px] tracking-tightest text-stone-900">
            St Mary Arts
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_KEYS.map((k) => (
            <a
              key={k}
              href={HREFS[k]}
              data-testid={`nav-${k}-link`}
              className="text-[13px] uppercase tracking-[0.18em] font-medium text-stone-700 hover:text-stone-900 transition-colors"
            >
              {t(`nav.${k}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button
            aria-label="Search"
            data-testid="header-search-btn"
            className="hidden lg:inline-flex p-2 rounded-full hover:bg-stone-100 transition-colors"
          >
            <Search className="w-4 h-4 text-stone-800" />
          </button>
          <button
            aria-label="Cart"
            data-testid="header-cart-btn"
            onClick={onOpenInquiry}
            className="hidden lg:inline-flex relative p-2 rounded-full hover:bg-stone-100 transition-colors"
          >
            <ShoppingBag className="w-4 h-4 text-stone-800" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-stone-900" />
            )}
          </button>
          <button
            data-testid="header-book-btn"
            onClick={onOpenAppointment}
            className="hidden lg:inline-flex items-center gap-2 rounded-full border-2 border-stone-900 text-stone-900 px-4 py-2 text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-stone-900 hover:text-stone-50 transition-colors"
          >
            {t("nav.book")}
          </button>
          <button
            data-testid="header-cta-btn"
            onClick={onOpenInquiry}
            className="hidden lg:inline-flex items-center gap-2 bg-stone-900 text-stone-50 rounded-full px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-stone-800 transition-colors"
          >
            {t("nav.request")}
          </button>
          <button
            className="lg:hidden p-2"
            onClick={() => setOpen((s) => !s)}
            data-testid="mobile-menu-btn"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden absolute top-[80px] left-0 right-0 bg-[#FAF7F5]/95 backdrop-blur-xl border-b border-stone-200">
          <div className="flex flex-col px-6 py-6 gap-4">
            {NAV_KEYS.map((k) => (
              <a
                key={k}
                href={HREFS[k]}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.18em] text-stone-800"
              >
                {t(`nav.${k}`)}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-2">
              <button
                onClick={() => {
                  setOpen(false);
                  onOpenAppointment();
                }}
                className="rounded-full border-2 border-stone-900 text-stone-900 px-5 py-3 text-[12px] uppercase tracking-[0.2em]"
              >
                {t("nav.book")}
              </button>
              <button
                onClick={() => {
                  setOpen(false);
                  onOpenInquiry();
                }}
                className="bg-stone-900 text-stone-50 rounded-full px-5 py-3 text-[12px] uppercase tracking-[0.2em]"
              >
                {t("nav.request")}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default StickyHeader;

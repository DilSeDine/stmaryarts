import React, { useState, useEffect } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";

const NAV = [
  { label: "Models", href: "#models" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Places", href: "#places" },
  { label: "Specs", href: "#specs" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

const StickyHeader = ({ onOpenInquiry, cartCount = 1 }) => {
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

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              data-testid={`nav-${n.label.toLowerCase()}-link`}
              className="text-[13px] uppercase tracking-[0.18em] font-medium text-stone-700 hover:text-stone-900 transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            data-testid="header-search-btn"
            className="p-2 rounded-full hover:bg-stone-100 transition-colors"
          >
            <Search className="w-4 h-4 text-stone-800" />
          </button>
          <button
            aria-label="Cart"
            data-testid="header-cart-btn"
            onClick={onOpenInquiry}
            className="relative p-2 rounded-full hover:bg-stone-100 transition-colors"
          >
            <ShoppingBag className="w-4 h-4 text-stone-800" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-stone-900" />
            )}
          </button>
          <button
            data-testid="header-cta-btn"
            onClick={onOpenInquiry}
            className="hidden md:inline-flex items-center gap-2 bg-stone-900 text-stone-50 rounded-full px-5 py-2.5 text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-stone-800 transition-colors"
          >
            Request Design
          </button>
          <button
            className="md:hidden p-2"
            onClick={() => setOpen((s) => !s)}
            data-testid="mobile-menu-btn"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden absolute top-[80px] left-0 right-0 bg-[#FAF7F5]/95 backdrop-blur-xl border-b border-stone-200">
          <div className="flex flex-col px-6 py-6 gap-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.18em] text-stone-800"
              >
                {n.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                onOpenInquiry();
              }}
              className="mt-2 bg-stone-900 text-stone-50 rounded-full px-5 py-3 text-[12px] uppercase tracking-[0.2em]"
            >
              Request Design
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default StickyHeader;

import React from "react";
import { PHONE_NUMBER, SHOP_ADDRESS } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="relative bg-stone-900 text-stone-300 pt-24 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <span className="h-9 w-9 rounded-full bg-stone-50 text-stone-900 flex items-center justify-center font-display font-bold text-sm">
                SM
              </span>
              <span className="font-display font-bold text-[20px] text-stone-50 tracking-tightest">
                St Mary Arts
              </span>
            </div>
            <p className="mt-5 text-[15px] leading-relaxed max-w-md text-stone-400">
              A small name-plate studio in Begur, Bengaluru. Brass, bronze and
              illuminated acrylic — cast, cut and finished by hand.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-stone-500">
              Studio
            </p>
            <p className="mt-4 text-[14px] leading-relaxed text-stone-200">
              {SHOP_ADDRESS}
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.22em] text-stone-500">
              Hours
            </p>
            <ul className="mt-4 space-y-1 text-[14px] text-stone-200">
              <li>Mon – Sat</li>
              <li>10 AM – 8 PM</li>
              <li className="text-stone-400">Sunday · by appointment</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.22em] text-stone-500">
              Contact
            </p>
            <ul className="mt-4 space-y-1 text-[14px] text-stone-200">
              <li>{PHONE_NUMBER}</li>
              <li className="text-stone-400">Cash · Google Pay</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] uppercase tracking-[0.22em] text-stone-500">
          <span>© {new Date().getFullYear()} St Mary Arts · Begur</span>
          <span>Crafted in Bengaluru · Three generations</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { PHONE_NUMBER, SHOP_ADDRESS } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";

const Footer = () => {
  const { t } = useI18n();
  const hours = t("footer.hoursVal") || [];
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
              {t("footer.about")}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-stone-500">
              {t("footer.studio")}
            </p>
            <p className="mt-4 text-[14px] leading-relaxed text-stone-200">
              {SHOP_ADDRESS}
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.22em] text-stone-500">
              {t("footer.hours")}
            </p>
            <ul className="mt-4 space-y-1 text-[14px] text-stone-200">
              {hours.map((h, i) => (
                <li key={i} className={i === 2 ? "text-stone-400" : ""}>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.22em] text-stone-500">
              {t("footer.contact")}
            </p>
            <ul className="mt-4 space-y-1 text-[14px] text-stone-200">
              <li>{PHONE_NUMBER}</li>
              <li className="text-stone-400">Cash · Google Pay</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] uppercase tracking-[0.22em] text-stone-500">
          <span>© {new Date().getFullYear()} St Mary Arts · Begur</span>
          <span>{t("footer.tag")}</span>
          <a
            href="/admin"
            data-testid="footer-admin-link"
            className="text-stone-500 hover:text-stone-200 transition-colors"
          >
            Admin
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { MapPin, Phone, Clock, CreditCard, MessageCircle, CalendarDays } from "lucide-react";
import {
  PHONE_NUMBER,
  PHONE_RAW,
  SHOP_ADDRESS,
  SHOP_HOURS,
  WHATSAPP_NUMBER,
} from "@/lib/constants";
import { useI18n } from "@/lib/i18n";

const ContactBlock = ({ onOpenInquiry, onOpenAppointment }) => {
  const { t } = useI18n();
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello St Mary Arts, I would like to discuss a custom name plate."
  )}`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "St Mary Arts, Begur Road, Bengaluru"
  )}`;

  return (
    <section
      id="visit"
      data-testid="contact-section"
      className="relative py-24 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        <div>
          <span className="section-label">{t("contact.label")}</span>
          <h2 className="mt-4 font-display font-[800] text-stone-900 text-[40px] md:text-[56px] leading-[0.98] tracking-tightest whitespace-pre-line">
            {t("contact.h2")}
          </h2>
          <p className="mt-6 text-stone-600 text-[17px] leading-relaxed max-w-md">
            {t("contact.p")}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <button
              data-testid="contact-book-btn"
              onClick={onOpenAppointment}
              className="inline-flex items-center gap-2 bg-stone-900 text-stone-50 rounded-full px-6 py-3.5 text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-stone-800 transition-colors"
            >
              <CalendarDays className="w-4 h-4" />
              {t("contact.book")}
            </button>
            <button
              data-testid="contact-request-btn"
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-2 border-2 border-stone-900 text-stone-900 rounded-full px-6 py-3.5 text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-stone-900 hover:text-stone-50 transition-colors"
            >
              {t("contact.request")}
            </button>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              data-testid="contact-whatsapp-btn"
              className="inline-flex items-center gap-2 text-stone-700 px-4 py-3.5 text-[12px] uppercase tracking-[0.2em] font-medium hover:text-stone-900 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              {t("contact.whatsapp")}
            </a>
          </div>
        </div>

        <div className="bg-white border border-stone-200 rounded-[28px] p-8 md:p-10">
          <dl className="divide-y divide-stone-200">
            {[
              {
                icon: MapPin,
                label: t("contact.address"),
                value: SHOP_ADDRESS,
                link: mapsLink,
                linkText: t("contact.openMaps"),
              },
              {
                icon: Phone,
                label: t("contact.call"),
                value: PHONE_NUMBER,
                link: `tel:${PHONE_RAW}`,
                linkText: t("contact.dial"),
              },
              {
                icon: Clock,
                label: t("contact.hours"),
                value: SHOP_HOURS,
              },
              {
                icon: CreditCard,
                label: t("contact.payments"),
                value: "Cash · Google Pay",
              },
            ].map((row) => {
              const Icon = row.icon;
              return (
                <div key={row.label} className="py-5 flex gap-5 items-start">
                  <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-stone-700" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <dt className="text-[11px] uppercase tracking-[0.2em] text-stone-500">
                      {row.label}
                    </dt>
                    <dd className="mt-1 text-[15px] text-stone-900 leading-relaxed">
                      {row.value}
                    </dd>
                    {row.link && (
                      <a
                        href={row.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-block text-[12px] uppercase tracking-[0.2em] font-medium text-stone-900 border-b border-stone-900 pb-0.5 hover:text-stone-600 hover:border-stone-300 transition-colors"
                      >
                        {row.linkText}
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default ContactBlock;

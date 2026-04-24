import React from "react";
import { MODELS } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";

const SpecTable = ({ selected }) => {
  const { t } = useI18n();
  const ROWS = [
    { label: "Material", values: ["Aluminium + LED modules", "Acrylic sheet / ACP panel", "PVC flex / Vinyl"] },
    { label: "Finish", values: ["Backlit illumination · colour options", "Flush or raised 3D letters", "Digital print · UV-resistant inks"] },
    { label: "Best for", values: ["Shop fronts · Showrooms · Malls", "Offices · Clinics · Receptions", "Banners · Events · Outdoor ads"] },
    { label: "Installation", values: ["On-site by our team", "On-site or self-install", "Self-install or on-site"] },
    { label: "Durability", values: ["3–5 yrs outdoor", "5+ yrs indoor / covered", "6–18 months outdoor flex"] },
    { label: "Design preview", values: ["Included", "Included", "Included"] },
    { label: "Lead time", values: ["3–5 days", "2–4 days", "1–2 days"] },
    { label: "Starting price", values: ["Custom quote", "From ₹1,500", "From ₹500"] },
  ];
  const featuredIdx = MODELS.findIndex((m) => m.id === selected);
  return (
    <section
      id="specs"
      data-testid="specs-section"
      className="relative py-24 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-14 max-w-3xl">
          <span className="section-label">{t("specs.label")}</span>
          <h2 className="mt-4 font-display font-[800] text-stone-900 text-[40px] md:text-[56px] leading-[0.98] tracking-tightest whitespace-pre-line">
            {t("specs.h2")}
          </h2>
        </div>

        <div className="overflow-x-auto">
          <p className="md:hidden mb-3 text-[11px] uppercase tracking-[0.2em] text-stone-400 text-center">
            ← Swipe to compare →
          </p>
          <table className="w-full border-collapse min-w-[720px]" data-testid="spec-table">
            <thead>
              <tr className="border-b border-stone-300">
                <th className="text-left py-5 pr-6 text-[11px] uppercase tracking-[0.22em] text-stone-500 font-medium">
                  {t("specs.feature")}
                </th>
                {MODELS.map((m, i) => (
                  <th
                    key={m.id}
                    className={`text-left py-5 px-6 font-display text-[20px] tracking-tight ${
                      i === featuredIdx
                        ? "bg-stone-100 text-stone-900 font-bold"
                        : "text-stone-800 font-medium"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ background: m.swatch }}
                      />
                      {m.name}
                      {i === featuredIdx && (
                        <span className="ml-2 text-[10px] uppercase tracking-[0.2em] bg-stone-900 text-stone-50 px-2 py-0.5 rounded-full font-sans">
                          {t("specs.yourPick")}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-stone-200 hover:bg-stone-50/60 transition-colors"
                >
                  <td className="py-5 pr-6 text-[13px] uppercase tracking-[0.18em] text-stone-500 align-top">
                    {row.label}
                  </td>
                  {row.values.map((v, i) => (
                    <td
                      key={i}
                      className={`py-5 px-6 text-[15px] leading-relaxed align-top ${
                        i === featuredIdx
                          ? "bg-stone-100 text-stone-900 font-medium"
                          : "text-stone-700"
                      }`}
                    >
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SpecTable;

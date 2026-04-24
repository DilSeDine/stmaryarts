import React from "react";
import { MODELS } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";

const SpecTable = ({ selected }) => {
  const { t } = useI18n();
  const ROWS = [
    { label: "Material", values: ["Solid cast brass", "Bronze alloy · patina", "Acrylic + aluminum"] },
    { label: "Finish", values: ["Hand-polished lustre", "Antique patina", "Edge-lit, warm LED"] },
    { label: "Lettering", values: ["Raised, cast", "Raised, cast", "Laser-cut, face-lit"] },
    { label: "Best for", values: ["Villas · heritage gates", "Apartments · lobbies", "Offices · clinics · cafés"] },
    { label: "Weathering", values: ["Ages beautifully outdoors", "Patina deepens over years", "Indoor & shaded outdoor"] },
    { label: "Rendered preview", values: ["Included", "Included", "Included"] },
    { label: "Typical lead time", values: ["10–14 days", "12–16 days", "7–10 days"] },
    { label: "Starts at", values: ["₹3,200", "₹3,800", "₹4,500"] },
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

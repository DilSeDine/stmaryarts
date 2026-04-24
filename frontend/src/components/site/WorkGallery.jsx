import React, { useState } from "react";

const CATS = [
  { key: "all", label: "All Work" },
  { key: "led", label: "LED Signs" },
  { key: "acrylic", label: "Acrylic & 3D" },
  { key: "flex", label: "Flex & Vinyl" },
];

const CAT_COLOR = {
  led: "bg-amber-500",
  acrylic: "bg-slate-700",
  flex: "bg-emerald-600",
};

const GALLERY = [
  {
    id: 1,
    category: "led",
    tag: "LED Sign Board",
    caption: "Shop front glow sign · Begur",
    image:
      "https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    category: "acrylic",
    tag: "Acrylic Letters",
    caption: "Office reception · Koramangala",
    image:
      "https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    category: "flex",
    tag: "Flex Banner",
    caption: "Event backdrop · MG Road",
    image:
      "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    category: "led",
    tag: "Backlit Board",
    caption: "Restaurant fascia sign · BTM",
    image:
      "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 5,
    category: "acrylic",
    tag: "3D Letters",
    caption: "Corporate lobby · Whitefield",
    image:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 6,
    category: "flex",
    tag: "Outdoor Hoarding",
    caption: "Billboard · Outer Ring Road",
    image:
      "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 7,
    category: "led",
    tag: "LED Glow Sign",
    caption: "Salon entrance · Jayanagar",
    image:
      "https://images.pexels.com/photos/1191388/pexels-photo-1191388.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 8,
    category: "acrylic",
    tag: "Name Plates",
    caption: "Clinic door plate · Bangalore",
    image:
      "https://images.pexels.com/photos/5202422/pexels-photo-5202422.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 9,
    category: "flex",
    tag: "Vinyl Stickers",
    caption: "Store branding · HSR Layout",
    image:
      "https://images.pexels.com/photos/12114196/pexels-photo-12114196.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 10,
    category: "led",
    tag: "LED Showroom Sign",
    caption: "Showroom · Electronic City",
    image:
      "https://images.pexels.com/photos/1484810/pexels-photo-1484810.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 11,
    category: "acrylic",
    tag: "Wall Signage",
    caption: "Retail shop · Indiranagar",
    image:
      "https://images.pexels.com/photos/3801517/pexels-photo-3801517.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 12,
    category: "flex",
    tag: "Exhibition Standee",
    caption: "Trade fair display · KTPO",
    image:
      "https://images.pexels.com/photos/1488318/pexels-photo-1488318.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const WorkGallery = () => {
  const [activeCat, setActiveCat] = useState("all");

  const filtered =
    activeCat === "all"
      ? GALLERY
      : GALLERY.filter((g) => g.category === activeCat);

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-stone-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="section-label">Our work</span>
            <h2 className="mt-4 font-display font-[800] text-stone-900 text-[40px] md:text-[56px] leading-[0.98] tracking-tightest max-w-2xl whitespace-pre-line">
              {"Seen across\nBengaluru."}
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-2 flex-wrap">
            {CATS.map((c) => (
              <button
                key={c.key}
                onClick={() => setActiveCat(c.key)}
                className={`px-4 py-2 rounded-full text-[11px] uppercase tracking-[0.18em] font-medium transition-colors duration-200 ${
                  activeCat === c.key
                    ? "bg-stone-900 text-stone-50"
                    : "bg-stone-200 text-stone-600 hover:bg-stone-300"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry grid via CSS columns */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid mb-3 md:mb-4 relative group overflow-hidden rounded-2xl bg-stone-200"
            >
              <img
                src={item.image}
                alt={item.caption}
                loading="lazy"
                className="w-full h-auto block object-cover group-hover:scale-[1.04] transition-transform duration-700"
              />

              {/* Hover overlay — desktop */}
              <div className="hidden md:flex absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-col justify-end p-4 gap-1">
                <span
                  className={`self-start px-2 py-0.5 rounded-full text-white text-[9px] font-bold uppercase tracking-[0.18em] ${
                    CAT_COLOR[item.category]
                  }`}
                >
                  {item.tag}
                </span>
                <p className="text-stone-100 text-[12px] leading-snug">
                  {item.caption}
                </p>
              </div>

              {/* Always-visible badge — mobile */}
              <div className="md:hidden absolute top-2 left-2">
                <span
                  className={`px-2 py-0.5 rounded-full text-white text-[9px] font-bold uppercase tracking-[0.15em] ${
                    CAT_COLOR[item.category]
                  }`}
                >
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <p className="mt-10 text-center text-stone-500 text-[13px]">
          Every image is from work delivered to a real Bengaluru business.{" "}
          <a
            href="https://wa.me/919613503503?text=Hello%20St%20Mary%20Arts%20—%20I%20would%20like%20a%20quote"
            target="_blank"
            rel="noreferrer"
            className="text-stone-900 font-medium underline underline-offset-4 hover:text-stone-600 transition-colors"
          >
            Discuss your project →
          </a>
        </p>
      </div>
    </section>
  );
};

export default WorkGallery;

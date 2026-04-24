import React from "react";

const IMAGES = [
  {
    src: "https://images.pexels.com/photos/14853641/pexels-photo-14853641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Artisan metalworker",
    h: "h-[260px] md:h-[340px]",
  },
  {
    src: "https://images.pexels.com/photos/32612238/pexels-photo-32612238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Wood carver at work",
    h: "h-[200px] md:h-[260px]",
  },
  {
    src: "https://images.pexels.com/photos/13701662/pexels-photo-13701662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Tools laid out on a workbench",
    h: "h-[200px] md:h-[260px]",
  },
  {
    src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Hand polishing brass",
    h: "h-[260px] md:h-[340px]",
    fallback:
      "https://images.pexels.com/photos/5202422/pexels-photo-5202422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

const EditorialPhilosophy = () => {
  return (
    <section
      id="philosophy"
      data-testid="philosophy-section"
      className="relative py-24 md:py-32 bg-stone-100"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        <div className="lg:sticky lg:top-32">
          <span className="section-label">The studio</span>
          <h2 className="mt-5 font-display font-[800] text-stone-900 text-[40px] md:text-[56px] leading-[0.98] tracking-tightest">
            We make one plate<br />at a time — on purpose.
          </h2>
          <div className="mt-8 space-y-5 text-stone-700 text-[16px] md:text-[17px] leading-[1.8] max-w-xl">
            <p>
              Anthony began casting name plates in 1987 — slowly, deliberately,
              a single doorway at a time. Today the studio is run with his son
              Jackson, but the rhythm hasn&apos;t changed: design, review,
              render, cast, finish, deliver.
            </p>
            <p>
              Every commission receives a full rendered preview before
              production. We change a curve, a weight, a corner radius — until
              it feels inevitable. Only then do we cut metal.
            </p>
            <p>
              That patience is why most of our work arrives earlier than
              promised. It&apos;s also why a plate we made in 2004 is still
              weathering beautifully on a Begur doorway today.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
            {[
              ["3", "Generations"],
              ["128", "Reviews · 4.9★"],
              ["38+", "Years of craft"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display font-bold text-[32px] text-stone-900 tracking-tightest">
                  {n}
                </dt>
                <dd className="mt-1 text-[11px] uppercase tracking-[0.2em] text-stone-500">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-5">
          <div className="flex flex-col gap-4 md:gap-5 pt-10 md:pt-16">
            {[IMAGES[0], IMAGES[1]].map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-[20px] bg-stone-200 ${img.h}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  onError={(e) => {
                    if (img.fallback) e.currentTarget.src = img.fallback;
                  }}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 md:gap-5">
            {[IMAGES[2], IMAGES[3]].map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-[20px] bg-stone-200 ${img.h}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  onError={(e) => {
                    if (img.fallback) e.currentTarget.src = img.fallback;
                  }}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialPhilosophy;

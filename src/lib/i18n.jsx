import React, { createContext, useContext, useEffect, useState } from "react";

export const LANGS = [
  { code: "en", label: "EN", name: "English" },
  { code: "kn", label: "ಕನ", name: "ಕನ್ನಡ" },
  { code: "hi", label: "हिं", name: "हिन्दी" },
];

export const translations = {
  en: {
    nav: {
      models: "Models",
      philosophy: "Philosophy",
      places: "Places",
      specs: "Specs",
      reviews: "Reviews",
      visit: "Visit",
      request: "Request Design",
      book: "Book Visit",
    },
    hero: {
      rating: "4.9 · 128 Reviews · Begur, Bengaluru",
      h1_a: "Signboards &",
      h1_b: "branding,",
      h1_c: "for every business",
      h1_d: "that means it.",
      sub: "St Mary Arts has been making sign boards, LED displays, acrylic letters and printed materials for Bengaluru businesses since 1987. Fast turnaround, fair pricing, on-site installation — all from one studio in Begur.",
      primary: "Get a free quote",
      secondary: "See our services",
      badge_materials: "Services",
      badge_materials_val: "LED · Acrylic · Flex Print",
      badge_craft: "Turnaround",
      badge_craft_val: "Most orders ready in 1–5 days",
      cap_left: "Signage Studio · Begur, Bengaluru",
      cap_right: "Est. 1987 · Serving Bengaluru businesses",
    },
    models: {
      label: "Choose your service",
      h2: "Three services.\nOne trusted studio.",
      p: "Tell us what you need — LED boards, acrylic letters or flex printing. We'll send a design preview and confirm pricing before production starts.",
      selected: "Selected",
      select: "Select",
    },
    philosophy: {
      label: "The studio",
      h2: "Built on craft,\ndriven by deadlines.",
      p1: "St Mary Arts has been making signboards for shops, offices and businesses in Begur since 1987. Anthony and his son Jackson run the studio today — from a single shop-front board to a multi-branch corporate rollout, every job gets the same attention.",
      p2: "Every order starts with a design preview. We share a mockup, you give feedback, and we revise until it's right — before a single thing is printed or fabricated. This applies whether the job is ₹500 or ₹50,000.",
      p3: "Fast turnaround without cutting corners is the reputation we've built over 38 years. Most orders ship ahead of schedule. That's why businesses across Bengaluru keep coming back — and send their contacts.",
      stat_gen: "Businesses served",
      stat_rev: "Reviews · 4.9★",
      stat_yrs: "Years in Bengaluru",
    },
    places: {
      label: "Where our signs live",
      h2: "From a corner shop\nto a city-wide rollout.",
      p: "Every sign is built for a specific space and audience. Here's how our work shows up across three of the most common settings we serve.",
    },
    specs: {
      label: "A side-by-side",
      h2: "Specifications,\nread at a glance.",
      feature: "Feature",
      yourPick: "Your pick",
    },
    reviews: {
      label: "Said by our clients",
      h2: "4.9 out of 5,\nacross 128 reviews.",
      google: "Google Reviews",
    },
    contact: {
      label: "Visit the studio",
      h2: "Come look at\nthe samples.",
      p: "Our workshop in Begur is open Monday to Saturday, 10 AM to 8 PM. Walk in to see material samples and finished work — or call ahead so Anthony or Jackson can set aside time for you.",
      request: "Request design",
      book: "Book a visit",
      whatsapp: "WhatsApp us",
      address: "Address",
      call: "Call",
      hours: "Hours",
      payments: "Payments",
      openMaps: "Open in Maps",
      dial: "Dial now",
    },
    checkout: {
      ready: "Ready to quote · Fast turnaround",
      chooseMaterial: "Choose a service",
      selectHint: "↑ Select a service above",
      whatsapp: "WhatsApp",
      request: "Request",
    },
    inquiry: {
      label: "Request a design",
      h2: "Tell us about your sign.",
      sub: "Share a few details. We'll call within a day, send a design preview and confirm pricing before any production starts.",
      name: "Name",
      namePh: "Your full name",
      phone: "Phone",
      email: "Email (optional)",
      material: "Service type",
      materialPh: "Choose a service",
      brief: "Brief (optional)",
      briefPh: "Sign text, dimensions, location, any design preferences…",
      send: "Send to studio",
      sending: "Sending…",
      reply: "Typical reply within 24h",
      successH2: "Your request is in.",
      successP: "We'll reach out shortly at the number you shared. Meanwhile, you can also WhatsApp us at 96135 03503.",
      close: "Close",
      errRequired: "Please share your name and phone number.",
      errGeneric: "Could not submit right now. Please call 096135 03503.",
      successToast: "Thank you — Anthony or Jackson will be in touch shortly.",
    },
    appointment: {
      label: "Book a studio visit",
      h2: "Pick a time at the studio.",
      sub: "Our studio in Begur is open Monday–Saturday, 10 AM to 8 PM. Pick a day and slot — we'll confirm by call or WhatsApp.",
      name: "Name",
      phone: "Phone",
      email: "Email (optional)",
      date: "Date",
      slot: "Time",
      purpose: "Purpose",
      purposePh: "Choose a reason",
      notes: "Notes (optional)",
      notesPh: "Anything we should prepare before you arrive…",
      submit: "Confirm visit",
      sending: "Sending…",
      successH2: "Your visit is booked.",
      successP: "We'll confirm shortly on the phone number you shared.",
      errRequired: "Please fill name, phone, date and time.",
      errSundayClosed: "We're closed on Sundays. Please pick another day.",
      purposes: {
        consult: "Design consultation",
        samples: "View material samples",
        pickup: "Pickup / delivery",
        other: "Other",
      },
    },
    footer: {
      studio: "Studio",
      hours: "Hours",
      contact: "Contact",
      hoursVal: ["Mon – Sat", "10 AM – 8 PM", "Sunday · Closed"],
      tag: "Made in Bengaluru · Since 1987",
      about:
        "A signage and advertising fabrication shop in Begur, Bengaluru. LED sign boards, acrylic letters, flex printing and branding materials — made and installed since 1987.",
    },
    admin: {
      title: "Studio Admin",
      sub: "Inquiries and appointments, in one quiet view.",
      passwordLabel: "Admin password",
      signIn: "Sign in",
      signOut: "Sign out",
      tabs: { inquiries: "Inquiries", appointments: "Appointments" },
      empty: "Nothing here yet.",
      wrongPwd: "Wrong password.",
    },
  },
  kn: {
    nav: {
      models: "ಮಾದರಿಗಳು",
      philosophy: "ತತ್ವ",
      places: "ಸ್ಥಳಗಳು",
      specs: "ವಿವರಣೆಗಳು",
      reviews: "ವಿಮರ್ಶೆಗಳು",
      visit: "ಭೇಟಿ",
      request: "ವಿನ್ಯಾಸ ಕೋರಿ",
      book: "ಭೇಟಿ ಬುಕ್ ಮಾಡಿ",
    },
    hero: {
      rating: "4.9 · 128 ವಿಮರ್ಶೆಗಳು · ಬೇಗೂರು, ಬೆಂಗಳೂರು",
      h1_a: "ಸೈನ್‌ಬೋರ್ಡ್‌ಗಳು &",
      h1_b: "ಬ್ರ್ಯಾಂಡಿಂಗ್,",
      h1_c: "ಪ್ರತಿ ವ್ಯಾಪಾರಕ್ಕಾಗಿ",
      h1_d: "ಸರಿಯಾದ ಆಯ್ಕೆ.",
      sub: "1987 ರಿಂದ ಬೆಂಗಳೂರಿನ ವ್ಯಾಪಾರಸ್ಥರಿಗಾಗಿ ಸೈನ್‌ಬೋರ್ಡ್‌ಗಳು, LED ಡಿಸ್‌ಪ್ಲೇ, ಅಕ್ರಿಲಿಕ್ ಅಕ್ಷರಗಳು ಮತ್ತು ಮುದ್ರಣ ಸಾಮಗ್ರಿ ತಯಾರಿಸುತ್ತಿದ್ದೇವೆ. ತ್ವರಿತ ತಲುಪಿಸುವಿಕೆ, ಸರಿಯಾದ ಬೆಲೆ, ಆನ್‌ಸೈಟ್ ಅಳವಡಿಕೆ.",
      primary: "ಉಚಿತ ಕೋಟ್ ಪಡೆಯಿರಿ",
      secondary: "ಸೇವೆಗಳನ್ನು ನೋಡಿ",
      badge_materials: "ಸೇವೆಗಳು",
      badge_materials_val: "LED · ಅಕ್ರಿಲಿಕ್ · ಫ್ಲೆಕ್ಸ್ ಪ್ರಿಂಟ್",
      badge_craft: "ಡೆಲಿವರಿ",
      badge_craft_val: "ಹೆಚ್ಚಿನ ಆದೇಶಗಳು 1–5 ದಿನದಲ್ಲಿ ಸಿದ್ಧ",
      cap_left: "ಸೈನೇಜ್ ಸ್ಟುಡಿಯೋ · ಬೇಗೂರು, ಬೆಂಗಳೂರು",
      cap_right: "1987 ರಿಂದ ಬೆಂಗಳೂರಿಗೆ ಸೇವೆ",
    },
    models: {
      label: "ನಿಮ್ಮ ಸೇವೆ ಆಯ್ಕೆಮಾಡಿ",
      h2: "ಮೂರು ಸೇವೆಗಳು.\nಒಂದು ವಿಶ್ವಾಸಾರ್ಹ ಸ್ಟುಡಿಯೋ.",
      p: "ನಿಮಗೆ ಏನು ಬೇಕೆಂದು ಹೇಳಿ — LED ಬೋರ್ಡ್, ಅಕ್ರಿಲಿಕ್ ಅಕ್ಷರ ಅಥವಾ ಫ್ಲೆಕ್ಸ್ ಮುದ್ರಣ. ಉತ್ಪಾದನೆ ಮೋದಲು ಡಿಸೈನ್ ಪ್ರೀವ್ಯೂ ತೋರಿಸುತ್ತೇವೆ.",
      selected: "ಆಯ್ಕೆ",
      select: "ಆಯ್ಕೆ ಮಾಡಿ",
    },
    philosophy: {
      label: "ಸ್ಟುಡಿಯೋ",
      h2: "ಕಲೆ ಮೇಲೆ ನಿರ್ಮಿಸಿದ,\nಗಡುವಿನಿಂದ ನಡೆಯುವ.",
      p1: "St Mary Arts 1987 ರಿಂದ ಬೇಗೂರಿನ ಅಂಗಡಿ, ಕಚೇರಿ ಮತ್ತು ವ್ಯಾಪಾರಗಳಿಗೆ ಸೈನ್‌ಬೋರ್ಡ್ ಮಾಡುತ್ತಿದೆ. ಒಂದು ಅಂಗಡಿ ಬೋರ್ಡ್‌ನಿಂದ ಬಹು-ಶಾಖೆ ಕಾರ್ಪೋರೇಟ್ ರೋಲ್‌ಔಟ್‌ವರೆಗೆ — ಪ್ರತಿ ಕೆಲಸಕ್ಕೂ ಒಂದೇ ಗಮನ.",
      p2: "ಪ್ರತಿ ಆದೇಶ ಡಿಸೈನ್ ಪ್ರೀವ್ಯೂನಿಂದ ಆರಂಭ. ಮೋಕ್‌ಅಪ್ ತೋರಿಸಿ, ಸರಿಮಾಡಿ, ನಿಮ್ಮ ಒಪ್ಪಿಗೆ ನಂತರ ಉತ್ಪಾದನೆ — ₹500 ರ ಕೆಲಸವಾಗಲಿ ₹50,000 ರದ್ದಾಗಲಿ.",
      p3: "ಗಡುವಿನೋಳಗೆ ಒಳ್ಳೆ ಕೆಲಸ — ಇದೇ ನಮ್ಮ 38 ವರ್ಷದ ಹೆಸರು. ಹೆಚ್ಚಿನ ಆದೇಶಗಳು ಭರವಸೆಗಿಂತ ಮೋದಲೇ ತಲುಪುತ್ತವೆ.",
      stat_gen: "ಸೇವಿಸಿದ ವ್ಯಾಪಾರಗಳು",
      stat_rev: "ವಿಮರ್ಶೆಗಳು · 4.9★",
      stat_yrs: "ಬೆಂಗಳೂರಿನಲ್ಲಿ ವರ್ಷಗಳು",
    },
    places: {
      label: "ನಮ್ಮ ಸೈನ್ ಇರುವೆಡೆ",
      h2: "ಒಂದು ಮೂಲೆ ಅಂಗಡಿಯಿಂದ\nಇಡೀ ನಗರದ ರೋಲ್‌ಔಟ್‌ವರೆಗೆ.",
      p: "ಪ್ರತಿ ಸೈನ್ ಒಂದು ನಿರ್ದಿಷ್ಟ ಸ್ಥಳ ಮತ್ತು ಉದ್ದೇಶಕ್ಕಾಗಿ ತಯಾರಾಗಿದೆ. ನಾವು ಸೇವಿಸುವ ಮೂರು ಸಂದರ್ಭಗಳನ್ನು ಇಲ್ಲಿ ನೋಡಿ.",
    },
    specs: {
      label: "ಹೋಲಿಕೆ",
      h2: "ವಿವರಣೆಗಳು,\nಒಂದೇ ನೋಟದಲ್ಲಿ.",
      feature: "ವೈಶಿಷ್ಟ್ಯ",
      yourPick: "ನಿಮ್ಮ ಆಯ್ಕೆ",
    },
    reviews: {
      label: "ನಮ್ಮ ಗ್ರಾಹಕರು ಹೇಳಿದ್ದು",
      h2: "128 ವಿಮರ್ಶೆಗಳಲ್ಲಿ\n4.9 ರೇಟಿಂಗ್.",
      google: "ಗೂಗಲ್ ವಿಮರ್ಶೆಗಳು",
    },
    contact: {
      label: "ಸ್ಟುಡಿಯೋ ಭೇಟಿ",
      h2: "ಮಾದರಿಗಳನ್ನು\nನೋಡಲು ಬನ್ನಿ.",
      p: "ನಮ್ಮ ವರ್ಕ್‌ಶಾಪ್ ಬೇಗೂರಿನಲ್ಲಿ ಸೋಮ–ಶನಿ, ಬೆಳಿಗ್ಗೆ 10 ರಿಂದ ರಾತ್ರಿ 8 ರವರೆಗೆ ತೆರೆದಿದೆ. ಮಾದರಿ ಮತ್ತು ಮುಗಿದ ಕೆಲಸ ನೋಡಲು ಬನ್ನಿ — ಅಥವಾ ಕರೆ ಮಾಡಿ ಆಂಥೋನಿ ಅಥವಾ ಜಾಕ್ಸನ್ ಸಮಯ ಕೊಡುತ್ತಾರೆ.",
      request: "ವಿನ್ಯಾಸ ಕೋರಿ",
      book: "ಭೇಟಿ ಬುಕ್ ಮಾಡಿ",
      whatsapp: "ವಾಟ್ಸ್‌ಆಪ್",
      address: "ವಿಳಾಸ",
      call: "ಕರೆ",
      hours: "ಸಮಯ",
      payments: "ಪಾವತಿ",
      openMaps: "ನಕ್ಷೆ ತೆರೆ",
      dial: "ಈಗ ಕರೆ",
    },
    checkout: {
      ready: "ಕೋಟ್‌ಗೆ ಸಿದ್ಧ · ತ್ವರಿತ ಡೆಲಿವರಿ",
      chooseMaterial: "ಸೇವೆ ಆಯ್ಕೆಮಾಡಿ",
      selectHint: "↑ ಮೇಲೆ ಸೇವೆ ಆಯ್ಕೆಮಾಡಿ",
      whatsapp: "ವಾಟ್ಸ್‌ಆಪ್",
      request: "ಕೋರಿ",
    },
    inquiry: {
      label: "ವಿನ್ಯಾಸ ಕೋರಿ",
      h2: "ನಿಮ್ಮ ಸೈನ್ ಕುರಿತು ಹೇಳಿ.",
      sub: "ಕೆಲವು ವಿವರಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ. ನಾವು ಒಂದು ದಿನದಲ್ಲಿ ಕರೆ ಮಾಡಿ, ಡಿಸೈನ್ ಪ್ರೀವ್ಯೂ ಕಳುಹಿಸಿ, ಬೆಲೆ ದೃಢೀಕರಿಸುತ್ತೇವೆ.",
      name: "ಹೆಸರು",
      namePh: "ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರು",
      phone: "ಫೋನ್",
      email: "ಇಮೇಲ್ (ಐಚ್ಛಿಕ)",
      material: "ಸೇವೆಯ ಪ್ರಕಾರ",
      materialPh: "ಸೇವೆ ಆಯ್ಕೆಮಾಡಿ",
      brief: "ವಿವರ (ಐಚ್ಚಿಕ)",
      briefPh: "ಸೈನ್ ಪಠ್ಯ, ಅಳತೆ, ಸ್ಥಳ, ಯಾವುದೇದಾದರು ಆದ್ಯತೆಗಳು…",
      send: "ಸ್ಟುಡಿಯೋಗೆ ಕಳುಹಿಸಿ",
      sending: "ಕಳುಹಿಸುತ್ತಿದೆ…",
      reply: "24 ಗಂಟೆಗಳೊಳಗೆ ಉತ್ತರ",
      successH2: "ನಿಮ್ಮ ಕೋರಿಕೆ ಸ್ವೀಕರಿಸಲಾಗಿದೆ.",
      successP: "ನೀವು ಕೊಟ್ಟ ಸಂಖ್ಯೆಗೆ ಶೀಘ್ರದಲ್ಲೇ ಕರೆ ಮಾಡುತ್ತೇವೆ. 96135 03503 ಗೆ ವಾಟ್ಸ್‌ಆಪ್ ಮಾಡಬಹುದು.",
      close: "ಮುಚ್ಚಿ",
      errRequired: "ದಯವಿಟ್ಟು ಹೆಸರು ಮತ್ತು ಫೋನ್ ಸಂಖ್ಯೆ ನೀಡಿ.",
      errGeneric: "ಈಗ ಸಲ್ಲಿಸಲಾಗಲಿಲ್ಲ. 096135 03503 ಗೆ ಕರೆ ಮಾಡಿ.",
      successToast: "ಧನ್ಯವಾದಗಳು — ಆಂಥೋನಿ ಅಥವಾ ಜಾಕ್ಸನ್ ಶೀಘ್ರದಲ್ಲಿ ಸಂಪರ್ಕಿಸುತ್ತಾರೆ.",
    },
    appointment: {
      label: "ಸ್ಟುಡಿಯೋ ಭೇಟಿ",
      h2: "ಸ್ಟುಡಿಯೋದಲ್ಲಿ ಸಮಯ ಆಯ್ಕೆಮಾಡಿ.",
      sub: "ಬೇಗೂರಿನ ಸ್ಟುಡಿಯೋ ಸೋಮ–ಶನಿ, ಬೆಳಿಗ್ಗೆ 10 ರಿಂದ ರಾತ್ರಿ 8 ರವರೆಗೆ. ದಿನ ಮತ್ತು ಸಮಯ ಆಯ್ಕೆಮಾಡಿ — ನಾವು ಕರೆ/ವಾಟ್ಸ್‌ಆಪ್‌ನಲ್ಲಿ ದೃಢೀಕರಿಸುತ್ತೇವೆ.",
      name: "ಹೆಸರು",
      phone: "ಫೋನ್",
      email: "ಇಮೇಲ್ (ಐಚ್ಛಿಕ)",
      date: "ದಿನಾಂಕ",
      slot: "ಸಮಯ",
      purpose: "ಉದ್ದೇಶ",
      purposePh: "ಕಾರಣ ಆಯ್ಕೆಮಾಡಿ",
      notes: "ಟಿಪ್ಪಣಿ (ಐಚ್ಛಿಕ)",
      notesPh: "ನೀವು ಬರುವ ಮೊದಲು ಸಿದ್ಧಪಡಿಸಲು…",
      submit: "ಭೇಟಿ ಖಚಿತಪಡಿಸಿ",
      sending: "ಕಳುಹಿಸುತ್ತಿದೆ…",
      successH2: "ನಿಮ್ಮ ಭೇಟಿ ಬುಕ್ ಆಗಿದೆ.",
      successP: "ನೀವು ಕೊಟ್ಟ ಫೋನ್ ಸಂಖ್ಯೆಗೆ ಶೀಘ್ರದಲ್ಲಿ ದೃಢೀಕರಿಸುತ್ತೇವೆ.",
      errRequired: "ಹೆಸರು, ಫೋನ್, ದಿನಾಂಕ ಮತ್ತು ಸಮಯ ಭರ್ತಿ ಮಾಡಿ.",
      errSundayClosed: "ಭಾನುವಾರ ಬಂದ್. ಬೇರೆ ದಿನ ಆಯ್ಕೆಮಾಡಿ.",
      purposes: {
        consult: "ವಿನ್ಯಾಸ ಸಮಾಲೋಚನೆ",
        samples: "ಮೆಟೀರಿಯಲ್ ಮಾದರಿ",
        pickup: "ಪಿಕ್‌ಅಪ್ / ಡಿಲಿವರಿ",
        other: "ಇತರೆ",
      },
    },
    footer: {
      studio: "ಸ್ಟುಡಿಯೋ",
      hours: "ಸಮಯ",
      contact: "ಸಂಪರ್ಕ",
      hoursVal: ["ಸೋಮ – ಶನಿ", "ಬೆಳಿಗ್ಗೆ 10 – ರಾತ್ರಿ 8", "ಭಾನುವಾರ · ಬಂದ್"],
      tag: "ಬೆಂಗಳೂರಿನಲ್ಲಿ ತಯಾರು · 1987 ರಿಂದ",
      about:
        "ಬೇಗೂರು, ಬೆಂಗಳೂರಿನ ಸೈನೇಜ್ ಮತ್ತು ಜಾಹೀರಾತು ಅಂಗಡಿ. LED ಸೈನ್‌ಬೋರ್ಡ್, ಅಕ್ರಿಲಿಕ್ ಅಕ್ಷರ, ಫ್ಲೆಕ್ಸ್ ಮುದ್ರಣ — 1987 ರಿಂದ.",
    },
    admin: {
      title: "ಸ್ಟುಡಿಯೋ ಅಡ್ಮಿನ್",
      sub: "ಎಲ್ಲಾ ಕೋರಿಕೆಗಳು ಮತ್ತು ಭೇಟಿಗಳು ಒಂದೇ ಕಡೆ.",
      passwordLabel: "ಅಡ್ಮಿನ್ ಪಾಸ್‌ವರ್ಡ್",
      signIn: "ಸೈನ್ ಇನ್",
      signOut: "ಸೈನ್ ಔಟ್",
      tabs: { inquiries: "ಕೋರಿಕೆಗಳು", appointments: "ಭೇಟಿಗಳು" },
      empty: "ಇಲ್ಲಿ ಇನ್ನೂ ಏನೂ ಇಲ್ಲ.",
      wrongPwd: "ತಪ್ಪು ಪಾಸ್‌ವರ್ಡ್.",
    },
  },
  hi: {
    nav: {
      models: "मॉडल",
      philosophy: "दर्शन",
      places: "स्थान",
      specs: "विवरण",
      reviews: "समीक्षाएं",
      visit: "यात्रा",
      request: "डिज़ाइन अनुरोध",
      book: "विज़िट बुक करें",
    },
    hero: {
      rating: "4.9 · 128 समीक्षाएं · बेगूर, बेंगलुरु",
      h1_a: "साइनबोर्ड &",
      h1_b: "ब्रांडिंग,",
      h1_c: "हर व्यवसाय के लिए",
      h1_d: "जो आगे बढ़ना चाहता है।",
      sub: "1987 से बेंगलूरू के व्यवसायों के लिए साइनबोर्ड, LED डिस्प्ले, एक्रिलिक अक्षर और प्रिंटिंग सामग्री बना रहे हैं। तेज़ डिलीवरी, उचित मूल्य, ऑन-साइट इंस्टॉलेशन।",
      primary: "मुफ़त कोट लें",
      secondary: "सेवाएं देखें",
      badge_materials: "सेवाएं",
      badge_materials_val: "LED · एक्रिलिक · फ्लेक्स प्रिंट",
      badge_craft: "डिलीवरी",
      badge_craft_val: "ज़्यादातर ऑर्डर 1–5 दिनों में",
      cap_left: "साइनेज स्टूडियो · बेगूर, बेंगलुरु",
      cap_right: "1987 से बेंगलूरू में सेवा",
    },
    models: {
      label: "अपनी सेवा चुनें",
      h2: "तीन सेवाएं।\nएक भरोसेमंद स्टूडियो।",
      p: "बताएं आपको क्या चाहिए — LED बोर्ड, एक्रिलिक अक्षर या फ्लेक्स प्रिंटिंग। उत्पादन से पहले डिज़ाइन प्रीव्यू भेजेंगे।",
      selected: "चयनित",
      select: "चुनें",
    },
    philosophy: {
      label: "स्टूडियो",
      h2: "शिल्प पर बना,\nडेडलाइन पर चलता।",
      p1: "St Mary Arts 1987 से बेगूर के दुकानदारों, कार्यालयों और व्यवसायों के लिए साइनबोर्ड बना रहे हैं। एंथनी और उनके बेटे जैक्सन आज स्टूडियो चलाते हैं — एक बोर्ड से लेकर पूरे कॉर्पोरेट रोलआउट तक, हर काम को बराबर ध्यान मिलता है।",
      p2: "हर ऑर्डर डिज़ाइन प्रीव्यू से शुरू होता है। मॉकअप दिखाएंगे, बदलाव करेंगे, आपकी मंज़ूरी के बाद ही उत्पादन — चाहे काम ₹500 का हो या ₹50,000 का।",
      p3: "बिना समझौते के तेज़ डिलीवरी — 38 साल में यही हमारी पहचान बनी। ज़्यादातर ऑर्डर तय तारीख से पहले पहुंचते हैं।",
      stat_gen: "व्यवसायों की सेवा",
      stat_rev: "समीक्षाएं · 4.9★",
      stat_yrs: "बेंगलूरू में वर्ष",
    },
    places: {
      label: "हमारे साइन कहां हैं",
      h2: "एक छोटी दुकान से\nपूरे शहर में।",
      p: "हर साइन एक खास जगह और उद्देश्य के लिए बनाया जाता है। हमारे तीन सबसे आम काम यहाँ देखें।",
    },
    specs: {
      label: "साथ-साथ",
      h2: "विवरण,\nएक नज़र में।",
      feature: "विशेषता",
      yourPick: "आपकी पसंद",
    },
    reviews: {
      label: "हमारे ग्राहकों ने कहा",
      h2: "128 समीक्षाओं में\n4.9 की रेटिंग।",
      google: "गूगल समीक्षाएं",
    },
    contact: {
      label: "स्टूडियो पर आएं",
      h2: "नमूने देखने\nआइए।",
      p: "हमारी वर्कशॉप बेगूर में सोम–शनि, सुबह 10 से रात 8 तक खुली है। मटेरियल सैंपल और काम देखने आएं — या पहले कॉल करें ताकि एंथनी या जैक्सन आपको समय दे सकें।",
      request: "डिज़ाइन अनुरोध",
      book: "विज़िट बुक करें",
      whatsapp: "व्हाट्सऐप",
      address: "पता",
      call: "कॉल",
      hours: "समय",
      payments: "भुगतान",
      openMaps: "मैप खोलें",
      dial: "अभी कॉल करें",
    },
    checkout: {
      ready: "कोट के लिए तैयार · तेज़ डिलीवरी",
      chooseMaterial: "सेवा चुनें",
      selectHint: "↑ ओपर से सेवा चुनें",
      whatsapp: "व्हाट्सऐप",
      request: "अनुरोध",
    },
    inquiry: {
      label: "डिज़ाइन अनुरोध",
      h2: "अपने साइन के बारे में बताएं।",
      sub: "कुछ विवरण साझा करें। हम एक दिन में कॉल करेंगे, डिज़ाइन प्रीव्यू भेजेंगे, और कीमत कन्फ़र्म करेंगे।",
      name: "नाम",
      namePh: "आपका पूरा नाम",
      phone: "फ़ोन",
      email: "ईमेल (वैकल्पिक)",
      material: "सेवा का प्रकार",
      materialPh: "सेवा चुनें",
      brief: "ब्रीफ़ (वैकल्पिक)",
      briefPh: "साइन टेक्स्ट, आकार, स्थान, कोई भी प्राथमिकता…",
      send: "स्टूडियो को भेजें",
      sending: "भेज रहे हैं…",
      reply: "24 घंटों में उत्तर",
      successH2: "आपका अनुरोध मिल गया।",
      successP: "आपके दिए नंबर पर जल्द कॉल करेंगे। 96135 03503 पर व्हाट्सऐप भी कर सकते हैं।",
      close: "बंद करें",
      errRequired: "कृपया नाम और फ़ोन नंबर दें।",
      errGeneric: "अभी भेज नहीं सके। 096135 03503 पर कॉल करें।",
      successToast: "धन्यवाद — एंथोनी या जैक्सन जल्द संपर्क करेंगे।",
    },
    appointment: {
      label: "स्टूडियो विज़िट बुक करें",
      h2: "स्टूडियो पर समय चुनें।",
      sub: "बेगूर का स्टूडियो सोम–शनि, सुबह 10 से रात 8 तक खुला है। दिन और समय चुनें — हम कॉल/व्हाट्सऐप पर कन्फ़र्म करेंगे।",
      name: "नाम",
      phone: "फ़ोन",
      email: "ईमेल (वैकल्पिक)",
      date: "दिनांक",
      slot: "समय",
      purpose: "उद्देश्य",
      purposePh: "कारण चुनें",
      notes: "टिप्पणी (वैकल्पिक)",
      notesPh: "आने से पहले तैयार करने के लिए…",
      submit: "विज़िट पक्की करें",
      sending: "भेज रहे हैं…",
      successH2: "आपकी विज़िट बुक हो गई।",
      successP: "आपके फ़ोन नंबर पर जल्द कन्फ़र्म करेंगे।",
      errRequired: "कृपया नाम, फ़ोन, दिनांक और समय भरें।",
      errSundayClosed: "रविवार बंद है। कृपया दूसरा दिन चुनें।",
      purposes: {
        consult: "डिज़ाइन परामर्श",
        samples: "मेटीरियल नमूने",
        pickup: "पिकअप / डिलीवरी",
        other: "अन्य",
      },
    },
    footer: {
      studio: "स्टूडियो",
      hours: "समय",
      contact: "संपर्क",
      hoursVal: ["सोम – शनि", "सुबह 10 – रात 8", "रविवार · बंद"],
      tag: "बेंगलुरु में निर्मित · 1987 से",
      about:
        "बेगूर, बेंगलूरू का एक साइनेज और विज्ञापन फ़ैब्रिकेशन शॉप। LED साइनबोर्ड, एक्रिलिक अक्षर, फ्लेक्स प्रिंटिंग — 1987 से।",
    },
    admin: {
      title: "स्टूडियो एडमिन",
      sub: "सभी पूछताछ और विज़िट एक जगह।",
      passwordLabel: "एडमिन पासवर्ड",
      signIn: "साइन इन",
      signOut: "साइन आउट",
      tabs: { inquiries: "पूछताछ", appointments: "विज़िट्स" },
      empty: "अभी यहाँ कुछ नहीं है।",
      wrongPwd: "गलत पासवर्ड।",
    },
  },
};

const I18nContext = createContext({
  lang: "en",
  setLang: () => {},
  t: (path) => path,
});

export const I18nProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("stmary_lang") || "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("stmary_lang", lang);
    } catch {}
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (path) => {
    const parts = path.split(".");
    let cur = translations[lang] || translations.en;
    for (const p of parts) {
      if (cur && typeof cur === "object" && p in cur) cur = cur[p];
      else {
        // fallback to english
        let en = translations.en;
        for (const q of parts) {
          if (en && typeof en === "object" && q in en) en = en[q];
          else return path;
        }
        return en;
      }
    }
    return cur;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);

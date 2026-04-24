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
      h1_a: "Name plates,",
      h1_b: "handcrafted",
      h1_c: "for the",
      h1_d: "doorways that matter.",
      sub: "Three generations of metal-work, one quiet studio in Begur. Each plate is cast, cut and finished by hand — then delivered with a rendered preview before a single letter is cut.",
      primary: "Begin a design",
      secondary: "Compare materials",
      badge_materials: "Materials",
      badge_materials_val: "Cast Brass · Hand-finished",
      badge_craft: "Craft",
      badge_craft_val: "Rendered preview before production",
      cap_left: "Studio · Begur, Bengaluru",
      cap_right: "Est. craftsmanship · 3 generations",
    },
    models: {
      label: "Choose your material",
      h2: "Three materials.\nOne quiet doorway ritual.",
      p: "Every plate begins with a conversation. Pick the material that speaks to your space — we render a preview before any metal is cut.",
      selected: "Selected",
      select: "Select",
    },
    philosophy: {
      label: "The studio",
      h2: "We make one plate\nat a time — on purpose.",
      p1: "Anthony began casting name plates in 1987 — slowly, deliberately, a single doorway at a time. Today the studio is run with his son Jackson, but the rhythm hasn't changed: design, review, render, cast, finish, deliver.",
      p2: "Every commission receives a full rendered preview before production. We change a curve, a weight, a corner radius — until it feels inevitable. Only then do we cut metal.",
      p3: "That patience is why most of our work arrives earlier than promised. It's also why a plate we made in 2004 is still weathering beautifully on a Begur doorway today.",
      stat_gen: "Generations",
      stat_rev: "Reviews · 4.9★",
      stat_yrs: "Years of craft",
    },
    places: {
      label: "Where our work lives",
      h2: "From a quiet villa door\nto a lobby at scale.",
      p: "Every plate is commissioned for a specific context. Here's how the same craft reads across three very different doorways.",
    },
    specs: {
      label: "A side-by-side",
      h2: "Specifications,\nread at a glance.",
      feature: "Feature",
      yourPick: "Your pick",
    },
    reviews: {
      label: "Said, on the doorstep",
      h2: "4.9 out of 5,\nacross 128 reviews.",
      google: "Google Reviews",
    },
    contact: {
      label: "Visit the studio",
      h2: "Come look at\nthe samples.",
      p: "We keep a small showroom of finished plates and material samples in Begur. Appointments are gentle — just call ahead so Anthony or Jackson can spend time with you.",
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
      ready: "In studio · Ready to design",
      whatsapp: "WhatsApp",
      request: "Request",
    },
    inquiry: {
      label: "Request a design",
      h2: "Tell us about your doorway.",
      sub: "Share a few details. We'll call within a day, send a rendered preview, and confirm pricing before anything is cast.",
      name: "Name",
      namePh: "Your full name",
      phone: "Phone",
      email: "Email (optional)",
      material: "Material",
      materialPh: "Choose a material",
      brief: "Brief (optional)",
      briefPh: "Names, size, typography preferences, installation notes…",
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
      tag: "Crafted in Bengaluru · Three generations",
      about:
        "A small name-plate studio in Begur, Bengaluru. Brass, bronze and illuminated acrylic — cast, cut and finished by hand.",
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
      h1_a: "ಹೆಸರಿನ ಫಲಕಗಳು,",
      h1_b: "ಕೈಯಿಂದ ಕೆತ್ತಿದ",
      h1_c: "ನಿಮ್ಮ ಮನೆಯ",
      h1_d: "ಪ್ರವೇಶಕ್ಕಾಗಿ.",
      sub: "ಮೂರು ತಲೆಮಾರಿನ ಲೋಹಕೆಲಸ, ಬೇಗೂರಿನ ಒಂದು ಶಾಂತ ಸ್ಟುಡಿಯೋ. ಪ್ರತಿ ಫಲಕವೂ ಕೈಯಲ್ಲಿ ಎರಕಹೊಯ್ದು, ಕತ್ತರಿಸಿ, ಪಾಲಿಶ್ ಮಾಡಲಾಗುತ್ತದೆ — ಅಕ್ಷರ ಕತ್ತರಿಸುವ ಮೊದಲು ರೆಂಡರ್ ನೋಟವನ್ನೇ ಕಳುಹಿಸುತ್ತೇವೆ.",
      primary: "ವಿನ್ಯಾಸ ಆರಂಭಿಸಿ",
      secondary: "ಮೆಟೀರಿಯಲ್ ಹೋಲಿಕೆ",
      badge_materials: "ಮೆಟೀರಿಯಲ್",
      badge_materials_val: "ಎರಕಹೊಯ್ದ ಹಿತ್ತಾಳೆ · ಕೈಯಲ್ಲಿ ಫಿನಿಷ್",
      badge_craft: "ಕೌಶಲ್ಯ",
      badge_craft_val: "ಉತ್ಪಾದನೆಗೆ ಮೊದಲು ರೆಂಡರ್ ನೋಟ",
      cap_left: "ಸ್ಟುಡಿಯೋ · ಬೇಗೂರು, ಬೆಂಗಳೂರು",
      cap_right: "ಮೂರು ತಲೆಮಾರಿನ ಕೌಶಲ್ಯ",
    },
    models: {
      label: "ನಿಮ್ಮ ಮೆಟೀರಿಯಲ್ ಆಯ್ಕೆಮಾಡಿ",
      h2: "ಮೂರು ಮೆಟೀರಿಯಲ್.\nಒಂದು ಶಾಂತ ಸಂಪ್ರದಾಯ.",
      p: "ಪ್ರತಿ ಫಲಕವೂ ಒಂದು ಸಂಭಾಷಣೆಯಿಂದ ಆರಂಭವಾಗುತ್ತದೆ. ನಿಮ್ಮ ಸ್ಥಳಕ್ಕೆ ಹೊಂದುವ ಮೆಟೀರಿಯಲ್ ಆಯ್ಕೆ ಮಾಡಿ — ಮೊದಲೇ ರೆಂಡರ್ ತೋರಿಸುತ್ತೇವೆ.",
      selected: "ಆಯ್ಕೆ",
      select: "ಆಯ್ಕೆ ಮಾಡಿ",
    },
    philosophy: {
      label: "ಸ್ಟುಡಿಯೋ",
      h2: "ಒಂದು ಫಲಕ\nಒಂದೇ ಬಾರಿ — ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ.",
      p1: "ಆಂಥೋನಿ ಅವರು 1987 ರಲ್ಲಿ ಹೆಸರು ಫಲಕ ಎರಕಹೊಯ್ಯುವ ಕೆಲಸ ಆರಂಭಿಸಿದರು — ನಿಧಾನವಾಗಿ, ಒಂದೊಂದಾಗಿ. ಇಂದು ಅವರ ಮಗ ಜಾಕ್ಸನ್ ಜೊತೆಗೆ ಸ್ಟುಡಿಯೋ ನಡೆಸಲಾಗುತ್ತದೆ — ಆದರೆ ಲಯ ಬದಲಾಗಿಲ್ಲ.",
      p2: "ಪ್ರತಿ ಆದೇಶಕ್ಕೆ ಉತ್ಪಾದನೆಗೆ ಮೊದಲು ಪೂರ್ಣ ರೆಂಡರ್ ನೋಟ. ಒಂದು ವಕ್ರ, ಒಂದು ತೂಕ, ಒಂದು ಕಾರ್ನರ್ ರೇಡಿಯಸ್ — ಸರಿಯಾಗುವವರೆಗೆ ಬದಲಿಸುತ್ತೇವೆ. ನಂತರವೇ ಲೋಹ ಕತ್ತರಿಸುತ್ತೇವೆ.",
      p3: "ಈ ತಾಳ್ಮೆಯಿಂದಾಗಿಯೇ ನಮ್ಮ ಹೆಚ್ಚಿನ ಕೆಲಸ ಭರವಸೆಗಿಂತ ಮೊದಲೇ ತಲುಪುತ್ತದೆ. 2004 ರಲ್ಲಿ ಮಾಡಿದ ಫಲಕವೂ ಇಂದಿಗೂ ಬೇಗೂರಿನ ಒಂದು ಬಾಗಿಲಲ್ಲಿ ಸುಂದರವಾಗಿ ಕಾಣುತ್ತಿದೆ.",
      stat_gen: "ತಲೆಮಾರುಗಳು",
      stat_rev: "ವಿಮರ್ಶೆಗಳು · 4.9★",
      stat_yrs: "ವರ್ಷಗಳ ಕಲೆ",
    },
    places: {
      label: "ನಮ್ಮ ಕೆಲಸ ಇರುವೆಡೆ",
      h2: "ಒಂದು ಶಾಂತ ಮನೆಯ ಬಾಗಿಲಿನಿಂದ\nದೊಡ್ಡ ಲಾಬಿಯವರೆಗೆ.",
      p: "ಪ್ರತಿ ಫಲಕವೂ ಒಂದು ನಿರ್ದಿಷ್ಟ ಸಂದರ್ಭಕ್ಕೆ. ಇಲ್ಲಿ ಒಂದೇ ಕಲೆ ಮೂರು ಬಾಗಿಲುಗಳಲ್ಲಿ ಹೇಗೆ ಕಾಣುತ್ತದೆ ಎಂಬುದನ್ನು ನೋಡಿ.",
    },
    specs: {
      label: "ಹೋಲಿಕೆ",
      h2: "ವಿವರಣೆಗಳು,\nಒಂದೇ ನೋಟದಲ್ಲಿ.",
      feature: "ವೈಶಿಷ್ಟ್ಯ",
      yourPick: "ನಿಮ್ಮ ಆಯ್ಕೆ",
    },
    reviews: {
      label: "ಬಾಗಿಲಲ್ಲಿ ಹೇಳಿದ್ದು",
      h2: "128 ವಿಮರ್ಶೆಗಳಲ್ಲಿ\n4.9 ರೇಟಿಂಗ್.",
      google: "ಗೂಗಲ್ ವಿಮರ್ಶೆಗಳು",
    },
    contact: {
      label: "ಸ್ಟುಡಿಯೋ ಭೇಟಿ",
      h2: "ಮಾದರಿಗಳನ್ನು\nನೋಡಲು ಬನ್ನಿ.",
      p: "ಬೇಗೂರಿನಲ್ಲಿ ನಮ್ಮ ಸಣ್ಣ ಶೋರೂಮ್ ಇದೆ. ಕೇವಲ ಕರೆ ಮಾಡಿ — ಆಂಥೋನಿ ಅಥವಾ ಜಾಕ್ಸನ್ ನಿಮಗೆ ಸಮಯ ಕೊಡುತ್ತಾರೆ.",
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
      ready: "ಸ್ಟುಡಿಯೋದಲ್ಲಿ · ವಿನ್ಯಾಸಕ್ಕೆ ಸಿದ್ಧ",
      whatsapp: "ವಾಟ್ಸ್‌ಆಪ್",
      request: "ಕೋರಿ",
    },
    inquiry: {
      label: "ವಿನ್ಯಾಸ ಕೋರಿ",
      h2: "ನಿಮ್ಮ ಬಾಗಿಲ ಕುರಿತು ಹೇಳಿ.",
      sub: "ಕೆಲವು ವಿವರಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ. ನಾವು ಒಂದು ದಿನದಲ್ಲಿ ಕರೆ ಮಾಡಿ, ರೆಂಡರ್ ಕಳುಹಿಸಿ, ಬೆಲೆ ದೃಢೀಕರಿಸುತ್ತೇವೆ.",
      name: "ಹೆಸರು",
      namePh: "ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರು",
      phone: "ಫೋನ್",
      email: "ಇಮೇಲ್ (ಐಚ್ಛಿಕ)",
      material: "ಮೆಟೀರಿಯಲ್",
      materialPh: "ಮೆಟೀರಿಯಲ್ ಆಯ್ಕೆಮಾಡಿ",
      brief: "ವಿವರ (ಐಚ್ಛಿಕ)",
      briefPh: "ಹೆಸರುಗಳು, ಗಾತ್ರ, ಫಾಂಟ್, ಸ್ಥಾಪನೆ ಟಿಪ್ಪಣಿಗಳು…",
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
      tag: "ಬೆಂಗಳೂರಿನಲ್ಲಿ ಕೈಗೆಲಸ · ಮೂರು ತಲೆಮಾರು",
      about:
        "ಬೇಗೂರಿನಲ್ಲಿ ಒಂದು ಸಣ್ಣ ಹೆಸರು-ಫಲಕ ಸ್ಟುಡಿಯೋ. ಹಿತ್ತಾಳೆ, ಕಂಚು ಮತ್ತು ಪ್ರಕಾಶಮಾನ ಆಕ್ರಿಲಿಕ್ — ಎಲ್ಲವೂ ಕೈಯಲ್ಲಿ.",
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
      h1_a: "नाम पट्टिकाएं,",
      h1_b: "हस्तनिर्मित",
      h1_c: "उन द्वारों के लिए",
      h1_d: "जो मायने रखते हैं।",
      sub: "तीन पीढ़ियों का धातु-कार्य, बेगूर का एक शांत स्टूडियो। हर पट्टिका हाथों से ढाली, काटी और पॉलिश की जाती है — अक्षर काटने से पहले रेंडर्ड प्रीव्यू भेजा जाता है।",
      primary: "डिज़ाइन शुरू करें",
      secondary: "मेटीरियल तुलना",
      badge_materials: "मेटीरियल",
      badge_materials_val: "ढला पीतल · हस्त-परिष्कृत",
      badge_craft: "शिल्प",
      badge_craft_val: "उत्पादन से पहले रेंडर्ड प्रीव्यू",
      cap_left: "स्टूडियो · बेगूर, बेंगलुरु",
      cap_right: "तीन पीढ़ियों का शिल्प",
    },
    models: {
      label: "अपना मेटीरियल चुनें",
      h2: "तीन मेटीरियल।\nएक शांत द्वार परंपरा।",
      p: "हर पट्टिका एक बातचीत से शुरू होती है। अपनी जगह से मेल खाता मेटीरियल चुनें — धातु काटने से पहले हम रेंडर दिखाते हैं।",
      selected: "चयनित",
      select: "चुनें",
    },
    philosophy: {
      label: "स्टूडियो",
      h2: "एक पट्टिका\nएक बार में — जानबूझकर।",
      p1: "एंथोनी ने 1987 में नाम पट्टिका ढालना शुरू किया — धीरे-धीरे, एक द्वार एक समय। आज वे अपने बेटे जैक्सन के साथ स्टूडियो चलाते हैं, पर लय वही है।",
      p2: "हर ऑर्डर को उत्पादन से पहले पूरा रेंडर्ड प्रीव्यू मिलता है। एक वक्र, एक वज़न, एक कोना — जब तक यह सही न लगे हम बदलते हैं। तभी धातु काटते हैं।",
      p3: "यही धैर्य है कि हमारा अधिकांश काम वादे से पहले पहुंचता है। और यही कारण है कि 2004 की बनी पट्टिका आज भी बेगूर के एक द्वार पर सुंदर दिखती है।",
      stat_gen: "पीढ़ियां",
      stat_rev: "समीक्षाएं · 4.9★",
      stat_yrs: "शिल्प के वर्ष",
    },
    places: {
      label: "हमारा काम कहां रहता है",
      h2: "एक शांत विला द्वार से\nएक बड़ी लॉबी तक।",
      p: "हर पट्टिका एक विशेष संदर्भ के लिए बनी है। देखें एक ही शिल्प तीन अलग द्वारों पर कैसे पढ़ा जाता है।",
    },
    specs: {
      label: "साथ-साथ",
      h2: "विवरण,\nएक नज़र में।",
      feature: "विशेषता",
      yourPick: "आपकी पसंद",
    },
    reviews: {
      label: "द्वार पर कहा गया",
      h2: "128 समीक्षाओं में\n4.9 की रेटिंग।",
      google: "गूगल समीक्षाएं",
    },
    contact: {
      label: "स्टूडियो पर आएं",
      h2: "नमूने देखने\nआइए।",
      p: "बेगूर में हमारा छोटा शोरूम है। बस एक कॉल — एंथोनी या जैक्सन आपके साथ समय बिताएंगे।",
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
      ready: "स्टूडियो में · डिज़ाइन के लिए तैयार",
      whatsapp: "व्हाट्सऐप",
      request: "अनुरोध",
    },
    inquiry: {
      label: "डिज़ाइन अनुरोध",
      h2: "अपने द्वार के बारे में बताएं।",
      sub: "कुछ विवरण साझा करें। हम एक दिन में कॉल करेंगे, रेंडर भेजेंगे, और कीमत कन्फ़र्म करेंगे।",
      name: "नाम",
      namePh: "आपका पूरा नाम",
      phone: "फ़ोन",
      email: "ईमेल (वैकल्पिक)",
      material: "मेटीरियल",
      materialPh: "मेटीरियल चुनें",
      brief: "ब्रीफ़ (वैकल्पिक)",
      briefPh: "नाम, आकार, टाइपोग्राफी, इंस्टॉलेशन नोट्स…",
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
      tag: "बेंगलुरु में हस्तनिर्मित · तीन पीढ़ियां",
      about:
        "बेगूर का एक छोटा नाम-पट्टिका स्टूडियो। पीतल, कांस्य और रोशन एक्रिलिक — सब कुछ हाथों से।",
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

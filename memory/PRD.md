# St Mary Arts — Landing Site · PRD

## Problem Statement
Build a premium 'Showroom' landing page for St Mary Arts — a sign & name-plate shop in Begur, Bengaluru (4.9/5, 128 reviews). Phone 096135 03503. Run by Anthony and his son Jackson. Products: brass / bronze / acrylic-LED name plates. Design: Premium Material-Minimalism with Cabinet Grotesk + Satoshi, stone-tone palette (#FAF7F5, #1C1917) with warm wood and aluminum accents.

## User Persona
- Bengaluru homeowners / architects / office managers looking for high-quality custom name plates.
- Values: craftsmanship, rendered preview before production, quiet confidence.

## Architecture
- FastAPI (`/app/backend/server.py`) exposing:
  - `GET /api/` — health
  - `POST /api/inquiries` — create inquiry (name, phone, email?, model, message?)
  - `GET /api/inquiries` — list inquiries (MongoDB, `inquiries` collection, no `_id` returned)
  - (legacy `/api/status` kept)
- React SPA (`/app/frontend/src/App.js`) — single landing page, state lifted in `Home`.
- MongoDB collections: `inquiries`, `status_checks`.
- No auth. No paid integrations.

## What's been implemented (Dec 2025)
- Sticky Header with logo, nav, search, cart dot, CTA — `StickyHeader.jsx`
- Product Theater Hero with radial gradient, 21:9 image, floating MATERIALS badges — `HeroTheater.jsx`
- Interactive 3-card Model Selection (Brass / Bronze / Acrylic-LED) with active state — `ModelSelection.jsx`
- Editorial Philosophy split layout with staggered 4-image grayscale→color grid — `EditorialPhilosophy.jsx`
- Feature Walkthrough (dark #1C1917 section, 3 use cases: Home/Apartment/Office) — `FeatureWalkthrough.jsx`
- Specification Table with horizontal-only dividers, featured column highlighted by selection — `SpecTable.jsx`
- Customer Reviews (4.9/5 · 128 reviews) — `Reviews.jsx`
- Contact/Visit block with address, phone, hours, payment, map & WhatsApp links — `ContactBlock.jsx`
- Sticky Checkout Bar floating at bottom, updates with selection — `StickyCheckoutBar.jsx`
- Inquiry Dialog using shadcn Dialog/Input/Select/Textarea + sonner toast, POSTs to `/api/inquiries` — `InquiryDialog.jsx`
- Footer with studio / hours / contact — `Footer.jsx`
- Fonts: Cabinet Grotesk + Satoshi via Fontshare.
- Test report: iteration_1 · 100% backend + 100% frontend.

## P0 / P1 / P2 Backlog
- P1: Admin dashboard to view submitted inquiries (behind simple auth).
- P1: Email/WhatsApp notification on new inquiry (e.g., Resend / Twilio).
- P1: Gallery page showing real past-work photographs (currently stock imagery).
- P2: Multi-language (Kannada / Hindi) toggle.
- P2: Lazy-load imagery + open-graph social cards.
- P2: Appointment scheduler (pick a slot) integrated with Google Calendar.

## Next Action Items
- Share real product photography to replace the curated stock imagery.
- Decide on notification channel for new inquiries (WhatsApp / email / both).

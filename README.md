# MAQAM — Skills into Opportunities

A responsive bilingual (English/Arabic) static marketplace concept demo.

## Features
- Responsive homepage and marketplace service cards
- English/Arabic language toggle with LTR/RTL layout
- Search, category filters, and sorting
- Service details and a demo request flow
- Sample points wallet and activity preview
- Demo offer preview form
- Light/dark theme toggle

## Run locally
Open `index.html` in a browser. No Node.js, database, or build step is required.

## Deploy to Vercel
Import this repository in Vercel. Use the repository root as the project root, choose **Other** as the framework preset if prompted, and leave the build command and output directory empty for a static site. Deploy.

## Important
This repository currently hosts a front-end demonstration. Wallet balances, requests, provider profiles, and offers are sample data held in the browser session and are not backed by a server or database. Do not use it for real transactions or sensitive personal data. The complete Next.js/NestJS application is a separate project and needs its own backend/database deployment before it can be treated as a production marketplace.

## Real accounts and database setup (in progress)

A separate branch, `feature/real-auth-database`, adds the first Supabase integration foundation:
- Email/password sign-up, sign-in and sign-out UI.
- Supabase configuration template using only a browser-safe publishable/anon key.
- Initial SQL schema for profiles, services, service requests and wallet ledger, with Row Level Security policies.
- Setup and security checklist in [SUPABASE_SETUP.md](SUPABASE_SETUP.md).

**This does not mean the full marketplace is production-ready yet.** The current marketplace cards, wallet totals and request flow in `script.js` still use demo data. Configure Supabase and complete persistent service/request integration, server-side escrow operations, and end-to-end testing before inviting real users. Never add a Supabase `service_role` key or database password to frontend files.

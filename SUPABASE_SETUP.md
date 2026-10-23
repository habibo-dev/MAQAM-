# MAQAM: connect real accounts and database

This branch prepares the static Vercel site for Supabase authentication and a persistent data layer. The existing site is a front-end demo; creating these files does not automatically connect a database or turn demo wallet values into real balances.

## 1. Create a Supabase project
1. Open https://supabase.com/dashboard and create a project.
2. Save the database password in your password manager. Do not put it in GitHub or the browser.
3. In Project Settings → API, copy the Project URL and the **publishable key** (or legacy anon/public key).
4. Edit `supabase-config.js` and replace the two placeholders. These two values are intended for browser use. Never use the `service_role` key in the website.

## 2. Create the database tables
1. Open Supabase → SQL Editor → New query.
2. Review `supabase/schema.sql`, then run it in this new project.
3. This schema creates profiles, services, service requests and a wallet ledger with Row Level Security (RLS).
4. It deliberately does not issue fake points or permit users to write directly to the wallet ledger. Real escrow transfers require trusted server-side RPCs with atomic balance checks and idempotency.

Do not run this initial schema blindly against an existing production database. Review it first and back up existing data.

## 3. Configure authentication
In Supabase → Authentication → URL Configuration:
- Set Site URL to your Vercel domain, e.g. `https://maqam-demo.vercel.app`.
- Add that domain to Redirect URLs.
- Configure email confirmation and password rules for your launch.

## 4. Deploy
Commit `supabase-config.js` with the public URL and publishable/anon key, then push to GitHub. Vercel should redeploy from the connected repository. If the site is protected by Vercel Deployment Protection, update that setting before sharing the link.

## 5. What must be tested before launch
- Sign up, email confirmation, sign in, sign out, session restore and password reset.
- RLS: a user must not edit another user's profile, service, request or wallet.
- Service creation, discovery and request workflow using real rows.
- Atomic escrow hold/release/refund implemented server-side, with duplicate-request and race-condition tests.
- Responsive UI, Arabic RTL, errors, empty states and network failure.

## Important current limitation
The current `index.html` + `script.js` still contains sample services, sample points, and a client-only demo request flow. Do not present those as real transactions. The SQL schema is a secure starting point, not proof that the front end is already integrated. Complete the frontend integration and tests before treating MAQAM as a real marketplace.

# AI/ML Engineer Portfolio

A recruiter-first, ATS-friendly portfolio built with Next.js 14 (App Router),
TypeScript, Tailwind CSS, and Framer Motion.

## What's built vs. what needs wiring

Everything visual and structural is done and production-ready: responsive
layout, dark/light mode, animations, project detail pages, filtering/search,
recruiter dashboard, resume viewer, and a FAQ chatbot. A few features touch
external services and need a couple of your own values plugged in:

| Feature | Status | To activate |
|---|---|---|
| GitHub stats | Live, works out of the box | Set `NEXT_PUBLIC_GITHUB_USERNAME` in `.env` |
| LeetCode stats | Live via public community API | Set `NEXT_PUBLIC_LEETCODE_USERNAME`; falls back to a link if the API is down |
| Kaggle stats | Static (no public stats API exists) | Edit numbers directly in `components/KaggleStats.tsx` |
| Contact form | UI + validation done, delivery not wired | Pick Resend, Formspree, or Supabase — see `app/api/contact/route.ts` |
| Resume download counter | Per-browser only (localStorage) | Wire `app/api/track/route.ts` to Supabase for a real cross-visitor count |
| AI chatbot | Rule-based FAQ bot, no API cost | Optional: replace `answerFor()` in `components/Chatbot.tsx` with a call to your own backend/LLM |
| Multilingual support | Not implemented | Add `next-intl` or similar if needed |

## Getting started

```bash
npm install
cp .env.example .env   # then fill in the values you want to use
npm run dev
```

Open http://localhost:3000.

## Personalizing the site

**Almost everything lives in one file: `lib/data.ts`.** Edit your name, bio,
skills, projects, experience, education, certifications, achievements,
testimonials, and blog posts there — the whole site re-renders from it.

Then drop your real files into `/public` (see `public/PLACEHOLDERS.md` for
the full list): profile photo, resume PDF, project screenshots, certificate
images, and an Open Graph image.

## Design tokens

Colors, fonts, and spacing live in `tailwind.config.ts`. The palette is white
/ dark navy with a blue-to-violet gradient accent, set as CSS-friendly
Tailwind tokens (`ink`, `navy`, `accent`, `accent2`, `signal`, `paper`) so you
can retheme by changing a handful of hex values in one place.

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Import it in Vercel.
3. Add the environment variables from `.env.example` in the Vercel project
   settings.
4. Deploy. Update `siteUrl` in `app/layout.tsx` and the `base` URL in
   `app/sitemap.ts` / `app/robots.ts` to your real domain afterward.

## Notes on things you'll want to double check

- The contact form currently logs submissions server-side and returns
  success — it does **not** send you an email until you wire up a provider.
- The resume download counter and visitor counter are local/demo only. For
  numbers that persist across visitors, add a Supabase table and read/write
  to it from `app/api/track/route.ts`.
- `app/projects/[slug]/page.tsx` uses `generateStaticParams`, so all project
  pages are statically generated at build time — add a new project by adding
  one object to the `projects` array in `lib/data.ts`.

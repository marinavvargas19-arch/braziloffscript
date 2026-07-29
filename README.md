# Brazil Off Script — Next.js codebase

Tailor-made Brazil tour operator site. Built with **Next.js 15 (App Router) · React 18 · Tailwind CSS · shadcn-style components · lucide-react icons**.

---

## 1. Local setup (5 minutes)

You need [Node.js 18.18 or newer](https://nodejs.org). Then in this folder:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Hot reload works as you edit.

Production build:

```bash
npm run build
npm start
```

---

## 2. Project structure

```
app/
  layout.jsx          ← root layout (fonts, header, footer, WA button)
  page.jsx            ← homepage
  globals.css         ← Tailwind + base styles
  about/              ← /about
  blog/               ← /blog and /blog/[slug]
  contact/            ← /contact
  destinations/[slug] ← /destinations/rio etc.
  faq/                ← /faq
  how-it-works/       ← /how-it-works
  journeys/           ← /journeys and /journeys/[category]
  quiz/               ← /quiz
  tours/              ← /tours and /tours/[slug]
  api/contact/route.js← POST endpoint for the contact form
components/
  ui/                 ← shadcn-style primitives (Button, Card, Badge, Avatar, Field, Accordion, Section)
  layout/             ← TopBar, Header, Footer, WhatsAppFab, NewsletterBand
  *-client.jsx        ← interactive page bodies (quiz, tours filter, contact form, etc.)
lib/
  data.js             ← all site content (categories, tours, destinations, experts, FAQs, blog posts, quiz)
  utils.js            ← cn() helper
public/
  logo.png            ← the Brazil Off Script logo
```

**To change content** (tours, destinations, FAQ, blog posts, experts, quiz questions), edit `lib/data.js`. Everything else reads from there.

---

## 3. Deploy to Vercel (production)

### One-time setup

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial Brazil Off Script site"
   gh repo create brazil-off-script --private --source=. --push
   ```
   (Or create the repo manually on github.com and push.)

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com) → "Add New… → Project"
   - Import your `brazil-off-script` repo
   - Click **Deploy** — defaults are correct
   - You'll get a URL like `brazil-off-script.vercel.app` in ~60 seconds

3. **Connect your domain `braziloffscript.com`**
   - In Vercel project → **Settings → Domains** → add `braziloffscript.com` and `www.braziloffscript.com`
   - Vercel shows the DNS records you need (one `A` record for the root, one `CNAME` for `www`)
   - Go to your domain provider (Google Domains → now Squarespace Domains): edit DNS, paste the records Vercel showed you
   - SSL is automatic. Propagation usually finishes in 5–60 minutes.

### Subsequent deploys

Every `git push` to `main` auto-deploys. That's the whole workflow.

---

## 4. Wiring up the contact form

By default, the contact form POSTs to `/api/contact` and just logs to the server console. To actually receive emails:

1. Sign up at [resend.com](https://resend.com) (free tier: 100 emails/day)
2. Verify the domain `braziloffscript.com` in Resend
3. Get an API key
4. In Vercel → **Settings → Environment Variables**, add:
   - `RESEND_API_KEY` = your key
   - `CONTACT_TO_EMAIL` = `hello@braziloffscript.com`
5. Redeploy

Logic lives in `app/api/contact/route.js` — edit there to change subject lines or routing.

---

## 5. Lead dashboard

The site can also save every contact or quiz submission into Supabase and show it in a private dashboard at `/admin/leads`.

In Vercel → **Settings → Environment Variables**, add:

- `ADMIN_PASSWORD` = password for `/admin/login`
- `ADMIN_SESSION_SECRET` = any long random string
- `SUPABASE_URL` = your Supabase project URL
- `SUPABASE_SERVICE_ROLE_KEY` = Supabase service role key, server-side only
- `SUPABASE_LEADS_TABLE` = `leads` (optional; this is the default)

Create this table in Supabase SQL editor:

```sql
create table public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  source text,
  name text,
  email text,
  phone text,
  contact_method text,
  note text,
  profile_match text,
  profile_runner_up text,
  profile_answers jsonb not null default '[]'::jsonb,
  quiz_answers jsonb not null default '[]'::jsonb,
  matched_tours jsonb not null default '[]'::jsonb,
  payload jsonb not null default '{}'::jsonb
);
```

Do not expose the service role key in the browser. It is only used by server routes and server-rendered admin pages.

---

## 6. Editing common things

| Want to change… | Edit this file |
|---|---|
| Add/edit a tour | `lib/data.js` → `TOURS` array |
| Add/edit a destination | `lib/data.js` → `DESTINATIONS` + `DESTINATION_HIGHLIGHTS` |
| Quiz questions | `lib/data.js` → `QUIZ_STEPS` |
| Blog posts | `lib/data.js` → `BLOG_POSTS` (post body in `app/blog/[slug]/page.jsx`) |
| FAQ | `lib/data.js` → `FAQS` |
| Brand contact info | `lib/data.js` → `SITE` |
| Colors | `tailwind.config.js` |
| Header navigation | `components/layout/header.jsx` → `NAV` array |
| Footer | `components/layout/footer.jsx` |

---

## 7. Replacing placeholder photos

Most photos are placeholder Unsplash URLs in `lib/data.js`. When you have real photos:

1. Drop them in `public/photos/` (e.g. `public/photos/rio-1.jpg`)
2. In `lib/data.js`, replace the Unsplash URLs with `/photos/rio-1.jpg`
3. Commit + push — auto-deploys

---

## 7. Common questions

**Q: How do I add a new page (e.g. `/sustainability`)?**
Create `app/sustainability/page.jsx` and export a default React component. That URL now exists.

**Q: How do I add a new section to an existing page?**
Open the page file and paste new JSX. Use the existing `<Container>` and styling tokens to stay consistent.

**Q: Where do I add tracking (Google Analytics, Meta Pixel)?**
Inject the script in `app/layout.jsx` inside `<head>` or via `next/script`. There are guides at vercel.com/docs.

**Q: I broke something.**
Roll back in Vercel → Deployments → click an older one → "Promote to Production". Zero downtime.

---

Built with care. Off script, on purpose. 🌿

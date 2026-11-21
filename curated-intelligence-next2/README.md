# Curated Intelligence

A Next.js App Router publication, ready to deploy on Vercel. Includes the home page, Issue 001, archive, about and privacy pages.

## Run locally

Use Node.js 20.9 or later (Node 22 LTS recommended):

```sh
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run build` to check a production build and `npm start` to serve it.

## Deploy to Vercel

Import this directory as a Git repository (or set it as the project root in a monorepo). Vercel detects Next.js; use the default build settings. Deploy to the included vercel.app address; no domain purchase is necessary. For the newsletter, add `BUTTONDOWN_API_KEY` as a server-side environment variable in Vercel project settings, then redeploy. Set it separately for each environment where signup should work. Never use a `NEXT_PUBLIC_` prefix or commit the key. For local development, copy `.env.example` to `.env.local` and fill in the key, then restart the server.

Without a key, the site displays an honest unavailable state and the API returns 503. With a key, the form posts to the server route, which sends the address to Buttondown. Confirm Buttondown's account, confirmation, unsubscribe, and sender settings, test with a real address, and review the privacy notice and add an operator contact before accepting subscriptions. The implementation does not send newsletters itself. Provider errors are reported generically; no success is shown on failure. Configure appropriate spam protection and rate limits for public launch; Buttondown also applies its own limits.

## Content

Issue 001 links to its five original sources. Source summaries and editorial synthesis are explicitly separated. Edit the corresponding `app` pages and `app/globals.css` to update the publication.

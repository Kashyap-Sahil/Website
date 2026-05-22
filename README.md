# Personal Portfolio

Next.js 14 + Tailwind CSS. Editorial layout, restrained palette.

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Editing content

All copy lives in `content/site.ts` — name, role, bio, projects, links.

## Deploy on Vercel

1. Push this repo to GitHub.
2. In Vercel, click **Add New… → Project** and import the repo.
3. Vercel auto-detects Next.js. No env vars or build settings to change — accept defaults and deploy.
4. Subsequent pushes to the default branch deploy automatically.

Or via CLI:

```bash
npm i -g vercel
vercel
```

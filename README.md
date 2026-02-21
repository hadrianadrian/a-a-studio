a+a studio — Vite + React + Tailwind

Local dev

1. From the project folder run:

```
npm install
npm run dev
```

2. Open the local dev URL printed by Vite (usually http://localhost:5173)

Build

```
npm run build
npm run preview
```

Deploy

- Create a GitHub repo and push this folder, then import the repo into Vercel (https://vercel.com/import).
- Or use the Vercel CLI:

```
npm i -g vercel
vercel login
vercel --prod
```

Notes

- This project uses TailwindCSS. If you modify styles, re-run the dev server.
- The demo contact form is client-only; wire to a backend or Vercel function for real submissions.

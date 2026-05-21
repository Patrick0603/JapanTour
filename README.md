# Japan Tour

Luxury Japan travel landing page built with React, Vite, Tailwind CSS, and Framer Motion.

## Project structure

```
JapanTour/
├── public/          # Static assets (images, fonts)
├── src/
│   ├── components/
│   ├── sections/
│   ├── pages/
│   └── main.tsx
├── index.html
├── package.json
├── vite.config.ts
└── vercel.json
```

## Local developmenta

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run preview
```

## Deploy on Vercel

1. Push this repository to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Use these settings (auto-detected for Vite):
   - **Framework Preset:** Vite
   - **Root Directory:** `.` (repository root)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Deploy.

No environment variables are required for the static site.

# Azaruddin Khan — Personal Developer Portfolio

A personal developer portfolio website for **Azaruddin Khan**, Flutter Mobile App Developer with 3+ years of experience building production mobile applications with over 1M+ downloads on Google Play.

## Tech Stack
- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (subtle transitions & micro-interactions)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Static HTML Export (`output: 'export'`), ready for Vercel, Netlify, or GitHub Pages

---

## Features
- **Modern Dark & Light Theme**: Dark theme by default with persistent toggle and no flash of unstyled content.
- **Accurate & Factual**: Grounded strictly in verified projects and skills (no invented awards or metrics).
- **Single Source of Truth**: All text, projects, and contact information live in `/src/data/content.ts` (also symlinked at `/data/content.ts` for quick editing).
- **Interactive Device Mockup**: Clean mobile phone frame designed to show screenshots from `/public/screenshots/` (falls back to a sleek neutral gradient frame).
- **Accessible & High-Contrast**: Semantic HTML5 landmark tags (`header`, `main`, `section`, `footer`), keyboard navigation focus rings, and WCAG compliant colors.
- **Full SEO & Open Graph**: Integrated Open Graph meta tags, Twitter card, dynamic `sitemap.xml`, `robots.txt`, and structured `Person` JSON-LD schema (without exposing sensitive personal numbers).

---

## Getting Started

### 1. Prerequisites
- **Node.js**: v18.17+ or v20+
- **npm** (or yarn / pnpm)

### 2. Installation
```bash
# Clone the repository and navigate into the project directory
cd azaruddin-portfolio

# Install dependencies
npm install
```

### 3. Running Locally
Start the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Customization

### Adding Screenshots to the Phone Mockup
1. Place your mobile app screenshots (e.g. `balaji-astro.png`) in the `public/screenshots/` directory.
2. Open `src/data/content.ts`.
3. Update `hero.phoneScreenshot`:
   ```ts
   phoneScreenshot: "/screenshots/balaji-astro.png",
   ```

### Replacing Resume
Replace the placeholder `public/resume.pdf` with your actual resume PDF file:
```bash
cp /path/to/your/actual-resume.pdf public/resume.pdf
```

### Updating Content & Links
All portfolio data is centralized in:
- `src/data/content.ts` (or `data/content.ts`)

---

## Building & Deploying to Vercel

### Option A: Deploy via Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option B: Deploy via Vercel Web Dashboard / Git
1. Push this repository to GitHub or GitLab.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import the repository. Next.js will be detected automatically.
4. Click **Deploy**.

### Building Static Files Locally
```bash
npm run build
```
The static export will be generated in the `out/` folder, which can also be hosted on any static web host, S3, or Cloudflare Pages.

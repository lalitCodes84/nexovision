# NexoVision — Next.js App Router

Premium web app development & digital solutions agency site.

## Stack
Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · MongoDB · Nodemailer · Zod · React Hook Form

## Setup
```bash
cp .env.example .env.local
npm install
npm run dev
```

Open http://localhost:3000

## Scripts
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm start` — start production server

## API
- `POST /api/contact` — submits a lead (saves to MongoDB + emails sales).
- `GET  /api/inquiries` — list inquiries. Requires `Authorization: Bearer $ADMIN_TOKEN`.

## Project Structure
```
app/
  layout.tsx
  page.tsx
  globals.css
  api/contact/route.ts
  api/inquiries/route.ts
components/
  layout/Navbar.tsx
  layout/Footer.tsx
  sections/HeroSection.tsx
  sections/ServicesSection.tsx
  sections/PortfolioSection.tsx
  sections/AboutSection.tsx
  sections/TestimonialsSection.tsx
  sections/ContactSection.tsx
  WhatsAppButton.tsx
lib/
  mongodb.ts
  email.ts
  utils.ts
types/inquiry.ts
validations/contactSchema.ts
constants/{services,testimonials,portfolio,stats}.ts
```

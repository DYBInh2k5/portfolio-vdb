# Portfolio SaaS Framework Evolution Plan

This document outlines the roadmap to transform this static portfolio into a dynamic SaaS platform for selling digital projects.

---

### Phase 1: Foundation & Modernization - **COMPLETED** ✅
- [x] Initialize Next.js 16 (App Router) project with TypeScript and Tailwind CSS.
- [x] Migrate static HTML/CSS structure to modular React components.
- [x] Implement "Royal Tech" theme (Glassmorphism, Dark Mode, Indigo accent).
- [x] Add real-time clock, typewriter effect, and scroll-reveal animations.

---

### Phase 2: Backend & Database (Supabase) - **IN PROGRESS** 🏗️
- **Project Setup**: Link the Next.js app to Supabase (Environment variables).
- **Database Schema**:
  - `projects`: id, title, description, price, image_url, download_url, tags.
  - `orders`: id, user_id, project_id, status (pending/completed), payment_intent_id.
  - `profiles`: id, full_name, avatar_url, role (admin/user).
- **Authentication**: Set up Magic Link or Social Auth (Google).
- **API Routes**: Create server actions for fetching projects and handling contact form submissions.

---

### Phase 3: Payment Integration (Stripe) 💳
- [ ] Set up Stripe products/prices.
- [ ] Implement checkout sessions using Stripe SDK.
- [ ] Create webhook handlers for automated project delivery after payment.

---

### Phase 4: Email & Deployment (Resend & Vercel) 🚀
- [ ] Integrate Resend for sending purchase receipts and contact notifications.
- [ ] Connect GitHub repo and deploy to Vercel with automatic CI/CD.
- [ ] Final SEO optimization and performance audit.

# Legacy KLFPRO site — full inspection (A–Z)

Purpose: preserve **100% business copy, structure, forms, integrations, and behaviour** when rebuilding UI in Next.js (new visual design allowed).

There are **two styling systems**:

1. **`index.html` + most `pages/*.html`** — self-contained: huge `<style>` blocks, Font Awesome CDN, page-specific inline scripts.
2. **`pages/apply-job.html`** — uses shared **`css/style.css`** + **`js/main.js`** (different nav markup; links to `partners.html` which does not exist in repo).

---

## 1. `index.html` (home)

### Head / SEO / analytics

- Title: `KLFPRO Consulting • Loan & Financial Services`
- Meta description + keywords (loan types, MSME, consulting).
- Open Graph: title, description, `og:image` `https://klfpro.in/assets/klfpro.JPG`, `og:url` `https://klfpro.in`
- Favicon: `/favicon.ico`
- **Google Ads gtag:** `AW-17723359083`
- **Google Analytics gtag:** `G-JJY1EXQSY6`
- CDNs: Font Awesome, jsPDF + autotable (PDF export for calculator path)

### Global look (inline CSS)

- Body: cream `#fff8f0`, accent `#f59e0b` / `#fbbf24`, dark footer `#1a1a1a`
- Sticky nav, hamburger mobile, CTA gradient buttons

### Main sections (IDs for anchors)

| Section | ID / class | Notes |
|--------|------------|--------|
| Nav | `#nav` | Logo `assets/klflogos-removebg-preview.png`, links: Services, Bank Partners, How It Works, Careers, Testimonials, Contact, Apply |
| News ticker | `.news-ticker` / `#ticker-content` | Filled by JS (RSS / loan news logic) |
| EMI floater | `#emi-calculator-icon` | Opens modal |
| AI assistant | `#ai-assistant-icon`, `#ai-assistant-modal` | Chat UI, bank rates grid, employee cards, quick questions, large JS context |
| Hero | `.hero` | H1: “Simplifying Loan Access Between Banks & Customers”, CTA → `pages/apply.html` |
| Services | `#services` | Loan cards: Home, Business, Personal, LAP, Car, MSME, Virtual Unit, Commercial property, Loan Against Industrial Property (mixed Unsplash + `assets/images/*`) |
| EMI / eligibility modal | `#emi-calculator-modal` | Sliders: net salary, FOIR %, CIBIL, existing EMI, interest %, tenure; “Check Eligibility”, amortization table, PDF download, reset |
| Partners | `#partners` | Logos: `assets/BANK-LOGOS/` HDFC, ICICI, SBI, Kotak, BOM, Bajaj, PNB |
| How it works | `#how-it-works` | 4 steps: Submit → Verify → Offers → Disbursal |
| Benefits | `#benefits` | 4 cards: rates, speed, security, support |
| Testimonials | `#testimonials` | Rajesh Kumar, Priya Sharma, Anil Patel (exact quotes in HTML) |
| CTA | `.cta-section` | Apply + Speak to expert → `pages/contact.html` |
| Footer | `footer` | Company blurb “since 2015”, quick links (About, Policy, Terms, Careers), contact: OFFICE NO.1142 TOWER B3 SAPZE ITECH PARK GURUGAON, `0124-4068700`, `info@klfpro.com`, Mon–Sat 9AM–6PM, © 2025 |

### Heavy client behaviour (inline `<script>` in index)

- **Smart loan news ticker** (multiple RSS sources, caching, scoring)
- **AI assistant** (keyword fallbacks, team list with phones/emails, bank rate strings, etc.)
- **EMI / eligibility calculator** (amortization, CIBIL warning, PDF via jsPDF)
- Employee / contact data embedded in JS (must reconcile with footer/legal when migrating)

---

## 2. `pages/` HTML files

### Common pattern (about, contact, services, apply, careers, policy, terms)

- Font Awesome 6.4.0 CDN
- Same **nav DNA**: logo + menu + “Apply Now” + hamburger
- **Sticky nav + scroll class**, hamburger toggle, **IntersectionObserver** `.fade-in` → `.show`
- Footer: three columns + social placeholders (`#` links) + copyright line (year/links vary slightly)

### `about.html`

- Hero: “Our Story” — “Revolutionizing financial services… since **2024**”
- Mission + Vision (two long paragraphs each)
- Milestones: **2024** founded, **15+** partners, **₹500Cr+** facilitated, **4.7★** rating
- Values: Transparency, Efficiency, Security, Customer First
- Team: **Mahesh Kashyap** (Founder & CEO) — `../assets/images/ceo.mahesh.jpg`; **Simran Kaur** (empty `img src`); **Our HR Team** (Unsplash image)
- CTA: “Apply for a Loan Today”
- Footer contact: `+91 9711000680`, `info@klfpro.com`, address “SAPZE ITECH PARK” variant

### `contact.html`

- Hero: “Get in Touch With Us”
- **Form:** `POST` → **Formspree** `https://formspree.io/f/xldwvjor`  
  Fields: `name`, `email`, `phone`, `subject`, `message` (message required)
- Contact info card: HQ “OFFICE No:1142 11th Floor, Spaze IT Park, Gurugram, Haryana 122018”; phones `+91-9711000680`, `0124-4068700`; hours **Mon–Sat 9:30 AM – 7:30 PM IST**; emails `info@klfpro.com`, `maheshkashyap@live.com`
- Map: link `https://maps.app.goo.gl/pnBpFwwVkWYZQTZH7`, image `../assets/map-placeholder.png`
- Footer links to **policy** and **terms** (not `#`)

### `services.html`

- Hero: “Our Financial Services”
- Intro: “We Are Loan Consultants, Not a Bank” — **50+ banks and NBFCs**
- Same loan service grid as home (Unsplash + local images for MSME / commercial)
- Extra blocks: “How we help”, process timeline, stats, **case studies**, **pricing packages**, CTA strip
- Footer consistent with other pages

### `apply.html` (most complex)

- Multi-**step** form (progress UI), validation, reference number generation
- **Loan type `<select>` values:** `home`, `business`, `personal`, `education`, `vehicle`, `property`, `msme`, `virtual` (labels differ from `index` “commercial” naming — **map carefully** to new DB slugs)
- Other fields: DOB, address, employment type (salaried/self), purpose textarea, loan amount slider (50k–50L step 50k), document sections, terms checkbox
- **EmailJS:** `emailjs.init("tne_rYpwLjZ6VnudT")`, `emailjs.send(...)` — team email `klfproconsulting@gmail.com` in copy text
- Success UI + “email sent” messaging

### `careers.html`

- Hero + “why work with us” + **job cards** + CTA (Apply / Contact)
- Links to `apply-job.html`

### `apply-job.html`

- Uses **`../css/style.css`** + **`../js/main.js`**
- Logo: **`../assets/klfpro.jpg`** (different asset name than other pages)
- Nav links to **`../pages/partners.html`** — **file missing** in repo (broken link)
- Body: Google Form **`https://forms.gle/hKXArA3JG6vbRUbZ9`** for job applications

### `policy.html` / `terms.html`

- Long legal prose
- Contact block: `klfproconsulting@gmail.com`, `+91 9711000680 / 0124-4068700`, address with **HARYANA 122018**
- Footer patterns match site

---

## 3. `css/style.css` (shared scaffold)

- **Tokens:** `--bg`, `--accent` `#0fbde6`, `--accent-2` `#8b5cf6`, `--muted`, `--ink`, `--card`, `--radius`, `--shadow`
- **Font:** Poppins (note: Google Fonts link may be in HTML using this file — `apply-job` links style.css only; font may fall back)
- **Components:** `.site-nav`, `.hero` (background `../assets/hero-bg.jpg`), `.cards-grid`, `.how-section` / `.step`, `.stats`, `.partners-grid`, `.faq-grid` `details`, `.cta-card`, `.site-footer`, **`.floating-apply`**
- **Responsive:** breakpoints ~900px, 520px, 1000px

---

## 4. `js/main.js` (entire file behaviour)

- **`DOMContentLoaded`**
  - `#mobileToggle` + `#navLinks` → toggle class `show` (note: `apply-job` nav uses `.menu` in HTML — **IDs may not match**; dead code path unless other pages use same IDs)
  - `#phoneForm` + `#phone` → validate **10-digit** Indian mobile, `alert` simulate eligibility
  - All `details` → on open, `scrollIntoView` smooth centre

No other logic in this file.

---

## 5. Assets referenced (inventory for migration)

**Present in repo (sample):** `assets/logo.svg`, `assets/partners/*`, etc.

**Heavily referenced in HTML but may be missing locally:**  
`assets/klflogos-removebg-preview.png`, `assets/klfpro.jpg`, `assets/klfpro.JPG`, `assets/BANK-LOGOS/*`, `assets/images/*`, `assets/map-placeholder.png`, `assets/hero-bg.jpg`, `favicon.ico`

**External:** many Unsplash URLs; Formspree; EmailJS CDN; Google Form; Maps short link; gtag.

---

## 6. Data / copy reconciliation (must not lose)

- **Years:** footer “since **2015**” vs about hero “since **2024**” vs milestone “**2024** founded”
- **Addresses:** “SAPZE” vs “SPAZE”, with/without Tower B3, Gurugram spelling variants
- **Phones:** `0124-4068700`, `+91 9711000680`, contact hours **9AM–6PM** vs **9:30–7:30**
- **Emails:** `info@klfpro.com`, `klfproconsulting@gmail.com`, `maheshkashyap@live.com`, plus AI block emails
- **Loan labels:** index vs apply dropdown (`education`, `vehicle` only on apply page)

---

## 7. Next.js rebuild checklist (content parity)

When your new UI (from screenshots) is implemented:

- [ ] Every **H1/H2**, bullet, testimonial quote, footer line, legal paragraph from matching legacy file
- [ ] **All anchor routes** (services, partners, how-it-works, apply, contact, about, careers, policy, terms)
- [ ] **Form fields** at least as rich as `apply.html` + `contact.html` (even if submit goes to API later)
- [ ] **Analytics:** carry over `AW-17723359083` + `G-JJY1EXQSY6` via `next/script` or env-gated
- [ ] **EMI + AI** behaviour: either port logic or document as phase-2 if simplified first
- [ ] **Broken links:** fix `partners.html` or add page
- [ ] **Job apply:** preserve Google Form URL
- [ ] **Contact:** preserve Formspree URL until API replaces it

---

*Generated from repository inspection. When you send UI screenshots, map each screen to rows in sections above so no copy is dropped.*

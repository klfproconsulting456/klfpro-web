# STEP 0 - Existing Site Audit and Migration Map

## 1) Content Inventory

- **Primary brand**: KLFPRO Consulting / KLFPRO Finance
- **Core promise**: Connect borrowers with bank partners for better loan offers
- **Main loan categories detected**:
  - Home Loan
  - Business Loan
  - Personal Loan
  - Loan Against Property (LAP)
  - Car Loan
  - MSME Loan
  - Loan Against Virtual Unit
  - Commercial Property Loan
- **Main informational sections (existing site)**:
  - Hero
  - Services grid
  - EMI / eligibility calculator modal
  - Partner banks section
  - How it works
  - Benefits
  - Testimonials
  - CTA strip
  - Footer contact details
  - Policy / Terms pages
- **Existing forms and lead captures**:
  - Contact form (`pages/contact.html`, Formspree)
  - Apply form (`pages/apply.html`, EmailJS + client validation)

## 2) Asset Inventory

- **Repository-known assets**:
  - `assets/logo.svg`
  - `assets/partners/Axis-Bank.svg`
  - `assets/partners/icici.png`
- **Referenced but currently unresolved in repo inventory**:
  - `assets/klflogos-removebg-preview.png`
  - `assets/BANK-LOGOS/*` (HDFC, ICICI, SBI, Kotak, BOM, Bajaj, PNB)
  - `assets/images/MSME LOAN.jpg`
  - `assets/images/commercial property loan.jpg`
- **External imagery in use**:
  - Multiple Unsplash URLs for hero/service cards

## 3) Existing Feature Map

- AI assistant UI with quick prompts and fallback domain knowledge
- EMI / eligibility style calculator with sliders
- Loan application flow with validations and success state
- Contact form integration
- Loan/news oriented content blocks
- Partner logos strip and testimonials

## 4) Data Reconciliation Checklist

Conflicts found across pages/scripts:

- **Phone numbers**:
  - `0124-4068700`
  - `+91 9711000680`
  - Team cards include other personal numbers in `index.html` AI section
- **Emails**:
  - `info@klfpro.com`
  - `klfproconsulting@gmail.com`
  - `klfpro@gmail.com` in AI/team script context
- **Address formatting variants**:
  - `OFFICE NO.1142, SAPZE ITECH PARK, GURUGAON`
  - `OFFICE NO. 1142, TOWER B3, SPAZE I-TECH PARK, ...`
- **Company timeline wording mismatch**:
  - Some content says active since 2015
  - About page mission line references innovation since 2024

Action for migration:
- Centralize all organization details into a single config (`siteConfig`) and consume everywhere.
- Mark unresolved fields for business confirmation before production release.

## 5) Migration Strategy (Static -> Modular Platform)

1. **Preserve-first extraction**:
   - Move text, loan categories, FAQs, testimonials, partner details, and legal content into typed constants/JSON content modules.
2. **Frontend replatform**:
   - Build Next.js App Router structure with reusable section components.
   - Rebuild Home first with migrated real content.
3. **Backend enablement**:
   - Replace Formspree/EmailJS flows with NestJS APIs.
   - Persist leads and applications in PostgreSQL via Prisma.
4. **Operational hardening**:
   - Add JWT auth, role guards, Redis caching, admin lifecycle management.
5. **SEO and performance uplift**:
   - Next metadata API, schema.org, sitemap/robots, image optimization, route-level rendering strategy.

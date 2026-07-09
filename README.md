# KLFPRO Finance Platform

Production-grade migration scaffold from legacy static KLFPRO website to a full-stack fintech platform.

## Monorepo Structure

- `frontend/` - Next.js App Router + TypeScript + Tailwind
- `backend/` - NestJS + Prisma + PostgreSQL + Redis integration point
- `docs/step-0-audit-and-migration-map.md` - Existing site audit and reconciliation checklist
- `index.html`, `pages/`, `assets/` - Legacy static source retained for migration reference

## Setup

### 1) Install dependencies

```bash
npm install
npm install -w frontend
npm install -w backend
```

### 2) Environment configuration

Create:

- `frontend/.env.local`
- `backend/.env`

Use templates from:

- `frontend/.env.example`
- `backend/.env.example`

### 3) Database and Prisma

```bash
npm run prisma:generate -w backend
npm run prisma:migrate -w backend
npm run prisma:seed -w backend
```

### 4) Run apps

Frontend:

```bash
npm run dev:frontend
```

Backend:

```bash
npm run dev:backend
```

## Build

```bash
npm run build
```

## Production Deployment Targets

- Frontend: Vercel
- Backend: AWS EC2 (Docker-ready)
- Database: Supabase Postgres or AWS RDS
- Redis: ElastiCache or managed Redis provider

## Notes

- Existing business identity and core content are mapped into `frontend/content/site-data.ts`.
- Contact and identity conflicts are documented in `docs/step-0-audit-and-migration-map.md` and must be finalized before launch.
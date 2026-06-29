# Maison Vereen — Backend Setup Guide

## Stack
- **Next.js 16** (App Router)
- **Prisma 7** + **PostgreSQL**
- **JWT auth** via `jose` + httpOnly cookies
- **bcryptjs** for password hashing

---

## 1. PostgreSQL

Create a database locally (or use a hosted provider like Supabase, Neon, Railway):

```sql
CREATE DATABASE maison_vereen;
```

---

## 2. Environment variables

Copy `.env` and fill in your values:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/maison_vereen"
JWT_SECRET="generate-with: node -e \"console.log(require('crypto').randomBytes(64).toString('hex'))\""
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

---

## 3. Run migrations

```bash
# Push schema to DB (dev — skips migration files)
npm run db:push

# Or create a proper migration
npm run db:migrate
```

---

## 4. Generate Prisma client

```bash
npm run db:generate
```

This must be run after any schema change. The client is output to `prisma/generated/prisma/`.

---

## 5. Seed the admin user

```bash
npm run db:seed
```

Default credentials (change immediately after first login):
- **Email:** `admin@maisonvereen.com`
- **Password:** `MaisonAdmin2024!`

---

## 6. Run the app

```bash
npm run dev
```

---

## Admin Dashboard

Visit **`/admin`** — you will be redirected to `/admin/login` if not authenticated.

### Pages
| Route | Description |
|---|---|
| `/admin/login` | Admin sign-in |
| `/admin` | Dashboard — stats + recent applications |
| `/admin/applications` | Full applications table with search, filter, pagination |
| `/admin/waitlist` | Waitlist email entries + CSV export |

---

## API Endpoints

### Public
| Method | Route | Description |
|---|---|---|
| `POST` | `/api/applications` | Submit application form |
| `POST` | `/api/waitlist` | Join email waitlist |

### Admin (requires auth cookie)
| Method | Route | Description |
|---|---|---|
| `POST` | `/api/admin/login` | Sign in |
| `POST` | `/api/admin/logout` | Sign out |
| `GET` | `/api/admin/stats` | Dashboard stats |
| `GET` | `/api/applications?page=&status=&search=` | List applications |
| `GET` | `/api/applications/:id` | Get single application |
| `PATCH` | `/api/applications/:id` | Update status or notes |
| `DELETE` | `/api/applications/:id` | Delete application |
| `GET` | `/api/waitlist` | List waitlist entries |
| `GET` | `/api/waitlist/export` | Download CSV |

---

## npm scripts

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run db:generate  # Regenerate Prisma client after schema changes
npm run db:push      # Push schema to DB (dev)
npm run db:migrate   # Create + run migration
npm run db:seed      # Seed admin user
npm run db:studio    # Open Prisma Studio (GUI)
```

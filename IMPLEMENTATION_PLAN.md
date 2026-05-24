# Arcana Nyx Implementation Plan

## 1. Project Vision

**Arcana Nyx** is a mobile-first tarot reading and learning web app built on top of a reusable tarot npm package.

### Architecture Layers

1. `packages/tarot-kit`  
   Reusable npm package for tarot data, types, and helpers

2. `apps/web`  
   Next.js app (UI + user experience)

3. `tools/python`  
   Python tooling for validation and data preparation

---

## 2. Completed Work

### Phase 1 — Repository & Setup

- GitHub repo created: `arcana-nyx`
- Monorepo structure initialized
- npm package created: `@cometpisces/tarot-kit`

---

### Phase 2 — TypeScript Package

- TypeScript configured
- ESM build with NodeNext
- `dist/` output working
- Node typings added
- Package builds successfully

---

### Phase 3 — Data Model

- Multilingual structure (EN + ZH)
- Image support
- Description + meaning separation

Key types:

- `TarotCard`
- `LocalizedText`
- `TarotCardMeaning`
- `CardOrientation`
- `ArcanaType`
- `MinorArcanaSuit`

---

### Phase 4 — Helpers

- `getAllCards()`
- `getCardById()`
- `drawRandomCard()`
- `drawCards()`
- `getCardMeaning()`
- `getLocalizedText()`
- `validateUniqueCardIds()`

---

### Phase 5 — Data Structure

- `major-arcana.ts`
- `minor-arcana.ts`
- suit-based files (prepared)
- `cards.ts` aggregator

---

### Phase 6 — Python Tooling

- `pyproject.toml`
- `validate_cards.py`
- Script runs successfully

---

### Phase 7 — Data Pipeline

- TypeScript → JSON export script
- Python validator reads generated JSON
- No manual copy required

---

### Phase 8 — Web App Setup

- Next.js app created (`apps/web`)
- Workspace configured
- Local package import works

---

### Phase 9 — Daily Draw Feature

- `/daily` route created
- Random card draw works
- Displays:
  - name (EN + ZH)
  - orientation
  - description
  - meaning

---

### Phase 10 — Image Strategy

- Images stored in `/public`
- npm package stores only URLs
- No asset bundling in package

---

### Phase 11 — Full Dataset (78 Cards)

- All 22 Major Arcana complete (The Fool → The World)
- All 4 Minor Arcana suits complete (Ace → King):
  - `cups.ts` — 14 cards
  - `wands.ts` — 14 cards
  - `swords.ts` — 14 cards
  - `pentacles.ts` — 14 cards
- Every card has: bilingual name, description, keywords, upright + reversed meanings, image URL

---

### Phase 12 — Card Library Page (`/cards`)

- Grid layout displaying all 78 cards
- Filter by arcana/suit (All · Major · Wands · Cups · Swords · Pentacles)
- Language toggle (EN / ZH)
- Card count displayed per filter
- MUI components used throughout

---

### Phase 13 — Home Page Polish

- Card count summary (total / major / minor)
- Navigation links to Daily Draw and Card Library
- MUI layout with clean typography

---

## 3. Current Status

### Done

- Package architecture
- Data model & all helper functions
- Python validation pipeline
- Next.js integration
- Daily Draw (`/daily`) — draw, display name/orientation/description/meaning with language toggle
- Full 78-card dataset — all 22 major arcana + 56 minor arcana (bilingual, with meanings + images)
- Card Library (`/cards`) — grid view, suit/arcana filter, EN/ZH toggle, card count
- Home page — card count summary, navigation to Daily Draw and Card Library
- Fixed Client Component error (added `"use client"` to page.tsx)
- Dev server running successfully on http://localhost:3000

### In Progress

- Image rendering (Rider-Waite images not yet placed in `/public/images/rider-waite/`)
- Daily Draw lock (one draw per day, stored locally)
- Custom font loading cleanup in `layout.tsx`

### Known Issues

- Manual font `<link>` tags in `apps/web/src/app/layout.tsx` trigger `@next/next/no-page-custom-font`

### Not Started

- Card detail page (`/cards/[id]`)
- Quiz system
- Spread reading
- Persistence (localStorage → Supabase)
- Daily Draw lock (one draw per day)
- Improved Python validation
- Supabase integration
- Deployment
- npm publishing

---

## 4. Next Phases

### Phase 14 — Daily Draw Polish

- Daily draw lock (one draw per day, stored by date in localStorage)

---

### Phase 15 — Card Detail Page (`/cards/[id]`)

- Route: `/cards/[id]`
- Larger card image
- Full description
- Core keyword display
- Upright + reversed meaning sections
- Reading aspects sections
- Contextual meanings sections
- Back to Card Library link

---

### Phase 16 — App Shell Follow-up

- Replace manual font `<link>` tags with a supported Next font or local asset setup
- Set `turbopack.root` to silence the multi-lockfile warning during builds

---

### Phase 17 — Place Card Images

- Add Rider-Waite images to `/public/images/rider-waite/`
- Verify filenames match URLs in data files
- Confirm images render on Daily Draw and Card Library

---

### Phase 18 — Improve Python Validation

Add checks for:

- duplicate IDs
- missing language fields (EN + ZH)
- missing upright/reversed meanings
- missing description
- missing image URLs
- optional: validate image file existence on disk

---

### Phase 19 — Quiz Mode

Route: `/quiz`

Features:

- meaning → card name
- card → meaning
- keywords → card
- upright vs reversed distinction

---

### Phase 20 — Spread Reading

Route: `/spread`

MVP:

- 3-card spread (Past / Present / Future)
- Position label per card
- Language toggle

---

### Phase 21 — Persistence

Stage 1 — localStorage:

- daily draw history (by date)
- quiz progress
- language preference

Stage 2 — Supabase:

- auth
- cross-device sync

---

### Phase 22 — Supabase Integration

- User auth
- Draw history
- Quiz progress tracking
- Journal notes per card

---

### Phase 23 — Publish npm Package

- Clean README with usage examples
- Verify all exports work
- Version and tag properly
- Publish `@cometpisces/tarot-kit` publicly

---

### Phase 24 — Deployment

- Vercel (web app)
- npm registry (package)
- Supabase (backend)

---

## 5. Recommended Next Steps

1. Replace manual font `<link>` tags with a supported Next font or local asset setup
2. Place Rider-Waite images in `/public/images/rider-waite/`
3. Add daily draw lock with localStorage
4. Build `/cards/[id]` detail page
5. Improve Python validation checks
6. Choose next feature: Quiz (learning) or Spread (reading)

---

## 6. Milestones

### Milestone A — Core App _(in progress)_

- [x] Daily Draw functional
- [x] Full 78-card dataset
- [x] Card Library with filters
- [x] Home page
- [x] Dev server running
- [ ] Replace manual layout font links with a supported Next font setup
- [ ] Daily Draw polished (daily lock)
- [ ] Card Detail page (`/cards/[id]`)
- [ ] Card images placed in `/public/images/rider-waite/`

### Milestone B — Learning Mode

- [ ] Quiz system (`/quiz`)
- [ ] Improved Python validation

### Milestone C — Reading Mode

- [ ] Spread feature (`/spread`)

### Milestone D — Persistence

- [ ] localStorage (draw history, language preference)
- [ ] Supabase (auth + cross-device)

### Milestone E — Publish

- [ ] npm package published
- [ ] Web app deployed to Vercel
- [ ] Portfolio ready

---

## 7. Summary

### Achievements

- Full monorepo architecture
- Reusable npm package
- Multilingual tarot data model
- Validation pipeline
- Working app feature

### Next Focus

Shift from architecture → user experience:

- polish UI
- build card pages
- expand dataset gradually

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

- Companion image package created: `@cometpisces/tarot-kit-images`
- All 78 Rider-Waite images included in `packages/tarot-kit-images/images`
- Web app copies images into `/public/images/rider-waite/`
- Tarot data package remains data-first and references image URLs/helpers instead of bundling assets directly

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
- Card detail modal implemented with:
  - larger card image
  - core keyword
  - description
  - upright/reversed tabs
  - reading aspects
  - contextual meanings

---

### Phase 13 — Home Page Polish

- Card count summary (total / major / minor)
- Navigation links to Daily Draw and Card Library
- MUI layout with clean typography

---

### Phase 14 — Image Package & Rendering

- `@cometpisces/tarot-kit-images` package added
- `getImagePath()` helper available for card image filename lookup
- `TarotCardImage` component added with Rider-Waite aspect ratio and reversed-card rotation
- Daily Draw and Card Library render Rider-Waite images from `/public/images/rider-waite/`
- Card back art added for the Daily Draw deck state

---

### Phase 15 — App Shell & Navigation

- Shared `AppNavbar` added
- Shared `BottomNav` added
- `Providers` wrapper added for MUI/theme setup
- `layout.tsx` updated to use local CSS font variables for the app shell
- Chinese font stack is now handled through local fallbacks instead of remote Google font loads

---

## 3. Current Status

### Done

- Package architecture
- Data model & all helper functions
- Python validation pipeline
- Next.js integration
- Daily Draw (`/daily`) — draw, display image/name/orientation/core keyword/description/meaning/reading aspects/contextual meanings with language toggle
- Full 78-card dataset — all 22 major arcana + 56 minor arcana (bilingual, with meanings + images)
- Companion image package (`@cometpisces/tarot-kit-images`) — all 78 Rider-Waite image assets and filename helper
- Rider-Waite images copied into `apps/web/public/images/rider-waite/`
- Reusable `TarotCardImage` component with reversed-card rotation
- Card Library (`/cards`) — grid view, suit/arcana filter, EN/ZH toggle, card count, card detail modal
- Home page — card count summary, navigation to Daily Draw and Card Library
- Shared app shell — top navigation, bottom navigation, MUI provider/theme integration
- Fixed Client Component error (added `"use client"` to page.tsx)
- Daily Draw now locks one draw per day and restores the saved card from localStorage
- App shell now uses local CSS font variables so the web build no longer depends on remote font fetches
- Package builds pass:
  - `pnpm --filter @cometpisces/tarot-kit build`
  - `pnpm --filter @cometpisces/tarot-kit-images build`
- Web build passes with the local font setup in place

### In Progress

- Daily Draw deck simulation and deck-scope selection
- Daily Draw result modal / bottom-sheet experience
- localStorage-based reading history and persistence utilities
- Python validation/data export cleanup

### Known Issues

- `apps/web/src/app/cards/page.tsx` still has an unused `Image` import lint warning
- `tools/python/cards.generated.json` is stale/incomplete and currently contains only 3 cards
- `tools/python/scripts/validate_cards.py` is still minimal and does not yet validate the full required shape
- The next feature work should focus on interaction design before adding storage and sharing behavior

### Not Started

- Dedicated card detail route (`/cards/[id]`)
- Quiz system
- Spread reading
- Persistence (localStorage → Supabase)
- Improved Python validation
- Supabase integration
- Deployment
- npm publishing

---

## 4. Feature Design Analysis

### Feature Design Kickoff

The next implementation sprint is shifting from foundation work into product-facing interaction design. The primary goals are to make Daily Draw feel tactile, keep the app lightweight for mobile, and define the data contracts for history and persistence before they are wired into the UI.

Design priorities for the next phase:

- Make Daily Draw feel like choosing from a real deck rather than tapping a single card back
- Keep the experience mobile-first and low-friction
- Reuse shared deck helpers so Daily Draw, Spread Reading, and Quiz flows all behave consistently
- Define persistence early so localStorage records remain simple and future-ready for Supabase

Recommended implementation order:

1. Daily Draw deck simulation and scope selection
2. Draw result modal or bottom sheet
3. localStorage-based reading history
4. Spread Reading and Quiz as follow-on feature suites

### Daily Draw Deck Simulation

Current `/daily` draws one random card from the full deck after tapping the card back. The next version should show the available deck as a 78-card face-down spread/grid so drawing feels physical and intentional.

Implementation approach:

- Build a reusable `DeckPicker` component that receives a card pool and renders all cards as card backs.
- Use CSS transforms and staggered offsets for hover/focus states so each card lifts, glows, or tilts slightly.
- Keep the cards face-down until selected; after selection, reveal only the drawn card in a focused result view.
- Make the layout mobile-first: a compact fanned/stacked layout for small screens, and a denser grid/fan for wider screens.
- Add keyboard support so cards can be tabbed and selected without relying on hover.

Improvement notes:

- Showing all 78 cards gives a stronger tarot ritual feel, but it can get visually dense on mobile. A fanned deck, horizontal scroll deck, or grouped rows may feel better than a strict 78-card grid.
- The visual draw should still use the selected card identity instead of performing a second random draw after click, so the card the user chooses is the card they receive.

### Deck Scope Selection

Daily Draw should support drawing from:

- Full deck: 78 cards
- Major Arcana only: 22 cards
- Minor Arcana only: 56 cards

Implementation approach:

- Add a segmented control on `/daily` before the deck picker.
- Filter cards with existing `arcana` data before rendering the deck.
- Reset the current unsaved deck simulation when the user changes deck scope.
- Store the selected scope with daily draw history so past draws are explainable.

### Shuffling

Card shuffling is feasible. `drawCards()` already performs a Fisher-Yates shuffle internally before returning cards. For the new UI, shuffling should become an explicit shared helper rather than hidden inside only multi-card drawing.

Implementation approach:

- Add package helpers such as `shuffleCards(cardList)` and `drawCardsFrom(cardList, count)`.
- Use the same shuffled deck order for Daily Draw, Spread Reading, and Quiz modes when they need randomized cards.
- Add an optional `shuffle` button/animation in `DeckPicker`.
- Store the shuffled order in component state so hovering/selecting cards is stable after shuffle.

Improvement notes:

- True seeded randomness is not necessary for the MVP, but a seed could be added later if saved readings need exact replay.
- Shuffling animation should be light; large animated 78-card layouts can hurt mobile performance.

### Drawn Card Presentation

Current Daily Draw result content stacks vertically and can require a long scroll. A compact navigation pattern would make the reading feel more app-like.

Recommended approach:

- Use a modal or bottom sheet for drawn card results rather than navigating to a new page.
- Inside the result view, use tabs or a stepper for:
  - Overview
  - Meaning
  - Aspects
  - Context
- Add left/right controls where there are multiple sections or multiple drawn cards.
- Closing the modal returns to the deck simulation so the user can draw again when allowed.

Modal vs page navigation:

- Modal/bottom sheet is better for Daily Draw because it preserves the drawing surface and feels like revealing a selected card.
- Dedicated page routes are better for shareable card details, saved readings, or deep links.
- For Daily Draw MVP, use a modal/bottom sheet. Later, saved history entries can link to a full reading detail route.

### Card Details Modal Navigation

The existing Card Details Modal already contains a lot of content. It should use the same navigation pattern as drawn-card results.

Implementation approach:

- Keep the modal, but split long content into tabs or stepper sections:
  - Overview
  - Upright
  - Reversed
  - Aspects
  - Context
- Keep upright/reversed as either top-level tabs or a nested segmented control.
- Add left/right controls for moving between cards in the current filtered library result.
- Preserve modal state when switching language.

### History And Saved Readings

Daily drawn history and spread readings should first be stored locally, then moved to Supabase once auth exists.

Implementation approach:

- Add localStorage utilities for:
  - daily draw history
  - spread reading history
  - saved readings
  - quiz progress/settings
  - language preference
- Use stable serializable records: card IDs, orientations, spread type, positions, timestamps, notes, and deck scope.
- Rehydrate records using `getCardById()` instead of storing full card objects.
- Add Supabase later for cross-device sync and user accounts.

### Spread Reading

Add `/spread` for multi-card readings with predefined layouts and manual expansion.

MVP layouts:

- 3-card spread: Past / Present / Future
- 5-card spread: Situation / Challenge / Advice / Hidden Influence / Outcome
- 7-card spread: deeper guidance layout
- 10-card spread: Celtic Cross-style layout

Implementation approach:

- Define spread templates with position IDs, labels, descriptions, and layout coordinates.
- Draw from selected deck scope, using a shuffled deck without replacement.
- Display cards in a layout that matches the chosen spread.
- Allow manual `+1` cards after the initial draw, appended as clarifiers.
- Save readings with notes and timestamps.

Improvement notes:

- Start with 3-card and 5-card spreads before adding 7/10, because 10-card mobile layout needs careful design.
- A clarifier card should be linked to either the whole spread or a specific spread position.

### Knowledge Test

Add `/quiz` for learning tarot meanings.

Quiz sources:

- Full deck
- Major Arcana only
- Minor Arcana only
- Daily drawn card history

Question types:

- Meaning → card name
- Card → meaning
- Keywords/core keyword → card
- Upright vs reversed distinction
- Suit/arcana identification

Implementation approach:

- Create quiz session state from selected source and question type.
- Generate plausible answer choices from the same selected pool.
- Track score, missed cards, and review queue locally.
- Use daily draw history as a smaller personalized quiz pool when enough cards exist.

Improvement notes:

- Avoid asking from daily history until there are enough unique cards to create fair multiple-choice answers.
- Quiz should use repeated misses to prioritize review cards later.

---

## 5. Next Phases

### Phase 16 — Data Pipeline Refresh

- Rebuild `@cometpisces/tarot-kit`
- Regenerate `tools/python/cards.generated.json` from the current 78-card TypeScript dataset
- Confirm Python validator reports 78 cards
- Update image URLs/filenames in generated JSON if needed

---

### Phase 17 — Improve Python Validation

Add checks for:

- exactly 78 cards
- duplicate IDs
- missing language fields (EN + ZH)
- missing core keyword
- missing upright/reversed meanings
- missing description
- missing reading aspects
- missing contextual meanings
- missing image URLs
- image file existence on disk

---

### Phase 18 — Daily Draw Deck Simulation & Lock

- Daily draw lock (one draw per day, stored by date in localStorage)
- Restore today's stored card on page load
- Store orientation with the card
- Replace single card-back trigger with selectable face-down deck simulation
- Render the active card pool as full deck / major-only / minor-only
- Add hover/focus lift, glow, or tilt effects for card drawing
- Add explicit shuffle action using a shared shuffle helper
- Keep selected deck order stable until the user shuffles or changes scope
- Store selected deck scope with the draw record
- Add clear/reset behavior for local testing if needed
- Keep language toggle independent of stored card data

---

### Phase 19 — Drawn Card Result Modal

- Show drawn card result in a modal or mobile bottom sheet
- Closing the modal returns to the deck simulation
- Use tabs, dot stepper, or left/right navigation instead of a long vertical scroll
- Suggested sections:
  - Overview
  - Meaning
  - Reading aspects
  - Contextual meanings
- Keep the modal accessible with escape/close controls and keyboard navigation
- Save completed draw records into daily draw history

---

### Phase 20 — Shared Deck & Storage Utilities

- Add reusable card filtering helpers for full deck / major-only / minor-only
- Add explicit `shuffleCards(cardList)` helper
- Add `drawCardsFrom(cardList, count)` helper for filtered draws
- Add localStorage utilities for:
  - daily draw history
  - spread readings
  - saved readings
  - quiz progress
  - language preference
- Store card IDs and orientations, then rehydrate with `getCardById()`

---

### Phase 21 — App Shell Follow-up

- Remove unused `Image` import from `apps/web/src/app/cards/page.tsx`
- Replace remaining manual font `<link>` tags with supported Next/local font setup
- Consider self-hosted fonts to make production builds network-independent
- Set `turbopack.root` if the multi-lockfile warning returns during builds

---

### Phase 22 — Card Details Modal Refinement

- Replace long modal scrolling with tabs, dot stepper, or left/right section navigation
- Suggested sections:
  - Overview
  - Upright
  - Reversed
  - Reading aspects
  - Contextual meanings
- Add previous/next card navigation within the current filtered library result
- Keep modal state stable when switching language

---

### Phase 23 — Dedicated Card Detail Page (`/cards/[id]`)

The card detail experience already exists as a modal on `/cards`. A dedicated route is still useful for linking/bookmarking.

- Route: `/cards/[id]`
- Larger card image
- Full description
- Core keyword display
- Upright + reversed meaning sections
- Reading aspects sections
- Contextual meanings sections
- Back to Card Library link

---

### Phase 24 — Spread Reading

Route: `/spread`

MVP:

- Choose spread size: 3 / 5 / 7 / 10 cards
- Start with 3-card and 5-card templates before polishing larger layouts
- Draw cards into named spread positions
- Display cards in spread-specific layouts
- Support full deck / major-only / minor-only source selection
- Use shuffled deck order and draw without replacement
- Allow manual clarifier cards after the initial spread (`+1`, `+1`, `+1`)
- Let clarifiers attach to the full spread or a specific position
- Language toggle

---

### Phase 25 — Save Readings

- Save Daily Draw records
- Save Spread Reading records
- Include:
  - date/time
  - deck scope
  - spread type
  - card IDs
  - orientations
  - spread positions
  - clarifier links
  - optional notes
- Start with localStorage
- Prepare record shape for later Supabase sync

---

### Phase 26 — Knowledge Test

Route: `/quiz`

Question sources:

- Full deck
- Major Arcana only
- Minor Arcana only
- Daily drawn card history

Question types:

- meaning → card name
- card → meaning
- keywords/core keyword → card
- upright vs reversed distinction
- suit/arcana identification

Progress:

- Track score locally
- Track missed cards
- Build a review queue from weak cards
- Unlock daily-history quiz mode only when there are enough unique drawn cards

---

### Phase 27 — Persistence

Stage 1 — localStorage:

- daily draw history (by date)
- saved spread readings
- saved reading notes
- quiz progress
- language preference

Stage 2 — Supabase:

- auth
- cross-device sync

---

### Phase 28 — Supabase Integration

- User auth
- Draw history
- Saved readings
- Quiz progress tracking
- Journal notes per card

---

### Phase 29 — Publish npm Package

- Clean README with usage examples
- Verify all exports work
- Include `@cometpisces/tarot-kit-images` in publishing workflow if it remains a separate package
- Version and tag properly
- Publish `@cometpisces/tarot-kit` publicly

---

### Phase 30 — Deployment

- Vercel (web app)
- npm registry (packages)
- Supabase (backend)

---

## 6. Recommended Next Steps

1. Regenerate `tools/python/cards.generated.json` from the current 78-card TypeScript dataset
2. Improve Python validation checks so stale/incomplete exports are caught
3. Add shared deck helpers for filtering, shuffling, and filtered draws
4. Build Daily Draw deck simulation with full / major / minor source selection
5. Move Daily Draw result into a modal or bottom sheet with tab/stepper navigation
6. Save daily draw history in localStorage
7. Remove the unused `/cards` import and clean up font loading warnings
8. Refine Card Details Modal navigation
9. Build Spread Reading before Quiz if the next priority is readings; build Quiz first if the next priority is learning

---

## 7. Milestones

### Milestone A — Core App _(in progress)_

- [x] Daily Draw functional
- [x] Full 78-card dataset
- [x] Card Library with filters
- [x] Card detail modal
- [x] Home page
- [x] Rider-Waite images available in `/public/images/rider-waite/`
- [x] Companion image package
- [x] Package builds passing
- [x] Web production build passing with network access
- [ ] Replace manual layout font links with a supported Next font setup
- [ ] Daily Draw polished (daily lock)
- [ ] Daily Draw 78-card deck simulation
- [ ] Daily Draw full / major / minor source selection
- [ ] Daily Draw result modal with tab/stepper navigation
- [ ] Data pipeline refreshed with 78-card generated JSON
- [ ] Dedicated Card Detail page (`/cards/[id]`)

### Milestone B — Learning Mode

- [ ] Improved Python validation
- [ ] Quiz system (`/quiz`)
- [ ] Quiz sources: full deck, major, minor, daily drawn history
- [ ] Quiz progress and missed-card review queue

### Milestone C — Reading Mode

- [ ] Spread feature (`/spread`)
- [ ] 3-card spread
- [ ] 5-card spread
- [ ] 7-card spread
- [ ] 10-card spread
- [ ] Manual clarifier cards
- [ ] Save readings

### Milestone D — Persistence

- [ ] localStorage (draw history, saved readings, quiz progress, language preference)
- [ ] Supabase (auth + cross-device)

### Milestone E — Publish

- [ ] npm package published
- [ ] Web app deployed to Vercel
- [ ] Portfolio ready

---

## 8. Summary

### Achievements

- Full monorepo architecture
- Reusable npm package
- Companion tarot image package
- Multilingual tarot data model
- Full 78-card dataset
- Working Daily Draw and Card Library features
- Card images rendering in the web app
- Basic validation/export pipeline

### Next Focus

Shift from architecture → product polish and reliability:

- refresh generated data artifacts
- harden validation
- add shared deck/shuffle/storage utilities
- make Daily Draw feel like choosing from a real deck
- add reading history and saved spreads
- add quiz-based learning loops
- clean up app shell warnings

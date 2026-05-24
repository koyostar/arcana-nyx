# Plan: Enhanced Daily Draw & Card Library with Full Reading Details

Improve the daily draw experience with proper card sizing, visual card deck interaction, reversed card rotation, and comprehensive reading information display. Extend enhancements to the card library with expandable card views.

**Steps**

**Phase 1: Card Display Infrastructure (Parallel)**

1. Create shared `TarotCardImage` component with proper 70×120mm aspect ratio (171.4% padding-top) and reversed rotation support
2. Create `ReadingAspectSection` component to display the 5 reading aspects (currentSituation, innerState, rootCause, development, advice)
3. Create `ContextualMeaningSection` component to display the 4 contextual meanings (love, work, interpersonal, others)

**Phase 2: Daily Draw Page Enhancements** 4. Replace "Draw a Card" button with interactive card deck pile (_depends on 1_)

- Display single card back image (arcananyx-tarotlight.png) centered
- Add hover effect (lift animation, glow)
- Click handler to draw card

5. Update drawn card display to show all new sections (_depends on 1, 2, 3_)
   - Rotate card image 180deg when reversed
   - Display coreKeyword prominently
   - Show all 5 readingAspects in organized sections
   - Show all 4 contextualMeanings in organized sections
   - Hide deck pile when card is drawn
6. Update "Draw another card" to reset and show deck pile again

**Phase 3: Card Library Enhancements** (_parallel with Phase 2_) 7. Update card grid to use new `TarotCardImage` component for consistent sizing (_depends on 1_) 8. Add expandable/modal view for each card showing full details

- Click card to open detail view
- Display coreKeyword, description, meaning, readingAspects, contextualMeanings for both orientations

9. Maintain suit-specific glow colors in grid view

**Verification**

1. Measure card aspect ratio matches 70×120mm (1.714:1) using browser dev tools
2. Verify reversed cards show image rotated 180 degrees (upside down)
3. Test deck pile interaction: hover glow effect, click draws card, deck disappears after draw
4. Confirm all 5 reading aspects displayed in daily draw (currentSituation, innerState, rootCause, development, advice)
5. Confirm all 4 contextual meanings displayed (love, work, interpersonal, others)
6. Test card library grid uses same aspect ratio and expandable views work
7. Verify language toggle (EN/ZH) works for all new text fields
8. Test "Draw another card" resets properly and shows deck pile again

**Relevant Files**

- [apps/web/src/app/daily/page.tsx](apps/web/src/app/daily/page.tsx) — Daily draw page, replace button with deck pile, add reversed rotation, display new sections
- [apps/web/src/app/cards/page.tsx](apps/web/src/app/cards/page.tsx) — Card library grid, add expandable detail views
- [apps/web/src/components/TarotCardImage.tsx](apps/web/src/components/TarotCardImage.tsx) — New shared component with proper 171.4% aspect ratio, reversed rotation via transform: rotate(180deg)
- [apps/web/src/components/ReadingAspectSection.tsx](apps/web/src/components/ReadingAspectSection.tsx) — New component displaying readingAspects.currentSituation/innerState/rootCause/development/advice
- [apps/web/src/components/ContextualMeaningSection.tsx](apps/web/src/components/ContextualMeaningSection.tsx) — New component displaying contextualMeanings.love/work/interpersonal/others
- [packages/tarot-kit/src/types/card.ts](packages/tarot-kit/src/types/card.ts) — Reference for TarotCard type structure
- [apps/web/public/images/arcananyx-tarotlight.png](apps/web/public/images/arcananyx-tarotlight.png) — Card back image for deck pile

**Decisions**

- Aspect ratio: 70mm × 120mm = 171.4% padding-top (height/width ratio)
- Deck interaction: Single pile with hover highlight, click to draw
- Reversed cards: CSS transform rotate(180deg) on image container
- All reading details displayed: 5 aspects + 4 contexts (comprehensive reading experience)
- Deck pile disappears after draw (focus on reading)
- Card library: Expandable modal/detail view for full card information
- Maintain existing suit-specific glow colors from current card library
- Use existing localization system (lang parameter) for all new text fields

**Further Considerations**

1. **Animation timing**: Should the card flip animation when drawn be instant, or gradual reveal (e.g., 300ms rotation)? _Recommendation: 400ms ease-in-out for satisfying reveal_
2. **Reading sections layout**: Should aspects and contexts be in tabs, accordions, or all visible? _Recommendation: All visible with clear Typography headings, organized in Card components_
3. **Mobile responsiveness**: On small screens, should reading sections stack vertically or use horizontal scroll? _Recommendation: Stack vertically, single column on mobile_

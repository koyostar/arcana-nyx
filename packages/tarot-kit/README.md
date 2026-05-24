# @cometpisces/tarot-kit

Rider-Waite tarot card data and helper utilities for building tarot applications.

## Installation

```bash
npm install @cometpisces/tarot-kit
# or
pnpm add @cometpisces/tarot-kit
# or
yarn add @cometpisces/tarot-kit
```

## Features

- 📇 Complete Rider-Waite tarot deck data (78 cards)
- 🎴 Major and Minor Arcana with detailed meanings
- 🔀 Card drawing utilities (single or multiple draws)
- 🌍 Localization support (English and Chinese)
- 📊 Reading aspects (upright/reversed meanings, context-specific interpretations)
- 📖 Rich card metadata including keywords, numerology, astrology, and symbolism

## Usage

### Import Card Data

```typescript
import { cards, getAllCards, getCardById } from '@cometpisces/tarot-kit';

// Get all 78 cards
const allCards = getAllCards();

// Get a specific card by ID
const fool = getCardById('major-00-fool');
console.log(fool.name); // "The Fool"
```

### Draw Random Cards

```typescript
import { drawRandomCard, drawCards } from '@cometpisces/tarot-kit';

// Draw a single card
const singleCard = drawRandomCard();
console.log(singleCard.card.name, singleCard.orientation); // e.g., "The Fool", "upright"

// Draw multiple cards (e.g., 3-card spread)
const threeCards = drawCards(3);
threeCards.forEach(drawn => {
  console.log(`${drawn.card.name} (${drawn.orientation})`);
});
```

### Get Card Meanings

```typescript
import { getCardMeaning } from '@cometpisces/tarot-kit';

const fool = getCardById('major-00-fool');
const upright = getCardMeaning(fool, 'upright');
const reversed = getCardMeaning(fool, 'reversed');

console.log(upright.general); // General upright meaning
console.log(reversed.general); // General reversed meaning
```

### Filter by Arcana

```typescript
import { getCardsByArcana } from '@cometpisces/tarot-kit';

// Get all Major Arcana cards
const majorArcana = getCardsByArcana('major');

// Get all Minor Arcana cards
const minorArcana = getCardsByArcana('minor');
```

### Localization

```typescript
import { getLocalizedText } from '@cometpisces/tarot-kit';

const fool = getCardById('major-00-fool');

// Get name in different languages
const nameInEnglish = getLocalizedText(fool.name, 'en'); // "The Fool"
const nameInChinese = getLocalizedText(fool.name, 'zh'); // "愚者"
```

## TypeScript Support

This package is written in TypeScript and includes full type definitions.

```typescript
import type { 
  TarotCard, 
  DrawnCard, 
  CardOrientation,
  TarotCardMeaning 
} from '@cometpisces/tarot-kit';

const card: TarotCard = getCardById('major-00-fool');
const drawn: DrawnCard = drawRandomCard();
const orientation: CardOrientation = 'upright';
```

## Card Data Structure

Each card includes:

- **Basic Info**: ID, name (localized), arcana type, suit (for Minor Arcana)
- **Meanings**: Upright and reversed interpretations
- **Reading Aspects**: Context-specific meanings (love, career, spiritual, shadow)
- **Metadata**: Keywords, numerology, astrology, elemental associations, and symbolism

## License

MIT

## Contributing

This package is part of the [arcana-nyx](https://github.com/cometpisces/arcana-nyx) project.

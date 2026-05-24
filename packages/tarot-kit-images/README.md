# @cometpisces/tarot-kit-images

78 Rider-Waite tarot card images with TypeScript helpers for building tarot reading applications.

> 💡 **Companion package to [@cometpisces/tarot-kit](https://www.npmjs.com/package/@cometpisces/tarot-kit)** - install both for a complete tarot solution with card data, meanings, and images.

## Installation

```bash
npm install @cometpisces/tarot-kit-images
# or
pnpm add @cometpisces/tarot-kit-images
# or
yarn add @cometpisces/tarot-kit-images
```

## What's Included

- � **78 high-quality Rider-Waite card images** (PNG format)
  - 22 Major Arcana (The Fool through The World)
  - 56 Minor Arcana (Cups, Pentacles, Swords, Wands - Ace through King)
- 🗺️ **TypeScript image mapping utilities** for easy card ID → filename resolution
- 📦 **Framework agnostic** - works with React, Vue, Next.js, Vite, and more
- 🔍 **Helper functions** to check image availability and get all image paths

## Quick Start

### Basic Usage

```typescript
import { getImagePath } from '@cometpisces/tarot-kit-images';

// Get image filename for a card
const foolImage = getImagePath('major-00-fool');
console.log(foolImage); // "00-TheFool.png"
```

### Direct Image Import

```typescript
// Import specific images directly
import foolImage from "@cometpisces/tarot-kit-images/images/00-TheFool.png";
```

### Complete Example with @cometpisces/tarot-kit

```typescript
import { getCardById, drawRandomCard } from '@cometpisces/tarot-kit';
import { getImagePath } from '@cometpisces/tarot-kit-images';

// Get a specific card with its image
const fool = getCardById('major-00-fool');
const imagePath = getImagePath(fool.id);
console.log(`${fool.name.en}: ${imagePath}`);
// Output: "The Fool: 00-TheFool.png"

// Draw a random card
const drawn = drawRandomCard();
const drawnImagePath = getImagePath(drawn.card.id);
console.log(`Drew ${drawn.card.name.en} (${drawn.orientation})`);
```

## Framework Integration

### React / Next.js

```tsx
import { useState } from 'react';
import { drawRandomCard } from '@cometpisces/tarot-kit';
import { getImagePath } from '@cometpisces/tarot-kit-images';

function TarotCard() {
  const [drawn] = useState(() => drawRandomCard());
  const imagePath = getImagePath(drawn.card.id);

  return (
    <div className="card">
      <img
        src={`/tarot/${imagePath}`}
        alt={drawn.card.name.en}
        className={drawn.orientation === 'reversed' ? 'rotate-180' : ''}
      />
      <h2>{drawn.card.name.en}</h2>
      <p>{drawn.orientation}</p>
    </div>
  );
}
```

### Three-Card Spread Example

```tsx
import { drawCards } from '@cometpisces/tarot-kit';
import { getImagePath } from '@cometpisces/tarot-kit-images';

function ThreeCardSpread() {
  const spread = drawCards(3);
  const positions = ['Past', 'Present', 'Future'];

  return (
    <div className="spread">
      {spread.map((drawn, index) => (
        <div key={drawn.card.id} className="position">
          <h3>{positions[index]}</h3>
          <img
            src={`/tarot/${getImagePath(drawn.card.id)}`}
            alt={drawn.card.name.en}
            className={drawn.orientation === 'reversed' ? 'rotate-180' : ''}
          />
          <p>{drawn.card.name.en} ({drawn.orientation})</p>
        </div>
      ))}
    </div>
  );
}
```

## API Reference

### `getImagePath(cardId: string): string | undefined`

Get the image filename for a card by its ID.

```typescript
import { getImagePath } from '@cometpisces/tarot-kit-images';

const imagePath = getImagePath('major-00-fool'); // "00-TheFool.png"
const missing = getImagePath('invalid-id');       // undefined
```

**Parameters:**
- `cardId` - The card ID from @cometpisces/tarot-kit (e.g., 'major-00-fool', 'cups-05', 'swords-14-king')

**Returns:**
- The image filename (e.g., '00-TheFool.png') or `undefined` if not found

---

### `getAllImagePaths(): string[]`

Get an array of all available image filenames.

```typescript
import { getAllImagePaths } from '@cometpisces/tarot-kit-images';

const allImages = getAllImagePaths();
console.log(allImages.length); // 78

// Example: preload all images
allImages.forEach(filename => {
  const img = new Image();
  img.src = `/tarot/${filename}`;
});
```

**Returns:**
- Array of all 78 image filenames

---

### `hasImage(cardId: string): boolean`

Check if an image exists for a given card ID.

```typescript
import { hasImage } from '@cometpisces/tarot-kit-images';

if (hasImage('major-00-fool')) {
  // Safe to use getImagePath
  const path = getImagePath('major-00-fool');
}
```

**Parameters:**
- `cardId` - The card ID to check

**Returns:**
- `true` if an image exists, `false` otherwise

---

### `imageMap: Record<string, string>`

The complete mapping object of card IDs to filenames.

```typescript
import { imageMap } from '@cometpisces/tarot-kit-images';

console.log(imageMap['major-00-fool']); // "00-TheFool.png"

// Iterate over all mappings
Object.entries(imageMap).forEach(([cardId, filename]) => {
  console.log(`${cardId} -> ${filename}`);
});
```

---

## Image Naming Convention

All images follow a consistent naming pattern:

- **Major Arcana**: `00-TheFool.png` through `21-TheWorld.png`
- **Cups**: `Cups01.png` through `Cups14.png` (01 = Ace, 11 = Page, 12 = Knight, 13 = Queen, 14 = King)
- **Pentacles**: `Pentacles01.png` through `Pentacles14.png`
- **Swords**: `Swords01.png` through `Swords14.png`
- **Wands**: `Wands01.png` through `Wands14.png`

> **Note**: Card back images are not included. Design your own or use a placeholder for face-down cards.

---

## TypeScript Support

Full TypeScript definitions included with type-safe exports.

```typescript
import type { } from '@cometpisces/tarot-kit-images';
import { getImagePath, getAllImagePaths, hasImage } from '@cometpisces/tarot-kit-images';

// Type-safe usage
const path: string | undefined = getImagePath('major-00-fool');
const allPaths: string[] = getAllImagePaths();
const exists: boolean = hasImage('cups-05');
```

**Combined with @cometpisces/tarot-kit:**

```typescript
import type { TarotCard, DrawnCard } from '@cometpisces/tarot-kit';
import { getCardById, drawRandomCard } from '@cometpisces/tarot-kit';
import { getImagePath } from '@cometpisces/tarot-kit-images';

const card: TarotCard = getCardById('major-00-fool');
const imagePath: string | undefined = getImagePath(card.id);

const drawn: DrawnCard = drawRandomCard();
const drawnPath: string | undefined = getImagePath(drawn.card.id);
```

## Project Setup

### Next.js (App Router or Pages Router)

**Option 1: Copy to public folder (recommended)**

```bash
# Copy images to public/tarot/
cp -r node_modules/@cometpisces/tarot-kit-images/images public/tarot
```

Then use in components:
```tsx
<img src={`/tarot/${imagePath}`} alt={card.name.en} />
```

**Option 2: Use Next.js Image component**

```tsx
import Image from 'next/image';
import { getImagePath } from '@cometpisces/tarot-kit-images';

const imagePath = getImagePath('major-00-fool');

<Image
  src={`/tarot/${imagePath}`}
  alt="The Fool"
  width={300}
  height={500}
/>
```

### Vite / Create React App

**Copy images to public folder:**

```bash
cp -r node_modules/@cometpisces/tarot-kit-images/images public/tarot
```

**Use in components:**
```tsx
<img src={`/tarot/${getImagePath(card.id)}`} alt={card.name.en} />
```

### Vue.js

```vue
<script setup>
import { getCardById } from '@cometpisces/tarot-kit';
import { getImagePath } from '@cometpisces/tarot-kit-images';

const card = getCardById('major-00-fool');
const imagePath = getImagePath(card.id);
</script>

<template>
  <div class="card">
    <img :src="`/tarot/${imagePath}`" :alt="card.name.en" />
    <h2>{{ card.name.en }}</h2>
  </div>
</template>
```

---

## Direct Image Imports

You can also import images directly (useful for bundlers like Webpack/Vite):

```typescript
// Import a specific image
import foolImage from '@cometpisces/tarot-kit-images/images/00-TheFool.png';

// Use in a component
<img src={foolImage} alt="The Fool" />
```

---

## Tips & Best Practices

### Preloading Images

For better UX, preload images before showing them:

```typescript
import { getAllImagePaths } from '@cometpisces/tarot-kit-images';

function preloadImages(imagePaths: string[]) {
  imagePaths.forEach(path => {
    const img = new Image();
    img.src = `/tarot/${path}`;
  });
}

// Preload all cards
preloadImages(getAllImagePaths());
```

### Handling Missing Images

Always check if an image exists before using it:

```typescript
import { hasImage, getImagePath } from '@cometpisces/tarot-kit-images';

function getCardImageSrc(cardId: string): string {
  if (hasImage(cardId)) {
    return `/tarot/${getImagePath(cardId)}`;
  }
  return '/tarot/placeholder.png'; // Fallback image
}
```

### Responsive Images

Use CSS or Next.js Image for responsive card images:

```css
.tarot-card {
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.tarot-card.reversed {
  transform: rotate(180deg);
}
```

---

## Package Size

- **Total package size**: ~15-20 MB (includes all 78 card images)
- **Individual image size**: ~200-300 KB per card
- **Installed size**: ~20-25 MB

Consider your deployment strategy:
- ✅ **Copy to public folder**: Recommended for most projects
- ✅ **CDN hosting**: For better performance and caching
- ⚠️ **Bundle with app**: May increase initial bundle size

---

## License

### Code & Mappings

The TypeScript code and image mappings are licensed under the **MIT License**.

### Rider-Waite Images

⚠️ **Important**: The Rider-Waite tarot card images are believed to be in the **public domain** in many jurisdictions due to their age (original publication 1909). However:

- Copyright status may vary by country
- Some jurisdictions may have different rules for commercial use
- Derivative works may have additional restrictions

**Before using commercially:**
1. Verify public domain status in your jurisdiction
2. Consult with a legal professional if needed
3. Consider using your own artwork for commercial projects

This package distributor makes no warranties regarding the copyright status of the images and assumes no liability for their use.

---

## Companion Package

Use with [@cometpisces/tarot-kit](https://www.npmjs.com/package/@cometpisces/tarot-kit) for complete tarot card data and utilities:

- 📖 Card meanings (upright & reversed)
- 🔮 Reading aspects (love, career, spiritual, shadow)
- 🎲 Helper functions for card drawing
- 🌍 Localization support (English & Chinese)
- 📘 Full TypeScript definitions

```bash
npm install @cometpisces/tarot-kit @cometpisces/tarot-kit-images
```

---

## Contributing

This package is part of the [arcana-nyx](https://github.com/cometpisces/arcana-nyx) project. Contributions, issues, and feature requests are welcome!


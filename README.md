# Asset Preference Profiler

A beautiful, interactive personality-style quiz that helps users discover their prediction style across different market categories. Built with a soft, MEW-inspired aesthetic featuring pastel colors, smooth animations, and delightful illustrations.

![Asset Preference Profiler](https://via.placeholder.com/800x400?text=Asset+Preference+Profiler)

## Features

- 🎨 **MEW-inspired Design** - Soft pastel colors, rounded corners, and cozy illustrations
- 📱 **Mobile-first & Responsive** - Works beautifully on all device sizes
- ⚡ **Client-side Only** - No backend required, all state managed in browser
- 🎭 **6 Unique Profiles** - Meme Hunter, Layer2 Explorer, AI Theorist, Macro Forecaster, Election Strategist, Sports Predictor
- 🔗 **Share Your Results** - Share to X (Twitter) or copy link to clipboard
- ✨ **Smooth Animations** - Fade, slide, and float animations for delightful UX

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Clone or navigate to the project
cd asset-preference-profiler

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and Tailwind config
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main app component with state management
├── components/
│   ├── Illustration.tsx # Cute SVG illustrations
│   ├── IntroScreen.tsx  # Welcome screen
│   ├── QuestionScreen.tsx # Quiz questions
│   ├── ResultScreen.tsx # Final results + sharing
│   ├── Toast.tsx        # Notification component
│   └── index.ts         # Component exports
├── data/
│   ├── questions.ts     # 10 quiz questions with weights
│   └── profiles.ts      # 6 profile definitions
└── types/
    └── index.ts         # TypeScript types
```

## Scoring Logic

Each answer adds weighted points to one or more categories:
- **meme** - Memecoins and culture
- **l2** - Layer 2 ecosystems
- **ai** - AI and automation
- **macro** - Macroeconomic events
- **elections** - Political outcomes
- **sports** - Sports markets

After all 10 questions, the category with the highest score determines your profile. Ties are broken by category order (meme > l2 > ai > macro > elections > sports).

## Customization

### Adding Questions

Edit `src/data/questions.ts` to add or modify questions:

```typescript
{
  id: 11,
  title: "Your new question?",
  options: [
    { label: "Option A", weights: { meme: 2 } },
    { label: "Option B", weights: { l2: 1, ai: 1 } },
  ],
}
```

### Modifying Profiles

Edit `src/data/profiles.ts` to customize profile names, descriptions, colors, or recommended markets.

### Changing Colors

The pastel color palette is defined in `tailwind.config.ts` under `theme.extend.colors.mew` and `theme.extend.colors.primary`.

## Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to a Git repository
2. Import the project to Vercel
3. Vercel will automatically detect Next.js and configure the build

## License

MIT License - feel free to use this for your own projects!


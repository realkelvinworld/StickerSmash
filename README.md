# StickerSmash

This is my first React Native application using Expo that lets you pick images from your device gallery and add emoji stickers to them and you save and use. Built with TypeScript and modern React Native patterns.

## Features

- 📸 Pick images from your device gallery
- ✨ Add emoji stickers to images
- 🎨 Clean, intuitive UI with tab navigation
- 📱 Cross-platform (iOS, Android, Web)

## Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: Expo Router with bottom tab navigation
- **Icons**: Expo Vector Icons (MaterialIcons, Ionicons, FontAwesome)
- **Image Handling**: expo-image-picker, expo-image

## Getting Started

### Prerequisites

- Node.js (v20+)
- pnpm (or npm/yarn)

### Installation

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start the app:

   ```bash
   npx expo start
   ```

3. Open in:
   - **Expo Go**: Scan QR code with Expo Go app
   - **Android Emulator**: Press `a`
   - **iOS Simulator**: Press `i`
   - **Web**: Press `w`

## Project Structure

```
app/                    # App routes (Expo Router)
├── (tabs)/             # Tab-based navigation
│   ├── index.tsx       # Main screen (image + stickers)
│   ├── about.tsx       # About screen
│   └── _layout.tsx     # Tab layout config
└── _layout.tsx         # Root layout

components/            # Reusable components
├── buttons/           # Button components
├── emoji/             # Emoji picker component
├── image-viewer.tsx   # Image display component
└── index.ts          # Component exports

assets/               # Images and static assets
```

## Available Scripts

- `npm start` - Start the development server
- `npm run android` - Run on Android emulator
- `npm run ios` - Run on iOS simulator
- `npm run web` - Run on web browser
- `npm run lint` - Run ESLint

## Learn More

- [Expo Documentation](https://docs.expo.dev)
- [React Native Docs](https://reactnative.dev)
- [Expo Router Guide](https://docs.expo.dev/router/introduction)

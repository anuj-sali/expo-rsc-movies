# Expo RSC Movies - Project Summary

## Overview
Expo RSC Movies is a cross-platform mobile application built with React Native and Expo, leveraging React Server Components (RSC) for efficient data fetching and rendering. The app provides users with access to a vast library of movies and TV shows, powered by the TMDB (The Movie Database) API.

## Architecture

### Client-Side (React Native)
- **UI Components** (`/components/`)
  - `components/ui/` - Core UI components (Buttons, Forms, Headers)
  - `components/layout/` - Layout components and navigation wrappers
  - `components/HapticTab.tsx` - Custom tab bar component with haptic feedback
  - `components/ShowMore.tsx` - Expandable content component
  - `components/SearchPlaceholder.tsx` - Search UI component
  - `components/img.tsx` - Custom image component
  - `components/usable-component.tsx` - Reusable component utilities
  - `components/show-header-background.tsx` - Header component for show/movie details

- **Navigation & Routing**
  - `app/_layout.tsx` - Root layout and navigation setup
  - `app/(index)/_layout.tsx` - Main tab navigation layout
  - `app/(settings)/_layout.tsx` - Settings navigation layout
  - `components/layout/modalNavigator.tsx` - Modal navigation implementation
  - `components/layout/modalNavigator.web.tsx` - Web-specific modal navigation

- **State Management & Hooks**
  - `components/ui/ThemeProvider.tsx` - Theme management
  - Custom hooks in various component files

### Server-Side (Node.js)
- **API Routes** (`/app/api/`)
  - `app/(redirects)/github+api.ts` - GitHub API redirects
  - `app/(redirects)/testflight+api.ts` - TestFlight redirects

- **Server Components**
  - `app/(index)/movie/[id].tsx` - Movie details page
  - `app/(index)/person/[id].tsx` - Person details page
  - `app/(index)/show/[id].tsx` - TV show details page
  - `app/(settings)/index.tsx` - Settings page
  - `app/(index)/index.tsx` - Home screen

- **Data Fetching**
  - `functions/fixtures/` - Mock data for development
  - `functions/render-movie-details.ts` - Movie data fetching logic
  - `functions/render-person-details.ts` - Person data fetching logic
  - `functions/render-search.ts` - Search functionality

### External Services
- **TMDB API**
  - Integration points in various page components
  - API client implementation in data fetching utilities

- **Image CDN**
  - Used through custom `img.tsx` component
  - Handled by Expo's Image component with optimized caching

### Build & Deployment
- **Configuration**
  - `app.json` - Expo configuration
  - `eas.json` - EAS (Expo Application Services) configuration
  - `expo-env.d.ts` - TypeScript declarations for Expo

## Application Flow

### Authentication Flow
1. App Launch → `app/_layout.tsx`
2. Authentication Check
   - If not authenticated: Onboarding → Sign In/Up → Home Screen
   - If authenticated: Direct to Home Screen

### Main Navigation (`app/(index)/_layout.tsx`)
- **Home Tab**: `app/(index)/index.tsx`
- **Search Tab**: Handled by `components/SearchPlaceholder.tsx`
- **Favorites Tab**: Implementation pending
- **Profile Tab**: `app/(settings)/index.tsx`

### Content Details
- **Movie Details**: `app/(index)/movie/[id].tsx`
- **TV Show Details**: `app/(index)/show/[id].tsx`
- **Person Details**: `app/(index)/person/[id].tsx`

## Technical Implementation

### Data Flow
1. User interacts with UI components
2. Expo Router handles navigation between screens
3. Server Components fetch required data through API routes
4. TMDB API Client retrieves data from the external TMDB service
5. Data flows back through the application layers to update the UI

### Key Features
- **Responsive Design**: Adaptive layouts in `components/layout/`
- **Performance**: Optimized with React Server Components
- **Theming**: Managed by `components/ui/ThemeProvider.tsx`
- **Navigation**: Custom tab and modal navigation

## Development & Deployment

### Development Tools
- **Expo**: Configured in `app.json` and `eas.json`
- **TypeScript**: Type definitions throughout the project
- **ESLint**: Configured in `eslint.config.js`

### Build & Deployment
1. **Development**: Using Expo Go for rapid iteration
2. **Testing**: On both simulators and physical devices
3. **Production Build**: Using EAS Build (configured in `eas.json`)
4. **Distribution**: Through app stores (iOS App Store, Google Play Store) and web

## Dependencies
- React Native & Expo SDK
- React Navigation
- expo-router
- react-native-reanimated
- expo-blur
- expo-haptics
- @bacons/apple-colors
- expo-symbols
- react-native-screens

## Viewing the Diagrams
1. **VS Code**: Install "Markdown Preview Mermaid Support" extension
2. **Online**: Use [Mermaid Live Editor](https://mermaid.live/)
3. **GitHub**: View directly in GitHub (renders automatically)

## Future Enhancements
- Implement user authentication
- Add favorites functionality
- Enhance search with filters
- Implement user reviews and ratings
- Add social sharing features
- Support for multiple languages
- Additional content providers

## License
[Specify License]

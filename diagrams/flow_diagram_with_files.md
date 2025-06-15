# Expo RSC Movies - Component Flow with File Mappings

```mermaid
flowchart TD
    %% Main Layout and Navigation
    A["App Entry"] --> B["Root Layout"]
    B --> C["Tab Navigation"]
    C --> D["Search Tab"]
    C --> E["Settings Tab"]
    
    %% Search Flow
    D --> F["Home Screen"]
    F --> G["Search UI"]
    G --> H["Search Logic"]
    H --> I["Movie Details"]
    H --> J["Show Details"]
    H --> K["Person Details"]
    
    %% Data Fetching
    H --> L["TMDB API Client"]
    I & J & K --> L
    
    %% UI Components
    subgraph "UI Components"
        M["Media Cards"]
        N["Headers"]
        O["Forms"]
        P["Icons"]
    end
    
    %% State Management
    subgraph "State & Hooks"
        Q["useHeaderSearch"]
        R["useColorScheme"]
    end
    
    %% Theming
    subgraph "Theming"
        S["ThemeProvider"]
        T["Colors"]
    end
    
    %% Data Flow
    F -->|Uses| G
    G -->|Fetches via| H
    H -->|Renders| I & J & K
    I & J & K -->|Use| M & N & O & P
```

## File Mappings

| Component | File Path |
|-----------|-----------|
| **App Entry** | `app/_layout.tsx` |
| **Root Layout** | `app/_layout.tsx` |
| **Tab Navigation** | `components/ui/Tabs.tsx` |
| **Search Tab** | `app/(index)/_layout.tsx` |
| **Settings Tab** | `app/(settings)/_layout.tsx` |
| **Home Screen** | `app/(index)/index.tsx` |
| **Search UI** | `app/(index)/index.tsx` (SearchPage component) |
| **Search Logic** | `hooks/useHeaderSearch.ts` |
| **Movie Details** | `app/(index)/movie/[id].tsx` |
| **Show Details** | `app/(index)/show/[id].tsx` |
| **Person Details** | `app/(index)/person/[id].tsx` |
| **TMDB API Client** | `functions/render-search.tsx`<br>`functions/render-movie-details.tsx`<br>`functions/render-person-details.tsx` |
| **Media Cards** | `components/MediaCard.tsx` |
| **Headers** | `components/ui/Header.tsx` |
| **Forms** | `components/ui/Form.tsx` |
| **Icons** | `components/ui/IconSymbol.tsx`<br>`components/ui/IconSymbol.ios.tsx` |
| **useHeaderSearch** | `hooks/useHeaderSearch.ts` |
| **useColorScheme** | `hooks/useColorScheme.ts`<br>`hooks/useColorScheme.web.ts` |
| **ThemeProvider** | `components/ui/ThemeProvider.tsx` |
| **Colors** | `@bacons/apple-colors` |
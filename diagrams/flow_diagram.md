# Expo RSC Movies - Detailed Flow Diagram

```mermaid
flowchart TD
    %% Main Entry Point
    A[App Launch] --> B[Splash Screen]
    B --> C{Is Authenticated?}
    
    %% Authentication Flow
    C -->|No| D[Onboarding]
    D --> E[Sign In / Sign Up]
    E -->|Success| F[Home Screen]
    C -->|Yes| F
    
    %% Main Navigation
    F --> G[Tab Navigator]
    G --> H[Home Tab]
    G --> I[Search Tab]
    G --> J[Favorites Tab]
    G --> K[Profile Tab]
    
    %% Home Tab Flows
    H --> L[Featured Content]
    H --> M[Trending Now]
    H --> N[Top Rated]
    H --> O[Upcoming]
    
    %% Search Flow
    I --> P[Search Bar]
    P --> Q[Search Results]
    Q --> R[Movie/Show/Person]
    
    %% Content Details Flow
    R --> S[Content Details]
    S --> T[View Trailer]
    S --> U[Read Reviews]
    S --> V[View Cast & Crew]
    S --> W[Similar Content]
    
    %% Favorites Flow
    J --> X[Favorites List]
    X --> Y[View Favorite]
    Y --> S
    
    %% Profile Flow
    K --> Z[User Profile]
    Z --> AA[Watchlist]
    Z --> AB[Ratings]
    Z --> AC[Settings]
    
    %% Settings Flow
    AC --> AD[Appearance]
    AC --> AE[Notifications]
    AC --> AF[Account]
    AC --> AG[Help & Support]
    AC --> AH[Sign Out]
    
    %% API Interactions
    subgraph "Server & API"
        API[TMDB API] -->|Fetch Data| SVC[Services]
        SVC -->|Process| DATA[(Local Storage)]
    end
    
    %% Data Flow
    H & I & J & K -->|API Calls| API
    API -->|Response| H & I & J & K
    
    %% UI Components
    subgraph "UI Components"
        UI1[Media Cards]
        UI2[Carousels]
        UI3[Ratings]
        UI4[Backdrops]
        UI5[Posters]
    end
    
    %% Styling
    %%classDef tab fill:#e1f5fe,stroke:#0288d1,stroke-width:2px
    %%classDef screen fill:#e8f5e9,stroke:#388e3c,stroke-width:2px
    %%classDef api fill:#f3e5f5,stroke:#8e24aa,stroke-width:2px
    %%classDef ui fill:#fff3e0,stroke:#f57c00,stroke-width:2px
    
    %%class H,I,J,K tab
    %%class L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC screen
    %%class API,SVC,DATA api
    %%class UI1,UI2,UI3,UI4,UI5 ui
```

## How to View

1. **VS Code**: 
   - Install the "Markdown Preview Mermaid Support" extension
   - Open this file and click the preview button (or press `Ctrl+Shift+V`)

2. **Online**:
   - Copy the Mermaid code (between the triple backticks)
   - Go to [Mermaid Live Editor](https://mermaid.live/)
   - Paste the code to see the diagram

3. **GitHub**:
   - The diagram will render automatically in GitHub markdown

## Key Components

1. **Navigation Flow**:
   - Tab-based navigation between main sections
   - Stack navigation for content details
   - Modal screens for additional actions

2. **Data Flow**:
   - API calls to TMDB for movie/show data
   - Local storage for user preferences and favorites
   - Caching for better performance

3. **UI Components**:
   - Reusable media cards
   - Responsive carousels
   - Rating components
   - Image loaders with placeholders

4. **User Flows**:
   - Browse content by categories
   - Search functionality
   - View details and related content
   - Manage favorites and watchlist
   - User profile and settings

## Dependencies
- Mermaid.js (for rendering the diagram)
- React Navigation (for app navigation)
- Expo (for cross-platform development)
- TMDB API (for movie/show data)

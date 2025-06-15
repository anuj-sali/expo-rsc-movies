# Expo RSC Movies - Sequence Diagram

```mermaid
sequenceDiagram
    participant User
    participant UI as React Native UI
    participant Router as Expo Router
    participant Server as Server Components
    participant API as TMDB API

    User->>UI: Enters search query
    UI->>Router: Navigate to search results
    Router->>Server: Render search results
    Server->>API: Fetch movies/shows/people
    API-->>Server: Return search results
    Server-->>Router: Rendered React elements
    Router-->>UI: Display search results
    
    User->>UI: Selects a movie/show
    UI->>Router: Navigate to details
    Router->>Server: Render details page
    Server->>API: Fetch details
    API-->>Server: Return details
    Server-->>Router: Rendered details
    Router-->>UI: Display details
```

## How to View

1. **VS Code**: Install the "Markdown Preview Mermaid Support" extension and open the preview
2. **Online**: Copy the diagram code to [Mermaid Live Editor](https://mermaid.live/)
3. **GitHub**: The diagram will render automatically in GitHub markdown
4. **Local**: Use `mermaid-cli` to generate an image file

## Dependencies
- Mermaid.js (for rendering the diagram)

# Portfolio Frontend

The client-side application for Federico Irarrazaval's personal portfolio. It is a single-page React application that presents professional information, projects, work experience, and allows visitors to send messages and leave comments.

---

## Tech Stack

| Category | Tool / Library |
|---|---|
| Build | [Vite](https://vitejs.dev/) + `@vitejs/plugin-react-swc` |
| Language | TypeScript 5 (strict mode) |
| UI Library | React 18 |
| Routing | React Router v6 |
| State Management | Redux Toolkit + react-redux |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Toasts | react-hot-toast |
| HTTP Client | Axios |
| Date Utilities | date-fns |
| Icons | react-icons |
| Linter / Formatter | Biome |

---

## Project Structure

```
client/
├── index.html                      # Vite HTML entry point
├── vite.config.ts                  # Vite configuration
├── tsconfig.json                   # TypeScript configuration
├── vite-env.d.ts                   # ImportMetaEnv + asset type declarations
├── tailwind.config.js              # Tailwind theme and custom colors
├── postcss.config.js               # PostCSS (tailwind + autoprefixer)
├── biome.json                      # Linter / formatter rules
├── .env                            # Environment variables (VITE_ prefix)
└── src/
    ├── index.tsx                   # Application bootstrap (ReactDOM root)
    ├── App.tsx                     # Route definitions (lazy-loaded)
    ├── index.css                   # Global styles: Tailwind directives + custom CSS
    ├── Assets/                     # Static assets (images, PDFs, GIFs)
    │   ├── images/                 # Dynamic assets loaded via import.meta.glob
    │   │   ├── skills/             # Hexagon skill card images
    │   │   ├── tech-icons/         # Technology icon images
    │   │   ├── course-icons/       # Course provider icon images
    │   │   └── other-projects/     # Minor project preview images
    │   ├── portfolio_General/      # Site-wide images (landing GIF, profile pic, logo)
    │   ├── projects/               # Featured project images and logos
    │   ├── Project_Kinema_Carrousel/
    │   ├── Project_Gaming_Carrousel/
    │   ├── education/              # Education institution logos
    │   ├── experience/             # Work experience company logos
    │   ├── courses/                # Programming course provider images
    │   └── resumesCV/              # PDF resume files (English, Spanish, Both)
    ├── lib/
    │   └── axios/
    │       └── axiosInstance.ts    # Configured Axios instance (baseURL from env)
    ├── redux/
    │   ├── store.ts                # RTK store; exports RootState and AppDispatch
    │   └── hooks.ts                # Typed useAppDispatch and useAppSelector
    ├── utils/
    │   ├── types.ts                # All shared TypeScript interfaces
    │   ├── auth.ts                 # Token refresh logic on app boot
    │   ├── toast.ts                # showToast() wrapper around react-hot-toast
    │   └── comments.ts             # createComment() and validateMinLength() helpers
    └── features/
        ├── Auth/
        │   ├── pages/
        │   │   ├── LoginPage.tsx
        │   │   └── RegisterPage.tsx
        │   ├── service/authService.ts
        │   └── state/authSlice.ts
        ├── Comments/
        │   ├── components/
        │   │   ├── Comments.tsx    # Container: fetches, manages form state
        │   │   ├── CommentList.tsx
        │   │   ├── CommentCard.tsx
        │   │   └── CommentForm.tsx
        │   ├── service/commentsService.ts
        │   └── state/commentsSlice.ts
        ├── Contact/
        │   ├── components/Contact.tsx
        │   ├── service/emailService.ts
        │   └── state/emailSlice.ts
        ├── Navigation/
        │   └── components/NavBar.tsx
        └── Portfolio/
            ├── pages/PortfolioPage.tsx  # Main page: composes all sections
            ├── components/
            │   ├── Landing.tsx
            │   ├── Skills.tsx
            │   ├── AboutSection.tsx
            │   ├── TechCard.tsx
            │   ├── Projects.tsx
            │   ├── ProjectCarousel.tsx
            │   ├── OtherProjects.tsx
            │   ├── Experience.tsx
            │   ├── Background.tsx       # Custom accordion
            │   ├── BackgroundCourses.tsx
            │   ├── BackgroundExperience.tsx
            │   ├── BackgroundEducation.tsx
            │   ├── TimelineCard.tsx     # Reusable timeline item
            │   └── Footer.tsx
            ├── service/fileService.ts
            ├── state/fileSlice.ts
            └── config/
                ├── technologies.json
                ├── backgroundCourses.json
                └── minorProjects.json
```

---

## Entry Points and Bootstrap Flow

1. `index.html` — contains `<div id="root">` and loads `/src/index.tsx`
2. `src/index.tsx` — calls `refreshTokenBeforeExpiration()` synchronously, then mounts the React tree wrapped in `<Provider>`, `<BrowserRouter>`, and renders `<Toaster />`
3. `src/App.tsx` — defines routes using `<Routes>` inside `<Suspense>` and `<AnimatePresence>`. All page components are lazy-loaded
4. `PortfolioPage` composes the full single-page layout by rendering each section in order

---

## Routing

React Router v6 (`BrowserRouter`). Three routes are defined:

| Path | Component | Notes |
|---|---|---|
| `/` | `PortfolioPage` | Main portfolio, one long scrollable page |
| `/login` | `LoginPage` | Login form |
| `/register` | `RegisterPage` | Registration form |
| `*` | Redirect to `/` | Unknown paths |

All routes are lazy-loaded with `React.lazy`. The wildcard redirects everything else to the root.

The `PortfolioPage` uses a scroll listener (`window.addEventListener('scroll', ...)`) to underline the active nav link by comparing section positions with `getBoundingClientRect().top`.

---

## State Management

Redux Toolkit. The store is at `src/redux/store.ts` and combines four slices:

| Slice | Key | Purpose |
|---|---|---|
| `authSlice` | `auth` | Login, signup, token refresh, logout. Persisted to `localStorage` under key `portfolio_user` |
| `commentsSlice` | `comments` | Fetch all comments, post a new comment |
| `emailSlice` | `email` | Send contact form email; `resetEmailState` reducer clears success/error |
| `fileSlice` | `file` | Download a PDF file (authenticated) and open it in a new tab |

All async actions use `createAsyncThunk`. Error messages are stored in slice state and surfaced via `showToast()`.

Always use the typed hooks from `src/redux/hooks.ts`:
```ts
const dispatch = useAppDispatch();
const user = useAppSelector((state) => state.auth.user);
```

Auth state is read from `localStorage` at startup (`loadUserFromStorage`) and written back on login / token refresh.

---

## API / Service Layer

A single Axios instance at `src/lib/axios/axiosInstance.ts` is shared by all service modules:

```ts
const baseURL = import.meta.env.VITE_PRODUCTION_URL || import.meta.env.VITE_DEVELOPMENT_URL;
```

Each feature has its own `service/` file that exports plain async functions:

```ts
// example
export const loginRequest = (credentials: AuthCredentials) =>
  axiosInstance.post<User>('/login', credentials);
```

Services are called only from thunks (`createAsyncThunk`), never directly from components. Authenticated endpoints pass the token as a `Bearer` header:

```ts
headers: { Authorization: `Bearer ${token}` }
```

---

## Styling

Tailwind CSS v3 with a custom theme defined in `tailwind.config.js`.

**Custom colors:**

| Token | Value | Usage |
|---|---|---|
| `primary` | `#172139` | Page background |
| `primary-dark` | `rgba(4,1,19,0.9)` | Navbar, cards, overlays |
| `primary-light` | `rgba(4,1,19,0.5)` | Form backgrounds, subtle overlays |
| `accent-green` | `#2ECC71` | Timeline dots (first item) |
| `accent-success` | `#006C00` | Timeline dots (other items) |

**Custom CSS classes (defined in `src/index.css`):**

| Class | Purpose |
|---|---|
| `.section-heading` | Standard `<h2>` style for every section title |
| `.custom-scrollbar` | Styled webkit scrollbar (used on the contact textarea) |
| `.flip-card`, `.flip-card-inner`, `.flip-card-front`, `.flip-card-back` | CSS 3D flip animation for minor project cards |
| `.hexagon-shape` | Polygon clip-path for skill hexagons |
| `.project-carousel` | Constrains carousel image height |

No CSS modules or component libraries are used. All layout is Tailwind utilities. Custom CSS is only added for animations or pseudo-elements that Tailwind cannot express.

---

## Reusable Components and Utilities

**Components:**
- `TimelineCard` — renders a timeline row with a date, logo, title, and arbitrary children. Used in `BackgroundCourses`, `BackgroundExperience`, `BackgroundEducation`
- `AccordionSection` (local to `Background.tsx`) — single-open accordion for the Experience section
- `ProjectCarousel` — custom image carousel accepting a `type: 'kinema' | 'gaming'` prop
- `TechCard` — renders a tech icon from `import.meta.glob`

**Utilities:**
- `showToast(options)` — always use this wrapper; never call `react-hot-toast` directly
- `createComment(token, username, content)` — builds a comment payload with the current date and a random ID
- `validateMinLength(str, min?)` — returns `true` if the string is shorter than `min` (default 5)
- `refreshTokenBeforeExpiration()` — called once at boot; dispatches logout or refresh depending on token age

---

## Environment Variables

Defined in `client/.env`. Vite requires the `VITE_` prefix.

| Variable | Purpose |
|---|---|
| `VITE_PRODUCTION_URL` | Backend base URL for production |
| `VITE_DEVELOPMENT_URL` | Backend base URL for local development |

The Axios instance uses `PRODUCTION_URL` if it is defined, otherwise falls back to `DEVELOPMENT_URL`. Both are typed in `vite-env.d.ts` as `ImportMetaEnv` fields.

---

## Scripts

Run from the `client/` directory:

| Script | Command | Purpose |
|---|---|---|
| `dev` | `vite` | Start dev server on port 3000 |
| `build` | `tsc --noEmit && vite build` | Type-check, then bundle to `build/` |
| `preview` | `vite preview` | Serve the production build locally |
| `lint` | `biome check src` | Lint and format check |
| `typecheck` | `tsc --noEmit` | Type-check without building |

---

## Conventions and Patterns

- All components use `FC` (or `FC<Props>`) from React. Props interfaces are defined in the same file as the component
- Framer Motion animations follow a shared `boxVariants` pattern: on mobile, only fade in (`opacity`); on desktop, slide in from the side (`x: ±1000`)
- `window.innerWidth` is read synchronously at render time to determine `isMobile`. This is not reactive to resize after mount (except in `Landing.tsx` which adds a resize listener)
- Static data (technologies, courses, minor projects) is stored as JSON in `features/Portfolio/config/` and typed via interfaces from `src/utils/types.ts`
- Dynamic images (tech icons, course icons, other-project images) are loaded with `import.meta.glob` at module level, then resolved by filename in the component
- The `<Toaster />` is rendered once in `index.tsx`. All toast calls go through `showToast()`
- Auth token and expiration are persisted to `localStorage`. On boot, `refreshTokenBeforeExpiration()` either refreshes or logs out the user silently
- Biome enforces: 2-space indent, single quotes, semicolons always, line width 100

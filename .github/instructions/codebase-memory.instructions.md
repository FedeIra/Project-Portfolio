---
description: 'Use when writing frontend code for the Portfolio client. Contains stack reference, folder map, critical rules, design tokens, animation/toast patterns, asset paths, routes, and Redux slices.'
applyTo: 'client/src/**'
---

# Codebase Memory — Portfolio Frontend

## Stack (quick reference)

| Layer      | Tool                                                              |
| ---------- | ----------------------------------------------------------------- |
| Build      | Vite 5 + `@vitejs/plugin-react-swc`                               |
| Language   | TypeScript 5, strict mode                                         |
| UI         | React 18                                                          |
| Router     | React Router v6 — `BrowserRouter`                                 |
| State      | Redux Toolkit (`createSlice` + `createAsyncThunk`)                |
| Styles     | Tailwind CSS v3, no CSS modules, no component libraries           |
| Animations | Framer Motion                                                     |
| Toasts     | react-hot-toast — always via `showToast()` wrapper                |
| HTTP       | Axios — single instance at `src/lib/axios/axiosInstance.ts`       |
| Icons      | react-icons                                                       |
| Linting    | Biome (2-space indent, single quotes, semicolons, line width 100) |

---

## Folder map

```
src/
├── features/
│   ├── Auth/           pages/ service/ state/
│   ├── Comments/       components/ service/ state/
│   ├── Contact/        components/ service/ state/
│   ├── Navigation/     components/
│   └── Portfolio/      components/ config/ pages/ service/ state/
├── lib/axios/          axiosInstance.ts
├── redux/              store.ts  hooks.ts
└── utils/              types.ts  auth.ts  toast.ts  comments.ts
```

---

## Critical rules

- `useAppDispatch` / `useAppSelector` — never the untyped hooks
- `showToast()` — never call `react-hot-toast` directly
- service files only — never call `axiosInstance` from a component
- All shared interfaces → `src/utils/types.ts`
- All new slices must be registered in `src/redux/store.ts`

---

## Tailwind custom tokens

| Token              | Value              | When to use             |
| ------------------ | ------------------ | ----------------------- |
| `bg-primary`       | `#172139`          | Page background         |
| `bg-primary-dark`  | `rgba(4,1,19,0.9)` | Cards, navbar, overlays |
| `bg-primary-light` | `rgba(4,1,19,0.5)` | Form inputs             |
| `text-white`       | —                  | Default text            |
| `accent-green`     | `#2ECC71`          | Timeline dots (first)   |
| `accent-success`   | `#006C00`          | Timeline dots (rest)    |

---

## Reusable CSS classes (src/index.css)

| Class                   | Use it for                                 |
| ----------------------- | ------------------------------------------ |
| `.section-heading`      | Every section `<h2>` on the portfolio page |
| `.custom-scrollbar`     | Scrollable containers                      |
| `.flip-card` + variants | Minor project flip cards                   |
| `.hexagon-shape`        | Clip-path for skill images                 |
| `.project-carousel`     | Carousel image sizing                      |

---

## Animation pattern (copy this)

```tsx
const isMobile = window.innerWidth < 769;
const boxVariants = isMobile
  ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1 } } }
  : { hidden: { opacity: 0, x: -1000 }, visible: { opacity: 1, x: 0, transition: { duration: 1 } } };

<motion.div
  initial={isMobile ? 'visible' : 'hidden'}
  whileInView="visible"
  viewport={{ once: true }}
  variants={boxVariants}
>
```

Use `x: -1000` (from left) or `x: 1000` (from right). On mobile, always start as `'visible'`.

---

## Toast pattern (copy this)

```ts
// fire-and-forget + side-effect via useEffect
const [submitted, setSubmitted] = useState(false);

useEffect(() => {
  if (submitted && !loading) {
    if (success)
      showToast({ title: 'Done.', description: '...', status: 'success' });
    else if (error)
      showToast({ title: 'Error.', description: '...', status: 'error' });
    setSubmitted(false);
    dispatch(resetMyState());
  }
}, [loading, success, error, submitted]);

const handleSubmit = () => {
  showToast({
    title: 'Loading.',
    description: '...',
    status: 'loading',
    duration: 2000,
  });
  setSubmitted(true);
  dispatch(myAsync(payload));
};
```

For inline handling (pages like Login), use `.unwrap()` + try/catch instead.

---

## Asset paths

| What                       | Path                                | How to import      |
| -------------------------- | ----------------------------------- | ------------------ |
| Tech icons                 | `src/Assets/images/tech-icons/`     | `import.meta.glob` |
| Course icons               | `src/Assets/images/course-icons/`   | `import.meta.glob` |
| Other project images       | `src/Assets/images/other-projects/` | `import.meta.glob` |
| Skill images               | `src/Assets/images/skills/`         | static `import`    |
| Landing / profile / logo   | `src/Assets/portfolio_General/`     | static `import`    |
| Featured project images    | `src/Assets/projects/`              | static `import`    |
| Carousel (Kinema / Gaming) | `src/Assets/Project_*_Carrousel/`   | static `import`    |
| Education logos            | `src/Assets/education/`             | static `import`    |
| Experience logos           | `src/Assets/experience/`            | static `import`    |
| Course provider images     | `src/Assets/courses/`               | static `import`    |
| PDF resumes                | `src/Assets/resumesCV/`             | static `import`    |

`import.meta.glob` glob pattern must use lowercase `assets/images/...` (Windows is case-insensitive but Vite is not).

---

## Routes

| Path        | Component       | Notes       |
| ----------- | --------------- | ----------- |
| `/`         | `PortfolioPage` | Lazy-loaded |
| `/login`    | `LoginPage`     | Lazy-loaded |
| `/register` | `RegisterPage`  | Lazy-loaded |
| `*`         | Redirect to `/` |             |

---

## Redux slices

| Key        | Slice           | Async actions                                                       |
| ---------- | --------------- | ------------------------------------------------------------------- |
| `auth`     | `authSlice`     | `loginAsync`, `signupAsync`, `refreshTokenAsync` + `logout` reducer |
| `comments` | `commentsSlice` | `getCommentsAsync`, `postCommentAsync`                              |
| `email`    | `emailSlice`    | `sendEmailAsync` + `resetEmailState` reducer                        |
| `file`     | `fileSlice`     | `getFileAsync` (PDF download → opens in new tab)                    |

Auth state is persisted to `localStorage` under key `portfolio_user`.

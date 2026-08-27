---
name: component-create
description: Scaffold a new React component with the project's preferred patterns. Use when creating a new component or page inside the client.
---

# Component Create

## Required Information

- **Feature name** — PascalCase folder that already exists under `src/features/` (e.g., `Portfolio`, `Auth`, `Comments`)
- **Component name** — PascalCase (e.g., `SkillCard`). Suffix with `Page` if it is a route-level component (e.g., `ProfilePage`)

---

## Step 1 — Decide where it goes

| What are you building? | Location |
|---|---|
| Full page at a new URL | `features/<Feature>/pages/<Name>Page.tsx` + route in `App.tsx` |
| New section on the portfolio page | `features/Portfolio/components/<Name>.tsx` + add to `PortfolioPage.tsx` |
| UI element used only within one feature | `features/<Feature>/components/<Name>.tsx` |

There is no shared `src/components/` folder. If a component is needed in more than one feature, put it in the most relevant feature and import from there.

---

## Step 2 — Read a similar component first

Open the component most similar to what you are building. Copy its structure, not its logic.

| Building a... | Read this first |
|---|---|
| Form | `src/features/Contact/components/Contact.tsx` |
| Section with heading + animation | `src/features/Portfolio/components/Skills.tsx` |
| List + form | `src/features/Comments/components/Comments.tsx` |
| Timeline / data-driven list | `src/features/Portfolio/components/BackgroundCourses.tsx` |
| Accordion / toggleable UI | `src/features/Portfolio/components/Background.tsx` |
| Auth page (form + redirect) | `src/features/Auth/pages/LoginPage.tsx` |
| Reusable card / item | `src/features/Portfolio/components/TimelineCard.tsx` |

---

## Step 3 — Base template

```tsx
import type { FC } from 'react';
// import { motion } from 'framer-motion';                              // if animated
// import { useAppDispatch, useAppSelector } from '../../../redux/hooks'; // if needs store
// import { showToast } from '../../../utils/toast';                    // if shows toasts

interface MyComponentProps {
  title: string;
  // add props here
}

const MyComponent: FC<MyComponentProps> = ({ title }) => {
  return (
    <div>
      {/* content */}
    </div>
  );
};

export default MyComponent;
```

**Naming rules:**
- Component and props interface → PascalCase (`MyComponent`, `MyComponentProps`)
- Variables and functions → camelCase (`handleSubmit`, `isLoading`)
- Always `FC` or `FC<Props>` — never `function MyComponent()` without the type
- Props interface in the same file unless the type is shared across multiple files

---

## Step 4 — Types

Check `src/utils/types.ts` first. If the shape exists, use it. Add here only when the type is used in more than one file (e.g., a slice + a service + a component). Local-only types go in the component file.

```ts
// src/utils/types.ts
export interface MyItem {
  id: string;
  title: string;
}
```

---

## Step 5 — Animation (portfolio sections only)

Do not invent a new variant. Copy this exactly:

```tsx
const isMobile = window.innerWidth < 769;

const boxVariants = isMobile
  ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1 } } }
  : { hidden: { opacity: 0, x: -1000 }, visible: { opacity: 1, x: 0, transition: { duration: 1 } } };

<motion.h2
  className="section-heading"
  initial={isMobile ? 'visible' : 'hidden'}
  whileInView="visible"
  viewport={{ once: true }}
  variants={boxVariants}
>
  Section Title
</motion.h2>
```

- Slide from left: `x: -1000` — slide from right: `x: 1000`
- `viewport={{ once: true }}` always
- `className="section-heading"` on every section `<h2>` — never inline those styles

---

## Step 6 — Redux state (only if needed)

Use `useState` for local UI state (open/closed, form input values). Only create a slice when you need server data or state shared across components.

**6a. Slice — `features/<Feature>/state/<feature>Slice.ts`:**

```ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMyData } from '../service/myService';
import type { MyItem } from '../../../utils/types';

interface MyState {
  items: MyItem[];
  loading: boolean;
  error: string | null;
}

const initialState: MyState = { items: [], loading: false, error: null };

export const getMyDataAsync = createAsyncThunk<MyItem[], void, { rejectValue: string }>(
  'myFeature/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await fetchMyData();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);

const mySlice = createSlice({
  name: 'myFeature',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMyDataAsync.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(getMyDataAsync.fulfilled, (state, action) => { state.loading = false; state.items = action.payload; })
      .addCase(getMyDataAsync.rejected, (state, action) => { state.loading = false; state.error = action.payload ?? 'Failed'; });
  },
});

export default mySlice.reducer;
```

**6b. Register in `src/redux/store.ts`:**

```ts
import mySlice from '../features/MyFeature/state/mySlice';

reducer: { /* ...existing */ myFeature: mySlice }
```

**6c. Use in the component:**

```tsx
const dispatch = useAppDispatch();
const { items, loading, error } = useAppSelector((state) => state.myFeature);

useEffect(() => { void dispatch(getMyDataAsync()); }, [dispatch]);
```

---

## Step 7 — Service (only if calling the API)

```ts
// features/<Feature>/service/myService.ts
import axiosInstance from '../../../lib/axios/axiosInstance';
import type { MyItem } from '../../../utils/types';

export const fetchMyData = () =>
  axiosInstance.get<MyItem[]>('/my-endpoint');

// Authenticated:
export const createMyItem = (payload: Omit<MyItem, 'id'>, token: string) =>
  axiosInstance.post<MyItem>('/my-endpoint', payload, {
    headers: { Authorization: `Bearer ${token}` },
  });
```

Call services only from thunks — never from components.

---

## Step 8 — Toast feedback

Use the `submitted` flag pattern so toasts fire only after a real dispatch:

```tsx
const [submitted, setSubmitted] = useState(false);

useEffect(() => {
  if (submitted && !loading) {
    if (success) showToast({ title: 'Done.', description: '...', status: 'success' });
    else if (error) showToast({ title: 'Error.', description: '...', status: 'error' });
    setSubmitted(false);
    dispatch(resetMyState());
  }
}, [loading, success, error, submitted]);

const handleSubmit = () => {
  showToast({ title: 'Loading.', description: '...', status: 'loading', duration: 2000 });
  setSubmitted(true);
  dispatch(myAsync(payload));
};
```

For pages that need inline result handling (e.g., navigate after success), use `.unwrap()` + try/catch instead (see `LoginPage.tsx`).

---

## Step 9 — Styling checklist

- [ ] Tailwind utilities only — no new `.css` files
- [ ] Backgrounds: `bg-primary`, `bg-primary-dark`, `bg-primary-light`
- [ ] Default text: `text-white`
- [ ] Section headings: `className="section-heading"`
- [ ] Scrollable containers: add `custom-scrollbar` class
- [ ] Only add to `src/index.css` if Tailwind cannot do it (3D transforms, `::before`/`::after`, complex `clip-path`)

---

## Step 10 — Wire up

**New portfolio section:**
1. Import in `src/features/Portfolio/pages/PortfolioPage.tsx` and add to JSX
2. Add the anchor `id` to the `sections` array in the scroll-spy `useEffect`
3. Add the nav link in `src/features/Navigation/components/NavBar.tsx`

**New page route:**
```tsx
// App.tsx
const MyPage = lazy(() => import('./features/MyFeature/pages/MyPage'));
<Route path="/my-path" element={<MyPage />} />
```

---

## Step 11 — Validate

```bash
npm run typecheck   # zero errors
npm run lint        # zero warnings
npm run build       # clean output in build/
```

Visually confirm at desktop width and mobile width (≤768px).

---

## What NOT to do

- No CSS module files (`.module.css`) — no styled-components, no emotion
- No PropTypes — use TypeScript interfaces
- No `any` — use specific types or `unknown`
- No new Axios instance — use `src/lib/axios/axiosInstance.ts`
- No direct `react-hot-toast` calls — use `showToast()`
- No untyped `useSelector` / `useDispatch` — use `useAppDispatch` / `useAppSelector`
- No `React.memo`, `useCallback`, `useMemo` without a measured performance reason

> [!NOTE]
> This guide covers standard feature components and portfolio sections. If you are adding a reusable timeline item, see `TimelineCard.tsx` as the reference. If you are adding a flip card, see `OtherProjects.tsx`. For the custom accordion pattern, see `Background.tsx`.

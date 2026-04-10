# Claude — Portfolio Frontend

This file is the entry point. The details live in `.claude/`.

@.claude/memory.md
@.claude/new-component.md

---

## Before Coding Checklist

Work through this before touching any file:

- [ ] Read the files most similar to what you are about to create or modify
- [ ] Check `src/utils/types.ts` for existing interfaces that match your data shape
- [ ] Check whether a similar slice, service, or component already exists
- [ ] Confirm any Tailwind tokens you need exist in `tailwind.config.js`
- [ ] Never import `react-hot-toast` directly — use `showToast()` from `src/utils/toast.ts`
- [ ] Never use `useDispatch` / `useSelector` — use `useAppDispatch` / `useAppSelector` from `src/redux/hooks.ts`
- [ ] Never call `axiosInstance` from a component — only from a service file
- [ ] Do not add a new npm package unless nothing existing covers the need
- [ ] Do not refactor code you are not asked to change

---

## Where to Put New Code

| What | Where |
|---|---|
| New route page | `features/<Feature>/pages/<Name>Page.tsx` + route in `App.tsx` |
| New portfolio section | `features/Portfolio/components/<Name>.tsx` + add to `PortfolioPage.tsx` |
| New feature UI component | `features/<Feature>/components/<Name>.tsx` |
| New Redux slice | `features/<Feature>/state/<feature>Slice.ts` + register in `src/redux/store.ts` |
| New API call | `features/<Feature>/service/<feature>Service.ts` |
| New shared type | `src/utils/types.ts` |
| New shared utility | `src/utils/<name>.ts` |
| New static JSON data | `features/Portfolio/config/<name>.json` |
| New global CSS rule | Bottom of `src/index.css` with a comment |
| New environment variable | `client/.env` + declare in `vite-env.d.ts` with `VITE_` prefix |

---

## What to Avoid

- CSS modules, styled-components, or any component library
- New Axios instances — use `src/lib/axios/axiosInstance.ts`
- Direct calls to `react-hot-toast` — use `showToast()`
- Untyped `useSelector` / `useDispatch`
- `any` in new code
- `React.memo`, `useCallback`, `useMemo` without a measured need
- Adding libraries already covered: Framer Motion (animations), react-icons (icons), react-hot-toast (toasts), date-fns (dates)
- Unnecessary refactors outside the scope of the task

# UI Components

shadcn/ui is the **only** UI component system in this app. Do not hand-write custom
presentational components (buttons, inputs, dialogs, cards, dropdowns, etc.) when a shadcn
equivalent exists.

## Rules

- Always use a component from `@/components/ui` (aliased via `components.json`) instead of
  writing raw `<button>`, `<input>`, `<div role="dialog">`, etc.
- If the needed component is not yet in `components/ui/`, add it with the `shadcn` CLI
  (already a project dependency) rather than authoring it by hand:

  ```
  npx shadcn add <component>
  ```

- Do not fork or hand-edit generated files in `components/ui/` beyond what the CLI produced,
  unless intentionally customizing a variant (e.g. `buttonVariants` in
  [components/ui/button.tsx](../components/ui/button.tsx)). Prefer composing existing
  components over duplicating their markup.
- Build feature UI by composing shadcn primitives inside files under `components/` or `app/`,
  not by recreating primitive styling/behavior inline.
- Use the existing config as the source of truth for conventions: style `base-nova`, base
  color `neutral`, icon library `lucide-react`, `cn` from the `cn` package for class merging
  (see [components.json](../components.json)).
- Icons must come from `lucide-react` to match installed shadcn components.

## Quick checklist

- [ ] No custom-built primitive component exists where a shadcn component would fit.
- [ ] Missing primitives are added via `npx shadcn add <component>`, not written from scratch.
- [ ] Class merging uses `cn`, matching the pattern in `components/ui/button.tsx`.
- [ ] Icons come from `lucide-react`.

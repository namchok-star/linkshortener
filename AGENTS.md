<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Agent Instructions

This is a URL-shortening application built with Next.js App Router. BEFORE generating, editing, or suggesting ANY code, you MUST identify and read every relevant individual instruction file in `/docs`. This is a mandatory precondition, not an optional reference step. Do not generate code until the applicable documentation has been read.

## Documentation Index

- [docs/authentication.md](docs/authentication.md) — Clerk auth rules: protecting routes, homepage redirect, modal-only sign-in/sign-up.
- [docs/ui-components.md](docs/ui-components.md) — shadcn/ui rules: use shadcn components only, no hand-built primitives.

## Working Rules

- Treat the installed dependencies and source code as authoritative. Do not assume conventions or APIs from another version of Next.js, React, Clerk, Drizzle, or Tailwind.
- Before changing Next.js behavior, consult the matching guide shipped with the installed package under `node_modules/next/dist/docs/`. This project uses Next.js 16; in particular, request interception is implemented through `proxy.ts`, not the older `middleware.ts` convention.
- Keep changes focused, preserve existing public behavior unless the task asks to change it, and do not add dependencies when the existing stack can solve the problem.
- Do not invent product requirements. When URL-shortener behavior is unspecified, identify the missing decision before implementing consequential behavior.
- Never expose secrets or perform privileged work in client components. Authenticate and authorize each protected read or mutation at the server boundary.
- Do not edit the generated Next.js instruction block above. Next.js may recreate it automatically.

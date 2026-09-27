# Authentication

Clerk (`@clerk/nextjs`) is the **only** authentication system in this app. Do not add
NextAuth, custom JWT/session handling, or any other auth library or hand-rolled login logic.

## Middleware

- `proxy.ts` calls `clerkMiddleware()` with no arguments. This must stay in place — `auth()`
  and `auth.protect()` do not work without it.
- The installed Clerk version deprecates `createRouteMatcher` and path-matching-based access
  control in middleware. Do not gate access to routes from `proxy.ts`. Instead, add a
  resource-based check (see below) inside the page, layout, route handler, or server action
  that actually needs protecting.

## Protecting a route (e.g. `/dashboard`)

Call `auth.protect()` at the top of the server component for the page (or its layout):

```ts
import { auth } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  await auth.protect();
  // ... render protected content
}
```

`auth.protect()` behavior for a signed-out user depends on the request type:

- Page/document requests are redirected to the sign-in flow automatically.
- Non-document requests (route handlers, server actions) get a `404` instead.

Do not implement this redirect manually with `auth()` + `redirect()` — use `auth.protect()`
so behavior stays consistent across the app.

## Redirecting signed-in users away from the homepage

`app/page.tsx` is a server component. Check the session and redirect before rendering:

```ts
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();
  if (userId) redirect("/dashboard");
  // ... render signed-out homepage
}
```

## Sign in / sign up must always be a modal

- Trigger auth with `<SignInButton mode="modal">` and `<SignUpButton mode="modal">`. Never
  omit `mode` — the default (`"redirect"`) navigates to a full page instead of opening a modal.
- Use the existing `<Show when="signed-out">` / `<Show when="signed-in">` pattern from
  `app/page.tsx` to render the sign-in/sign-up buttons vs. `<UserButton />`.
- The catch-all routes at `app/sign-in/[[...sign-in]]` and `app/sign-up/[[...sign-up]]` must
  stay in place as the fallback destination Clerk needs for its internal flows (e.g. OAuth
  callbacks, password reset), but the app must never link to `/sign-in` or `/sign-up` directly
  for the primary sign-in/sign-up entry points — always use the modal buttons.

## Quick checklist

- [ ] No auth library other than `@clerk/nextjs` is introduced.
- [ ] `proxy.ts` keeps a bare `clerkMiddleware()`; no route matching added there.
- [ ] New protected pages/layouts/route handlers call `auth.protect()` themselves.
- [ ] Sign-in/up entry points use `SignInButton`/`SignUpButton` with `mode="modal"`.

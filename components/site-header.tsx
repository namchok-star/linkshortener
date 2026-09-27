import Link from "next/link";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export function SiteHeader() {
  return (
    <header className="flex w-full max-w-3xl items-center justify-between px-6 py-4 sm:px-16">
      <Link className="font-semibold" href="/">
        LinkShortener
      </Link>
      <nav className="flex items-center gap-3" aria-label="Account">
        <Show when="signed-out">
          <SignInButton mode="modal">
            <button className="rounded-md px-3 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10">
              Sign in
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="rounded-md bg-foreground px-3 py-2 text-sm font-medium text-background">
              Sign up
            </button>
          </SignUpButton>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </nav>
    </header>
  );
}

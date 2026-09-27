import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import {
  ArrowRight,
  Link2,
  LockKeyhole,
  Rocket,
  Sparkles,
  LayoutDashboard,
} from "lucide-react";
import { redirect } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Faster link sharing",
    description:
      "Turn long URLs into short, clean links that are easier to send and remember.",
    icon: Link2,
  },
  {
    title: "Secure account access",
    description:
      "Sign in with Clerk-powered authentication to keep link management tied to your account.",
    icon: LockKeyhole,
  },
  {
    title: "Simple dashboard flow",
    description:
      "Jump into a focused dashboard experience built for creating and managing your links.",
    icon: LayoutDashboard,
  },
];

const highlights = [
  "Built for quick sharing",
  "Protected user dashboard",
  "Clean, focused workflow",
];

export default async function Home() {
  const { userId } = await auth();
  if (userId) redirect("/dashboard");

  return (
    <div className="flex min-h-screen flex-col bg-muted/30">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-20 px-6 py-12 sm:px-10 lg:px-16 lg:py-20">
        <section className="grid gap-10 rounded-3xl border bg-background p-8 shadow-sm lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border bg-muted px-3 py-1 text-sm text-muted-foreground">
              <Sparkles className="size-4" />
              Link shortening without the clutter
            </div>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Share shorter links with a smoother workflow.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                LinkShortener gives you a simple place to sign in, create short
                links, and manage everything from one clean dashboard.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <SignUpButton mode="modal">
                <Button size="lg" className="w-full sm:w-auto">
                  Get started
                  <ArrowRight className="size-4" />
                </Button>
              </SignUpButton>
              <SignInButton mode="modal">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Sign in
                </Button>
              </SignInButton>
            </div>
            <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
              {highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-2xl border bg-muted/40 px-4 py-3"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 rounded-3xl border bg-muted/40 p-6">
            <div className="rounded-2xl border bg-background p-5">
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Rocket className="size-4" />
                Why it works
              </div>
              <p className="text-xl font-semibold tracking-tight">
                A homepage that gets visitors to value quickly.
              </p>
            </div>
            <div className="space-y-3 rounded-2xl border bg-background p-5">
              <p className="text-sm font-medium text-muted-foreground">
                What visitors see
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="rounded-xl bg-muted/50 px-4 py-3">
                  Clear explanation of the app&apos;s purpose
                </li>
                <li className="rounded-xl bg-muted/50 px-4 py-3">
                  Obvious sign-up and sign-in actions
                </li>
                <li className="rounded-xl bg-muted/50 px-4 py-3">
                  Feature highlights before they enter the dashboard
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight">
              Everything a modern link shortener needs up front
            </h2>
            <p className="text-muted-foreground">
              The landing page focuses on the app&apos;s current strengths:
              quick access, straightforward link management, and a secure
              account experience.
            </p>
          </div>
          <ul className="grid gap-4 md:grid-cols-3">
            {features.map(({ title, description, icon: Icon }) => (
              <li
                key={title}
                className="rounded-3xl border bg-background p-6 shadow-sm"
              >
                <div className="mb-4 flex size-11 items-center justify-center rounded-2xl bg-muted">
                  <Icon className="size-5" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{title}</h3>
                <p className="text-sm leading-7 text-muted-foreground">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

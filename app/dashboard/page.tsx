import { auth } from "@clerk/nextjs/server";
import { SiteHeader } from "@/components/site-header";

export default async function DashboardPage() {
  await auth.protect({ unauthenticatedUrl: "/" });

  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <SiteHeader />
      <main className="flex flex-1 w-full max-w-3xl flex-col px-16 py-8 bg-white dark:bg-black">
        <h1>Dashboard</h1>
      </main>
    </div>
  );
}

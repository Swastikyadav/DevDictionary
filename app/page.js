import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-8 py-6">
      <Input
        className="rounded-xl bg-slate-100 w-full outline-none h-12 dark:bg-slate-600 dark:text-slate-200"
        placeholder="Search for programming concepts and patterns"
      />

      <h1 className="pt-6 pb-2 text-4xl font-bold w-full">Keyboard</h1>
      <h2 className="pb-6 text-normal font-bold w-full text-purple-500 border-b border-border">/ˈkiːbɔːrd/</h2>

      {/* <p>Start your blog in <span className="text-purple-800 font-bold dark:text-purple-500">few hours not few days.</span></p>
      <small className="my-4">
        Ready to go, <span className="text-purple-800 font-bold dark:text-purple-500">done for you NextJs blog setup</span>.
        Clone, write your first blog, and deploy. As simple as that.
        <br /><br />
        Focus on writing, not on setting up the blog.
        <br /><br />
        New templates launching soon.
      </small>
      <Link href="/blog">
        <Button>Read blogs</Button>
      </Link> */}
    </main>
  );
}

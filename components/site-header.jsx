import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import { Icons } from "./icons";
import { ModeToggle } from "./mode-toggle";

import { Book } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center text-slate-500">
        <Link href="/"><Icons.logo className="h-8 w-8" /></Link>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            {/* <ModeToggle /> */}
            {/* <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0"
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0"
                )}
              >
                <Icons.twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link> */}
          </nav>
        </div>
      </div>

      <div className="pt-6 px-8">
        <Input
          className="rounded-xl bg-slate-100 outline-none h-12 dark:bg-slate-600 dark:text-slate-200"
          placeholder="Search for programming concepts and patterns"
        />
      </div>
    </header>
  );
}
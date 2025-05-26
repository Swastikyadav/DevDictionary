"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Input } from "./ui/input";
import { Icons } from "./icons";
import { ModeToggle } from "./mode-toggle";

import { Text } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { posts } from "#site/content";
import { sortPosts } from "@/lib/utils";

export function SiteHeader() {
  const [searchBoxOpen, setSearchBoxOpen] = useState(false);

  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const displayPosts = sortedPosts;

  return (
    <header className="top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center h-14 max-w-screen-2xl text-slate-500">
        <Link href="/">
          <Icons.logo className="w-8 h-8" />
        </Link>
        <div className="flex items-center justify-end flex-1 space-x-2">
          <nav className="flex items-center">
            <ModeToggle />
          </nav>
        </div>
      </div>

      <CommandDialog open={searchBoxOpen} onOpenChange={setSearchBoxOpen}>
        <CommandInput placeholder="Search for concepts and patterns." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Terms, concepts, and patterns">
            {displayPosts.map((post) => {
              const { slug, title, description } = post;
              return (
                <Link href={slug}>
                  <CommandItem>
                    <Text className="w-4 h-4 mr-2" />
                    <span>{title}</span>
                  </CommandItem>
                </Link>
              );
            })}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>

      <div className="px-8 pt-6">
        <Input
          onClick={() => setSearchBoxOpen(true)}
          className="h-12 outline-none rounded-xl bg-slate-100 dark:bg-slate-600 dark:text-slate-200"
          placeholder="Search for programming concepts and patterns"
        />
      </div>
    </header>
  );
}

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

      <section className="w-full py-6 border-b border-border">
        <p className="font-bold">Description:</p>
        <br />
        <p>
          A set of keys used to operate a typewriter, computer etc.
          Components of many instruments including the piano, organ, and harpsichord
          consisting of usually black and white keys that cause different tones to be
          produced when struck.
          A device with keys of a musical keyboard, used to control electronic sound-producing
          devices which may be built into or separate from the keyboard device.
        </p>
      </section>

      <section className="w-full py-6 border-b border-border">
        {
          [
            {title: "Term one", description: "Small description about the term."},
            {title: "React composition pattern", description: "Composition in react is a pattern of building reusable components."},
            {title: "Inheritance", description: "Inheritance is a programming concept of sharing functionality between components."},
            {title: "Test headline", description: "Testing the list of programming terms, concepts, and patterns."},
          ].map((post) => {
            return (
              <div className="py-2">
                <h3 className="text-lg font-bold text-purple-500">{post.title} &rarr;</h3>
                <p className="text-slate-500">{post.description}</p>
              </div>
            );
          })
        }
      </section>

      <footer className="w-full py-6">
        <small>Adding new concepts regularly. Join the <a className="text-purple-500" href="https://diaryofadev.ck.page" target="_blank">Newsletter</a> to get updates.</small>
        <br />
        <small>Built for developers by <a className="text-purple-500" href="https://swastikyadav.com" target="_blank">Swastik Yadav</a>.</small>
      </footer>
    </main>
  );
}

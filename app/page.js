import Link from "next/link";
import { posts } from "#site/content";

import { sortPosts } from "@/lib/utils";

export default function Home() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const displayPosts = sortedPosts;

  return (
    <main className="flex flex-col items-center min-h-screen px-8 py-6">
      <h1 className="w-full pb-2 text-4xl font-bold">DevDictionary</h1>
      <h2 className="w-full pb-6 font-bold text-purple-500 border-b text-normal border-border">
        /dev-dik-shə-ˌner-ē/
      </h2>

      {/* Move this section into a common component */}
      <section className="w-full py-6 border-b border-border">
        <p className="font-bold">WHY?</p>
        <br />
        <p>
          Coming from a non-CS background, I struggled with understanding
          programming concepts like:
          <br />
          <br />
          - Inheritance
          <br />
          - Rendering
          <br />
          - Pure Function
          <br />
          - Higher order components
          <br />
          <br />
          You get the idea. I struggled with these terms and concepts, not
          syntax or logic building.
          <br />
          <br />
          Understanding these concepts makes it easier to learn programming by
          the first principle.
          <br />
          <br />
          That's why I built this resource for myself and I will be glad if it
          helps even one developer other than me.
          <br />
          <br />
          Adding new terms, concepts, and patterns with examples and visuals
          regularly.
        </p>
      </section>

      <section className="w-full py-6 border-b border-border">
        {displayPosts.map((post) => {
          const { slug, title, description } = post;
          return (
            <div className="py-2">
              <Link href={slug}>
                <h3 className="text-lg font-bold text-purple-500">
                  {title} &rarr;
                </h3>
              </Link>
              <p className="text-slate-500">{description}</p>
            </div>
          );
        })}
      </section>

      <footer className="w-full py-6">
        <small>
          Built for developers by{" "}
          <a
            className="text-purple-500"
            href="https://linkedin.com/in/swastikyadav"
            target="_blank"
          >
            Swastik Yadav
          </a>
          .
        </small>
      </footer>
    </main>
  );
}

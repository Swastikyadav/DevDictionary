import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { notFound } from "next/navigation";

import "@/styles/mdx.css";

async function getPostFromParams(params) {
    const slug = params?.slug?.join("/");
    const post = posts.find(post => post.slugAsParams === slug);

    return post;
}

export default async function PostPage({ params}) {
    const post = await getPostFromParams(params);

    if (!post || !post.published) {
        notFound();
    }

    return (
        <div className="container">
            <h1 className="pt-6 pb-2 text-4xl font-bold w-full">{post.title}</h1>
            <h2 className="pb-6 text-normal font-bold w-full text-purple-500 border-b border-border">{post.pronounciation}</h2>
            
            <section className="w-full py-6 border-b border-border">
                <p className="font-bold">Description:</p>
                <br />
                <p>
                    {post.description}
                </p>
            </section>

            <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
                {/* <h1 className="mb-2">{post.title}</h1> */}
                {/* {
                    post.description ? (
                        <p className="text-xl mt-0 text-muted-foreground">
                            {post.description}
                        </p>
                    ) : null
                } */}
                {/* <hr className="my-4" /> */}
                <MDXContent code={post.body} />
            </article>
        </div>
    );
}
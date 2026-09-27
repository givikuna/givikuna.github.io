import rss, { type RSSFeedItem } from "@astrojs/rss";

import type { APIContext } from "astro";

import { sortPostsByDate, type BlogPostModule } from "../utils/blog";

export async function GET(context: APIContext) {
    const postImports: Record<string, BlogPostModule> = import.meta.glob<BlogPostModule>(
        "./blog/*.md",
        {
            eager: true,
        },
    );
    const posts: ReadonlyArray<BlogPostModule> = sortPostsByDate(Object.values(postImports));

    return rss({
        title:       "givikuna's Blog",
        description: "Articles on programming, math, NixOS, and open source",
        site:        context.site ?? "https://givikuna.github.io",
        items:       posts.map((post: BlogPostModule): RSSFeedItem => ({
            title:       post.frontmatter.title,
            pubDate:     new Date(post.frontmatter.pubDate),
            description: post.frontmatter.description,
            link:        post.url ?? "/blog/",
        })),
    });
}

import rss, { type RSSFeedItem } from "@astrojs/rss";

import type { APIContext } from "astro";

import { sortPostsByDate, type BlogPostModule } from "../utils/blog";

export async function GET(context: APIContext) {
    return rss({
        title:       "givikuna's Blog",
        description: "Articles on programming, math, NixOS, and open source",
        site:        context.site ?? "https://givikuna.github.io",
        items:       sortPostsByDate(
            Object.values(
                import.meta.glob<BlogPostModule>("./blog/*.md", {
                    eager: true,
                }),
            ),
        ).map((post: BlogPostModule): RSSFeedItem => ({
            title:       post.frontmatter.title,
            pubDate:     new Date(post.frontmatter.pubDate),
            description: post.frontmatter.description,
            link:        post.url ?? "/blog/",
        })),
    });
}

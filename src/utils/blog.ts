import { BlogPostModule } from "../types/BlogPostModule";

export function sortPostsByDate(posts: BlogPostModule[]): BlogPostModule[] {
    return [...posts].sort(
        (a, b) =>
            new Date(b.frontmatter.pubDate).getTime() - new Date(a.frontmatter.pubDate).getTime(),
    );
}

export type { BlogPostModule };

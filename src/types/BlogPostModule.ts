import { BlogFrontmatter } from "./BlogFrontmatter";

export interface BlogPostModule {
    frontmatter: BlogFrontmatter;
    url?:        string;
}

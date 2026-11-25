import * as marked from "marked";
import { StackItem } from "../types/StackItem";
import { StackOption } from "../types/StackOption";
import { ProjectItem } from "../types/ProjectItem";
import { slugify } from "../helpers/slugify";
import { project_items } from "../data/projects";
import { stack_items } from "../data/stack";

const stack_map: Map<StackOption, StackItem> = new Map<StackOption, StackItem>(
    [...stack_items].map((item: StackItem): [StackOption, StackItem] => [
        item.title as StackOption,
        item,
    ]),
);

export function renderStackTool(title: StackOption): string {
    return ((item: StackItem | undefined): string =>
        !item
            ? /* HTML */
              `<span class="stack-missing">${title}</span>`
            : /* HTML */ `<a
                  href="${item.home_url}"
                  class="stack-icon-link"
                  title="${item.title}"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><img
                      src="/icons/${item.image_path}"
                      alt="${item.title}"
                      width="30"
                      height="30"
                      loading="lazy"
              /></a>`)(stack_map.get(title));
}

export function renderStackRow(stack: readonly StackOption[]): string {
    return stack.map((tool) => renderStackTool(tool)).join("\n");
}

export function renderProjectMarkdown(project: ProjectItem): string {
    const iconsHtml: string = renderStackRow(project.stack);
    const bulletsHtml: string = project.desc
        .map((line) => `<p>${marked.parseInline(line)}</p>`)
        .join("\n");

    const stackText: string = project.stack.join(", ");

    return `
        <article class="project-card" id="project-${slugify(project.name)}">
            <div class="card-header">
                <h2>${project.name}</h2>
                <span class="badge">${project.section.replace(/Complete|in Progress/g, "").trim()}</span>
            </div>
            <div class="project-desc">
                ${bulletsHtml}
            </div>
            <div class="card-footer">
                <span class="stack-text">${stackText}</span>
                <div class="stack-row">${iconsHtml}</div>
            </div>
        </article>`.trim();
}

export function renderCompactProjectMarkdown(project: ProjectItem): string {
    const summaryHtml = `<p>${marked.parseInline(project.summary)}</p>`;

    const stackLimit = 4;
    const stackList = project.stack.slice(0, stackLimit);
    const stackText =
        stackList.join(", ") + (project.stack.length > stackLimit ? ", +" : "");

    return `
        <article class="project-card compact">
            <div class="card-header">
                <h2><a href="/projects/#project-${slugify(project.name)}">${project.name}</a></h2>
                <span class="badge">${project.section.replace(/Complete|in Progress/g, "").trim()}</span>
            </div>
            <div class="project-desc">
                ${summaryHtml}
            </div>
            <div class="card-footer">
                <span class="stack-text">${stackText}</span>
            </div>
        </article>`.trim();
}

export function getProjectsBySection(
    projects: ReadonlyArray<ProjectItem> = project_items,
): ReadonlyArray<{ section: string; slug: string; projects: ProjectItem[] }> {
    const groups: Map<string, ProjectItem[]> = new Map<string, ProjectItem[]>();

    projects.forEach(
        (project: ProjectItem): number | Map<string, ProjectItem[]> =>
            ((
                existing: ProjectItem[] | undefined,
            ): number | Map<string, ProjectItem[]> =>
                existing
                    ? existing.push(project)
                    : groups.set(project.section, [project]))(
                groups.get(project.section),
            ),
    );

    return Array.from(groups.entries()).map(([section, items]) => ({
        section,
        slug:     slugify(section),
        projects: items,
    }));
}

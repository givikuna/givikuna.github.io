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
    const item = stack_map.get(title);

    if (!item) {
        return `<span class="stack-missing>${title}</span>`;
    }

    return `<a href="${item.home_url}" class="stack-icon-link" title="${item.title}" target="_blank" rel="noopener noreferrer"><img src="/icons/${item.image_path}" alt="${item.title}" width="30" height="30" loading="lazy" /></a>`;
}

export function renderStackRow(stack: readonly StackOption[]): string {
    return stack.map((tool) => renderStackTool(tool)).join("\n");
}

export function renderProjectMarkdown(project: ProjectItem): string {
    const iconsHtml = renderStackRow(project.stack);
    const bulletsHtml = project.desc
        .map((line) => `<li>${marked.parseInline(line)}</li>`)
        .join("\n");

    return `
        <article class="project-card" id="project-${slugify(project.name)}">
            <h2>${project.name}</h2>
            <div class="stack-row">${iconsHtml}</div>
            <ul class="project-desc">
                ${bulletsHtml}
            </ul>
        </article>`.trim();
}

export function getProjectsBySection(
    projects: ReadonlyArray<ProjectItem> = project_items,
): ReadonlyArray<{ section: string; slug: string; projects: ProjectItem[] }> {
    const groups = new Map<string, ProjectItem[]>();

    for (const project of projects) {
        const existing = groups.get(project.section);
        if (existing) {
            existing.push(project);
        } else {
            groups.set(project.section, [project]);
        }
    }

    return Array.from(groups.entries()).map(([section, items]) => ({
        section,
        slug:     slugify(section),
        projects: items,
    }));
}

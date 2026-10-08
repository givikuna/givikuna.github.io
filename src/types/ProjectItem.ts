import { ProjectSection } from "./ProjectSection";
import { StackOption } from "./StackOption";

export interface ProjectItem {
    name:    string;
    stack:   StackOption[];
    desc:    string[];
    summary: string;
    section: ProjectSection;
}

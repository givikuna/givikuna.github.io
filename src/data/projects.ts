import { ProjectItem } from "../types/ProjectItem";

export const project_items: ReadonlyArray<ProjectItem> = [
    // ============================================================
    //                             PIN
    // ============================================================

    {
        name:    "Ynternals",
        stack:   ["Nix", "go", "BASH", "systemd", "Linux"],
        summary:
            "Secrets Management tool for NixOS systems with symmetric-key encryption written in Go",
        desc:    [
            "Declarative, symmetric-key management system for NixOS hosts.",
            'Uses <a href="https://en.wikipedia.org/wiki/Advanced_Encryption_Standard">AES-256</a> encryption',
            "Guarantees zero nix-store leakage, memory-only decryption, and path traversal protection",
            "Spins up a systemd service to actually manage the secrets",
            "Provides a full NixOS module for configuring and managing the service",
            `source code hosted on <a href="https://github.com/givikuna/ynternals">GitHub</a>`,
        ],
        section: "FOSS Complete",
    },

    {
        name:    "Loid",
        stack:   [
            "Nix",
            "Rust",
            "git",
            "GitHub",
            "JavaScript",
            "Elvish",
            "BASH",
        ],
        summary:
            "Multi-paradigm programming language implementing Martin-Löf into OOP",
        desc:    [
            "Multi-paradigm transpile-to-javascript language written in Rust",
            "Loid tries to integrate a Martin-Löf type system into an OOP paradigm",
            "Written in rust and managed via nix flakes",
            "Designed to be batteries-included out of the box, with a large core library and many useful quirks",
            'Source code hosted on <a href="https://github.com/Loid-Project/loid/">GitHub</a>',
        ],
        section: "FOSS in Progress",
    },

    // ============================================================
    //                     FOSS COMPLETE
    // ============================================================

    {
        name:    "Nixfiles",
        stack:   [
            "Nix",
            "hyprland",
            "BASH",
            "fish",
            "Python",
            "Lua",
            "Perl",
            "Racket",
        ],
        summary: "Multi-host NixOS configuration with flakes & home manager",
        desc:    [
            "Multi-host nixos configuration with flakes & home manager",
            "Manages secrets, private and public servers, and various personal computers",
            "Unit tests many parts of the operating systems through custom scripts",
            "Many smaller custom scripts written in racket, perl, and python",
            `Uses various self-made flakes`,
            'source code hosted on <a href="https://github.com/givikuna/nixfiles">GitHub</a>',
        ],
        section: "FOSS Complete",
    },

    {
        name:    "AIGest",
        stack:   ["groovy", "Nix", "BASH", "JSON", "devenv"],
        summary: "Git repository ingestion tool for LLMs",
        desc:    [
            "Git repository ingestion tool for LLMs to read and understand codebases",
            "Relies on a JSON configuration system to generate an XML file",
            "Has a profile-based system on repos to generate ingestions of specific parts of the codebase",
            `source code hosted on <a href="https://github.com/givikuna/aigest">GitHub</a>`,
        ],
        section: "FOSS Complete",
    },

    {
        name:    "Ysyldur",
        stack:   ["Nix", "BASH", "Linux"],
        summary:
            "Linux kernel variant, version, scheduler, and general option management flake for NixOS",
        desc:    [
            `Ysyldur is mainly a flake for managing your NixOS kernel configuration`,
            `It can manage kernel variants, versions, parameters, schedulers, and more`,
            `Drivers for the GPU, and an integration with Chaotic-Nyx`,
            `source code hosted on <a href="https://github.com/givikuna/ysyldur">GitHub</a>`,
        ],
        section: "FOSS Complete",
    },

    // ============================================================
    //                     FOSS in Progress
    // ============================================================
];

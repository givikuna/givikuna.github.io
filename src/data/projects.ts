import { ProjectItem } from "../types/ProjectItem";

export const project_items: ReadonlyArray<ProjectItem> = [
    // ============================================================
    //                             PIN
    // ============================================================

    {
        name:    "nixfiles",
        stack:   [
            "Nix",
            "hyprland",
            "BASH",
            "fish",
            "Python",
            "Lua",
            "Yggdrasil",
            "Perl",
            "Racket",
            "Terraform",
            "Elvish",
        ],
        summary: "Multi-host NixOS configuration with flakes & home manager",
        desc:    [
            "Multi-host nixos configuration with flakes & home manager",
            "Manages secrets, private and public servers, and various personal computers",
            "Unit tests many parts of the operating systems through custom scripts",
            "Many smaller custom scripts written in racket, perl, and python",
            `Uses various self-made flakes such as <a href="https://github.com/givikuna/gitboy>">gitboy</a> for declarative git repository management and <a href="https://github.com/givikuna/nixtants">nixtants</a> for constants management`,
            `Has a custom secrets management system through <a href="https://github.com/givikuna/ynternals">the ynternals flake</a>`,
            "Currently in the process of using terraform to set up the cloud environment declaratively",
            'source code hosted on github at <a href="https://github.com/givikuna/nixfiles">https://github.com/givikuna/nixfiles</a>',
        ],
        section: "FOSS Complete",
    },

    {
        name:    "loid",
        stack:   ["Nix", "Rust", "git", "GitHub", "JavaScript", "Elvish", "BASH"],
        summary: "Multi-paradigm programming language implementing Martin-Löf into OOP",
        desc:    [
            "Multi-paradigm transpile-to-javascript language written in Rust",
            "Loid tries to integrate a Martin-Löf type system into an OOP paradigm",
            "Written in rust and managed via nix flakes",
            "Designed to be batteries-included out of the box, with a large core library and many useful quirks",
            'Source code hosted on github at <a href="https://github.com/Loid-Project/loid/">https://github.com/Loid-Project/loid/</a>',
        ],
        section: "FOSS in Progress",
    },

    // ============================================================
    //                     FOSS COMPLETE
    // ============================================================

    {
        name:    "Nixp",
        stack:   ["Nix", "Odin", "BASH"],
        summary:
            "Lisp-inspired optionally-typed programming programming language that compiles to Nix",
        desc:    [
            "Lisp-inspired language that compiles to pure nix code",
            "Useable for nix configurations and flakes",
            "Optionally allows users to use a fully-featured (non Martin-Löf) type system for nix type-safety",
            "Allows for modular and easy migration from nix",
            "Written in Odin",
            `Source code hosted on github at <a href="https://github.com/givikuna/nixp>https://github.com/givikuna/nixp</a>`,
        ],
        section: "FOSS Complete",
    },

    {
        name:    "ynternals",
        stack:   ["Nix", "BASH"],
        summary: "Nix symmetric-key encrypted secrets management solution",
        desc:    [
            "A solution for managing secrets declaratively with symmetric keys in NixOS",
            "Uses AES-256 for symmetrically encrypting secrets for Nix systems",
            "Does not store the decrypted secrets in the world-readable nix store",
            "Distributed via a Nix flake",
            'Source code hosted on github at <a href="https://github.com/givikuna/ynternals">https://github.com/givikuna/ynternals</a>',
        ],
        section: "FOSS Complete",
    },

    {
        name:    "nixtants",
        stack:   ["Nix"],
        summary: "A Nix free-form constants management flake",
        desc:    [
            "Clean and portable way to manage free-form structured constants for Nix configurations via flakes",
            'Source code hosted on github at <a href="https://github.com/givikuna/nixtants">https://github.com/givikuna/nixtants</a>',
        ],
        section: "FOSS Complete",
    },

    // ============================================================
    //                     FOSS in Progress
    // ============================================================
];

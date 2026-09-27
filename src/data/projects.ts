import { ProjectItem } from "../types/ProjectItem";

export const project_items: ReadonlyArray<ProjectItem> = [
    // ============================================================
    //                     FOSS COMPLETE
    // ============================================================

    {
        name:    "loid",
        stack:   ["Nix", "Rust", "git", "GitHub", "JavaScript", "Elvish", "BASH"],
        desc:    [
            'source code hosted on github at <a href="https://github.com/Loid-Project/loid/">https://github.com/Loid-Project/loid/</a>',
            "multi-paradigm transpiled programming language with first-class types, functions, and classes",
            "tightly integrates classes into the type system, allows for constrained types, runtime type checks, and pure functional programming",
            "features a rich error management system with monadic data structures",
        ],
        section: "FOSS Complete",
    },

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
        desc:    [
            'source code hosted on github at <a href="https://github.com/givikuna/nixfiles">https://github.com/givikuna/nixfiles</a>',
            "multi-host nixos configuration with flakes & home manager",
            "manages secrets, private and public servers, and various personal computers",
            "unit tests many parts of the operating systems through custom scripts",
            "many smaller custom scripts written in racket, perl, and python",
            `uses various self-made flakes such as <a href="https://github.com/givikuna/gitboy>">gitboy</a> for declarative git repository management and <a href="https://github.com/givikuna/nixtants">nixtants</a> for constants management`,
            `has a custom secrets management system through <a href="https://github.com/givikuna/ynternals">the ynternals flake</a>`,
            "currently in the process of using terraform to set up the cloud environment declaratively",
        ],
        section: "FOSS Complete",
    },

    // ============================================================
    //                     FOSS in Progress
    // ============================================================

    {
        name:    "struktured",
        stack:   ["NPM", "TypeScript", "JavaScript"],
        desc:    [
            `source code hosted on codeberg at <a href="https://codeberg.org/giviko/struktured">https://codeberg.org/giviko/struktured</a>`,
            `npm package on npmjs.com at <a href="https://www.npmjs.com/package/struktured">https://www.npmjs.com/package/struktured</a>`,
            "a library (work-in-progress) with various complex (and customizable) data structures",
            "designed with extensibility in mind providing abstract classes, interfaces, bases, headers, and mixins (and lots of utilities to create custom mixins)",
            "written primarily in typescript for npm",
        ],
        section: "FOSS in Progress",
    },

    {
        name:    "github-api-cli",
        stack:   ["Haskell", "Nix", "GitHub", "Cabal", "BASH"],
        desc:    [
            `source code hosted on github at <a href="https://github.com/givikuna/gh-api-cli">https://github.com/givikuna/gh-api-cli</a>`,
            `github api wrapper as a cli tool written in Haskell`,
            `more information is in the README.md`,
        ],
        section: "FOSS in Progress",
    },

    {
        name:    "arkonavt",
        stack:   ["Odin", "GitHub", "Nix", "JSON", "yt-dlp", "YouTube"],
        desc:    [
            `source code hosted on github at <a href="https://github.com/givikuna/arkonavt">https://github.com/givikuna/arkonavt</a>`,
            `local-first music player platform`,
            `comes with a TUI and is packaged through a Nix Flake`,
            `built with Odin and JSON to be fast`,
        ],
        section: "FOSS in Progress",
    },

    {
        name:    "mwaune",
        stack:   [
            "TypeScript",
            "NPM",
            "Svelte",
            "Tauri",
            "Underscore",
            "Vite",
            "Rust",
            "Ramda",
            "fp-ts",
            "Nix",
        ],
        desc:    [
            `source code hosted on github at <a href="https://github.com/givikuna/mwaune">https://github.com/givikuna/mwaune</a>`,
            "local-first book management application",
            "built with tauri and svelte",
            "allows for note taking, reading books, and has a declarative configuration system",
            "very easily portable (only requires backing up a singular folder)",
            "simple keyboard-driven ui",
        ],
        section: "FOSS in Progress",
    },
];

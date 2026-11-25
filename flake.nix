{
  description = "Some project using flake-parts";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";

    mk-script.url = "github:givikuna/nix-mkScript";
  };

  outputs =
    inputs@{
      flake-parts,
      nixpkgs,
      mk-script,
      ...
    }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "aarch64-darwin"
        "x86_64-darwin"
      ];

      perSystem =
        { pkgs, ... }:
        let
          mkScript = mk-script.lib.mkScript pkgs { };
        in
        {
          devShells.default = pkgs.mkShell {
            packages =
              (with pkgs; [
                nodejs_latest
                git
                elvish
              ])
              ++ [
                (mkScript "website-build" "scripts/build.elv")
                (mkScript "website-dev" "scripts/dev.elv")
                (mkScript "website-preview" "scripts/preview.elv")
              ];
          };
        };
    };
}

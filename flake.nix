{
  description = "Lavanyaa Santhosh Portfolio Website";

  inputs =
    {
      nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    };

  outputs = { self, nixpkgs, ... }@inputs:
    let
      system = "aarch64-darwin";
      pkgs = nixpkgs.legacyPackages.${system};
    in
    {
      devShells.aarch64-darwin.default = (import ./shell.nix { inherit pkgs; });
    };
}

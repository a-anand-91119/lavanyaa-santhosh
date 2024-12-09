{ pkgs ? import <nixpkgs> { } } :

pkgs.mkShell
{
  nativeBuildInputs = with pkgs; [
    yarn
    nodejs_23
  ];

  shellHook = ''
   echo "Lavanyaa Santhosh Portfolio Website Environment Initialized"
  '';
}
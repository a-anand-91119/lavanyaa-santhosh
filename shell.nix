{ pkgs ? import <nixpkgs> { } } :

pkgs.mkShell
{
  nativeBuildInputs = with pkgs; [
    yarn
  ];

  shellHook = ''
   echo "Lavanyaa Santhosh Portfolio Website Environment Initialized"
  '';
}
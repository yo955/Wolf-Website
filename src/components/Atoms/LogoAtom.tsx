import React from "react";

interface LogoAtomProps {
  src: string;
  alt: string;
}

export const LogoAtom: React.FC<LogoAtomProps> = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-24 h-auto" />
);

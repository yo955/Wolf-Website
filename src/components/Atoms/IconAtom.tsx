import React from "react";
import Link from "next/link";
interface IconAtomProps {
  icon: React.ReactNode;
  link: string;
}

export const IconAtom: React.FC<IconAtomProps> = ({ icon, link }) => (
  <Link href={link} target="_blank" rel="noopener noreferrer" className="text-2xl">
    {icon}
  </Link>
);

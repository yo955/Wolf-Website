import Link from "next/link";
interface LinkAtomProps {
  link: string;
  children: React.ReactNode;
  className?: string;
}

export const LinkAtom: React.FC<LinkAtomProps> = ({
  link,
  children,
  className,
}) => (
  <Link
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
  >
    {children}
  </Link>
);

interface HeadingAtomProps {
  children: React.ReactNode;
  className: string;
}
export const HeadingAtom: React.FC<HeadingAtomProps> = ({
  children,
  className,
}) => {
  return <div className={className}>{children}</div>;
};

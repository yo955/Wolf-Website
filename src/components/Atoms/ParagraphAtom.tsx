interface ParagraphAtomProps {
  children: React.ReactNode;
  className: string;
}

export const ParagraphAtom: React.FC<ParagraphAtomProps> = ({
  children,
  className,
}) => {
  return <div className={className}>{children}</div>;
};

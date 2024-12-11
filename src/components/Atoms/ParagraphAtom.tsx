interface ParagraphAtomProps {
  text: string;
}

export const ParagraphAtom: React.FC<ParagraphAtomProps> = ({ text }) => {
  return <div>{text}</div>;
};

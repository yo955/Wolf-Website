interface HeadingAtomProps {
  text: string;
}
export const HeadingAtom: React.FC<HeadingAtomProps> = ({ text }) => {
  return <div>{text}</div>;
};

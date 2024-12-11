interface ButtonAtomprops {
  text: string;
  onClick?: () => void;
}

export const ButtonAtom: React.FC<ButtonAtomprops> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default ButtonAtom;

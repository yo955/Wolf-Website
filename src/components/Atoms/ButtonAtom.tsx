interface ButtonAtomprops {
  children: React.ReactNode;
  onClick?: () => void;
}

export const ButtonAtom: React.FC<ButtonAtomprops> = ({
  children,
  onClick,
}) => {
  return <button onClick={onClick}>{children}</button>;
};

export default ButtonAtom;

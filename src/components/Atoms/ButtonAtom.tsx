interface ButtonAtomprops {
  children: React.ReactNode;
  onClick?: () => void;
  className: string;
}

export const ButtonAtom: React.FC<ButtonAtomprops> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button className={`${className} cursor-pointer`} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonAtom;

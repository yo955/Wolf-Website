
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  id?: string;
}


export const Button: React.FC<ButtonProps> = ({ onClick, children, className, id }) => {
  return (
    <button onClick={onClick} className={className} id={id}>
      {children}
    </button>
  );
};

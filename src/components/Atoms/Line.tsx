interface LineProps {
  className: string;
}
export const Line: React.FC<LineProps> = ({ className }) => (
  <hr className={className} />
);

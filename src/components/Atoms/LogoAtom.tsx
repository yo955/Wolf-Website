import { ImgAtom } from "./ImgAtom";

interface LogoAtomProps {
  src: string;
  alt: string;
  className: string;
}

export const LogoAtom: React.FC<LogoAtomProps> = ({ src, alt, className }) => (
  <ImgAtom src={src} alt={alt} className={className} width={250} height={44} />
);

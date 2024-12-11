import Image from "next/image";

interface ImgAtomProps {
  src: string;
  alt: string;
  className: string;
}
export const ImgAtom: React.FC<ImgAtomProps> = ({ src, alt, className }) => {
  return <Image src={src} alt={alt} className={className} />;
};

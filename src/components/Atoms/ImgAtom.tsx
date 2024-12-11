import Image from "next/image";

interface ImgAtomProps {
  src: string;
  alt: string;
}
export const ImgAtom: React.FC<ImgAtomProps> = ({ src, alt }) => {
  return <Image src={src} alt={alt} />;
};

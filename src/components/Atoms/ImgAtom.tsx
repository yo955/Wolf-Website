import Image from "next/image";

interface ImgAtomProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}
export const ImgAtom: React.FC<ImgAtomProps> = ({
  src,
  alt,
  width,
  height,
  className,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

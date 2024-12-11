import { ImgAtom } from "@/components/Atoms";

interface ImageCardProps {
  imageUrl: string;
  altText: string;
}
export const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, altText }) => {
  return (
    <div>
      <ImgAtom src={imageUrl} alt={altText} />
    </div>
  );
};

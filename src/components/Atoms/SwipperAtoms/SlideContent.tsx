import { HeadingAtom, ImgAtom, ParagraphAtom } from "@/components/Atoms";

interface SlideContentprops {
  imageUrl: string;
  alt: string;
  title?: string;
  description?: string;
}

export const SlideContent: React.FC<SlideContentprops> = ({
  imageUrl,
  alt,
  title,
  description,
}) => {
  return (
    <div className="slide-content">
      <ImgAtom className="slide-image" src={imageUrl} alt={alt} />
      {title && <HeadingAtom className="slide-title">{title}</HeadingAtom>}
      {description && (
        <ParagraphAtom className="slide-paragraph">{description}</ParagraphAtom>
      )}
    </div>
  );
};

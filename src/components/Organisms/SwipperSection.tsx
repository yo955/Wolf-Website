import { ButtonAtom, HeadingAtom, ParagraphAtom } from "../Atoms";
import { ImageSlider } from "../Molecules";

export const SwipperSection: React.FC = () => {
  return (
    <div className="swipper-section">
      <ImageSlider />

      <div className="description">
        <HeadingAtom className="swipper-title">Coming Soon...</HeadingAtom>
        <ParagraphAtom className="swipper-paragraph">
          <strong>”Dashboard” </strong> to view and control your business
        </ParagraphAtom>
        <ButtonAtom>Join our waiting list</ButtonAtom>
      </div>
    </div>
  );
};

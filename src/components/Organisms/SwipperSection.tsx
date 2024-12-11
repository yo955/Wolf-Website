import { HeadingAtom, ParagraphAtom } from "../Atoms";
import { ImageSlider } from "../Molecules";

export const SwipperSection: React.FC = () => {
  return (
    <div className="swipper-section">
      <ImageSlider />

      <HeadingAtom className="swipper-title">Coming Soon...</HeadingAtom>

      <ParagraphAtom className="swipper-paragraph">
        ”Dashboard” to view and control your business
      </ParagraphAtom>
    </div>
  );
};

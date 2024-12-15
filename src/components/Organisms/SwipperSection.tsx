import { ButtonAtom, HeadingAtom, ParagraphAtom } from "../Atoms";
import { ImageSlider } from "../Molecules";

export const SwipperSection: React.FC = () => {
  return (
    <div className="swipper-section">
      <ImageSlider />

      <div className="description">
        <HeadingAtom className="swipper-title">
          <h1>Coming Soon...</h1>
        </HeadingAtom>
        <ParagraphAtom className="swipper-paragraph">
          <p>
            <span>”Dashboard” </span> to view and control your business
          </p>
        </ParagraphAtom>
        <ButtonAtom className="black-btn">Join our waiting list</ButtonAtom>
      </div>
    </div>
  );
};

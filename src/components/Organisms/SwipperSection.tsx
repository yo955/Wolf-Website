import { ButtonAtom, HeadingAtom, ParagraphAtom } from "../Atoms";
import { ImageSlider } from "../Molecules";

export const SwipperSection: React.FC = () => {
  return (
    <section className="swipper-section">
      
      <ImageSlider />

      <div className="description mt-8 px-4 text-center">
        
        <HeadingAtom className="swipper-title text-2xl font-semibold text-primary">
          <h1>Coming Soon...</h1>
        </HeadingAtom>

        
        <ParagraphAtom className="swipper-paragraph text-lg text-medium mt-4">
          <p>
            <span className="font-bold">”Dashboard” </span> to view and control
            your business
          </p>
        </ParagraphAtom>

     
        <ButtonAtom className="black-btn mt-6 px-6 py-3 text-white rounded-lg hover:bg-black">
          Join our waiting list
        </ButtonAtom>
      </div>
    </section>
  );
};

import { HeadingAtom, ParagraphAtom } from "../Atoms";
import PriceCards from "../Molecules/PriceCards";

export const PriceSection: React.FC = () => {
  return (
    <div className="price-section">
      <div className="price-container">
        <div className="price-description">
          <ParagraphAtom className="price-paragraph">
            <p>pricing</p>
          </ParagraphAtom>
          <HeadingAtom className="price-title">
            <h1>Simplify your work with magic</h1>
          </HeadingAtom>
        </div>
        <div className="price-cards">
          <PriceCards />
        </div>
      </div>
    </div>
  );
};

import { SwipperSection } from "../Organisms";
import { FooterSection } from "../Organisms/FooterSection";
import { PriceSection } from "../Organisms/PriceSection";
import { QusetionSection } from "../Organisms/QusetionSection";

export const MainTempleate = () => {
  return (
    <div>
      <SwipperSection />
      <PriceSection />
      <QusetionSection />
      <FooterSection />
    </div>
  );
};

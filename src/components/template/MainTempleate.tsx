// import { ContainerImg } from "../Atoms/ContainerImg";
import {
  FooterSection,
  PriceSection,
  QusetionSection,
  OurServices, SwipperSection,
  ClientsliderHome, OurWork 
} from "@/components";
// import Navbar from "../Organisms/Navbar";
import HeaderSection from "./HeaderSection";
export const MainTempleate = () => {
  return (
    <div>
      <div className="headerSection">
        <HeaderSection />
      </div>
      <ClientsliderHome />
      <OurServices />
      <OurWork />
      <SwipperSection />
      <PriceSection />
      <QusetionSection />
      <FooterSection />
    </div>
  );
};

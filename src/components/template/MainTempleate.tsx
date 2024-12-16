// import { ContainerImg } from "../Atoms/ContainerImg";
import { OurServices, SwipperSection } from "@/components/Organisms";
import { ClientsliderHome, OurWork } from "@/components/Organisms";
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
    </div>
  );
};

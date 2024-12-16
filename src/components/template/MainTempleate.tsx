


// import { ContainerImg } from "../Atoms/ContainerImg";
import { OurServices, SwipperSection } from "@/components/Organisms";
import {ClientsliderHome} from "@/components/Organisms/ClientsliderHome";
// import Navbar from "../Organisms/Navbar";
import HeaderSection from "./HeaderSection";
export const MainTempleate = () => {
  return (
    <div>
      <div className="headerSection">
        <HeaderSection />
      </div>
      <ClientsliderHome />
      <OurServices/>
      <SwipperSection />
    
    </div>
  );
};

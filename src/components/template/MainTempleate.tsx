// import { ContainerImg } from "../Atoms/ContainerImg";
import { SwipperSection } from "../Organisms";
import Home from "../Organisms/Clientslider-Organisms";
// import Navbar from "../Organisms/Navbar";
import HeaderSection from "./HeaderSection";
export const MainTempleate = () => {
  return (
    <div>
      <div className="headerSection">
        <HeaderSection />
      </div>
      <Home />
      <SwipperSection />
    </div>
  );
};

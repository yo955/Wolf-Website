"use client"
import { Swiper } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
interface SwipperContainerprops {
  children: React.ReactNode;
  loop?: true;
  autoplay?: true;
  spaceBetween?: number;
  slidesPerView: number;
}
export const SwipperContainer: React.FC<SwipperContainerprops> = ({
  children,
  loop,
  autoplay,
  slidesPerView,
  spaceBetween,
}) => {
  return (
    <Swiper
      loop={loop}
      autoplay={autoplay}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      pagination={{ clickable: true }}
      
    >
      {children}
    </Swiper>
  );
};

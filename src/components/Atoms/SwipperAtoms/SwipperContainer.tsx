"use client";
import { Swiper } from "swiper/react";
// استيراد الأنماط الخاصة بالـ Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules"; 

interface SwipperContainerprops {
  children: React.ReactNode;
  loop?: true;
  autoplay?: boolean;
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
      autoplay={autoplay ? { delay: 2500, disableOnInteraction: false } : false}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      pagination={{ clickable: true }}
      modules={[Autoplay]} 
      // navigation
    >
      {children}
    </Swiper>
  );
};

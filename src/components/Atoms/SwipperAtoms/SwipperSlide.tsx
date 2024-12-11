"use client"
import { SwiperSlide as SwiperSlideComponent } from "swiper/react";
interface SwiperSlideprops {
  children: React.ReactNode;
}
export const SwipperSlide: React.FC<SwiperSlideprops> = ({ children }) => {
  return <SwiperSlideComponent>{children}</SwiperSlideComponent>;
};

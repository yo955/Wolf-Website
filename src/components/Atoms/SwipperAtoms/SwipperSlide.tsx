"use client";
import { SwiperSlide as SwiperSlideComponent } from "swiper/react";
interface SwiperSlideprops {
  children: React.ReactNode;
  className?: string;
}
export const SwipperSlide: React.FC<SwiperSlideprops> = ({
  children,
  className,
}) => {
  return (
    <SwiperSlideComponent className={className}>
      {children}
    </SwiperSlideComponent>
  );
};

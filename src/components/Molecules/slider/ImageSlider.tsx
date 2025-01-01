"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import required components
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// Import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import PhoneData from "../../../data/PhoneData";

export function ImageSlider() {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 100,
          disableOnInteraction: false,
        }}
        speed={2000}
        loop={true}
        className=""
      >
        {PhoneData.map((e, index) => (
          <SwiperSlide key={index}>
            <Card sx={{border:"none"}}>
              <CardContent>
                <Image
                  src={e.photo}
                  alt="image"
                  width={302}
                  height={346}
                  style={{
                    borderRadius: "18.52px",
                  }}
                />
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

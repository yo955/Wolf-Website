"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import required components
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";

import Typography from "@mui/joy/Typography";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// Import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Container from "@mui/material/Container";
import Image from "next/image";
import cardData from "../../data/cardData";
import { Text } from "@/components";



export function ClientsliderHome() {
  const value = 3.5;
  return (
    <Container sx={{ mt: 10, mb: 20 }} className="con">
      <Text
        text={
          <div className="pairenttextclients">
            <span className="textListen">Don’t Just Listen to Us</span>
            <span className="textclients">what our clients are saying</span>
          </div>
        }
        className="textListen"
      />

      <div id="pagination"></div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // pagination={{
        //   el: "#pagination",
        //   clickable: true,
        // }}
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
          delay: 100, // فترة الانتظار بين الانتقالات
          disableOnInteraction: false, // يستمر التشغيل بعد التفاعل
        }}
        speed={2000} // سرعة الانتقال بين الشرائح
        loop={true} // التمرير بشكل دائري
        className="mySwiper"
      >
        {cardData.map((e, index) => (
          <SwiperSlide key={index}>
            <Card className="card">
              <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
                <Image
                  src={e.photo}
                  alt="image"
                  width={40}
                  height={40}
                  style={{
                    borderRadius: "50%",
                  }}
                />
                <Typography level="body-sm" sx={{ maxWidth: "24ch" }}>
                  {e.description}
                </Typography>
                <Rating
                  name="text-feedback"
                  value={value}
                  readOnly
                  precision={5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

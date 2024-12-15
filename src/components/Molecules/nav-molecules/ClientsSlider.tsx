import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ClientCard from '../atoms/ClientCard';

interface ClientsSliderProps {
  cardsData: Array<{
    photo: string;
    description: string;
    rating: number;
  }>;
}

export const ClientsSlider: React.FC<ClientsSliderProps> = ({ cardsData }) => {
  return (
    <div className="swiper-container-wrapper">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        className="swiper-container"
      >
        {cardsData.map((product, index) => (
          <SwiperSlide key={index}>
            <ClientCard
              photo={product.photo}
              description={product.description}
              rating={product.rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination"></div>
    </div>
  );
};

 
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Container from '@mui/material/Container';
import Text from '../atoms/Text';
import ClientsSlider from '../molecules/ClientsSlider';
import cardData from '../../data/cardData';

const Home: React.FC = () => {
  const value = 3.5;

  return (
    <Container sx={{ mt: 10, mb: 20 }} className="con">
      <Text
        text={
          <div className="pairenttextclients">
            <span className="textListen">Don’t Just Listen to Us</span>
            <span className="textclients">what our clients are saying</span>
          </div>
        }
        className="textListen"
      />

      <div id="pagination"></div>

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
        className="mySwiper"
      >
        {cardData.map((e, index) => (
          <SwiperSlide key={index}>
            <ClientCard
              photo={e.photo}
              description={e.description}
              rating={value}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Home;
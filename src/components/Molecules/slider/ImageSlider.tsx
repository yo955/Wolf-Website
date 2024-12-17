import {
  SlideContent,
  SwipperContainer,
  SwipperSlide,
} from "@/components/Atoms";

export const ImageSlider: React.FC = () => {
  const mainbath = "/images/slider";
  const slidesImgs = [];
  for (let i = 1; i <= 5; i++) {
    slidesImgs.push(`${mainbath}/swipper-${i}.png`);
  }
  return (
    <SwipperContainer slidesPerView={5} spaceBetween={50}>
      <SwipperSlide>
        <div className="slide-content flex gap-10">
          {slidesImgs.map((img, index) => (
            <SlideContent
              key={index}
              imageUrl={img}
              alt="sliderImg"
            ></SlideContent>
          ))}
        </div>
      </SwipperSlide>
    </SwipperContainer>
  );
};

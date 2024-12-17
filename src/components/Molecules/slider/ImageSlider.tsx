import {
  SlideContent,
  SwipperContainer,
  SwipperSlide,
} from "@/components";

export const ImageSlider: React.FC = () => {
  const mainbath = "/images/slider";
  const slidesImgs = [];
  for (let i = 1; i <= 5; i++) {
    const imagePath = `${mainbath}/swipper-${i}.png`;
    if (imagePath) slidesImgs.push(imagePath);
  }

  return (
    <SwipperContainer slidesPerView={5} spaceBetween={50} autoplay={true}>
      <SwipperSlide>
        <div className="slide-content flex gap-10">
          {slidesImgs.length > 0 ? (
            slidesImgs.map((img, index) => (
              <SlideContent
                key={index}
                imageUrl={img}
                alt="sliderImg"
              ></SlideContent>
            ))
          ) : (
            <div>No images available</div>
          )}
        </div>
      </SwipperSlide>
    </SwipperContainer>
  );
};

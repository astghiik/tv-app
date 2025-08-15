import Slider from 'react-slick';
import { type ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function Carousel({ children }: Props) {
  const settings = {
    slidesToShow: 8,
    slidesToScroll: 8,
    draggable: true,
    adaptiveHeight: true,
    pauseOnHover: true,
    arrows: false,
    dots: false,
    infinite: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
}

export default Carousel;

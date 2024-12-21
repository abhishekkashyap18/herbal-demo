import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    draggable: true,
    focusOnSelect: true,
    // autoplay: true,
    // autoplaySpeed: 1000,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const slides = [
    {
      img: '/carousel_banner_1.jpg',
      altText: 'Slide 1',
      name: 'oil'
      
    },
    {
      img: '/carousel_banner_2.png',
      altText: 'Slide 2'
    },
    {
      img: '/carousel_banner-3.jpg',
      altText: 'Slide 3'
    }
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <img className='w-full h-96' src={slide.img} alt={slide.altText} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
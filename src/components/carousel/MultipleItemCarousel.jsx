import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




const MultipleItemCarousel = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5, 
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        }
      ]
    };
  
    const slides = [
      {
        img: '/hero_product_1.webp',
        altText: 'Slide 1',
        name: 'product-1',
        price: '399',
        rating: '4'
      },
      {
        img: '/hero_product_2.jpg',
        altText: 'Slide 2',
        name: 'product-1',
        price: '399',
        rating: '4'
      },
      {
        img: '/hero_product_3.webp',
        altText: 'Slide 3',
        name: 'product-1',
        price: '399',
        rating: '4'
      },
      {
        img: '/hero_product_4.jpg',
        altText: 'Slide 4',
        name: 'product-1',
        price: '399',
        rating: '4'
      },
      {
        img: '/hero_product_5.jpg',
        altText: 'Slide 5',
        name: 'product-1',
        price: '399',
        rating: '4'
      },
      {
        img: '/hero_product_6.jpeg',
        altText: 'Slide 6',
        name: 'product-1',
        price: '399',
        rating: '4'
      },
    ];
  
    return (
      <div className='slider-container bg-[#d3f3d5] p-5'>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className='border-solid border-2 border-black rounded-md p-6' key={index}>
            <img className='w-60 h-44 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1  hover:translate-x-1 hover:scale-110 duration-300' src={slide.img} alt={slide.altText} />
            <div className='px-4 text-center '>
              <h1 className='font-medium text-lg'>{slide.name}</h1>
              <h2 className='font-medium'>Ratings: {slide.rating}</h2>
              <h1 className='text-red-600 font-extrabold text-lg'>Rs. {slide.price}/-</h1>
              <button className='border-solid border-2 border-black rounded-md p-2 bg-orange-400 hover:bg-orange-500 mt-1'>Add to cart</button>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    );
  };
  
  export default MultipleItemCarousel;
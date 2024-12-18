// src/components/Slider/Slider.jsx
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
// import SlideImage1 from '../assets/images/image.png';
import SlideImage2 from '../assets/images/product8.webp';
import SlideImage3 from '../assets/images/product7.webp';
import SlideImage4 from '../assets/images/product9.webp';
import '../css/Slider.css'
// Добавьте больше изображений по необходимости

const Slider = () => {
  const slides = [
    { id: 2, image: SlideImage2, alt: 'Slide 1' },
    { id: 3, image: SlideImage4, alt: 'Slide 3' },
    { id: 1, image: SlideImage3, alt: 'Slide 2' },
    // Добавьте больше слайдов
  ];

  return (
    <Splide options={{ type: 'loop', perPage: 1, arrows: true, pagination: false }}>
      {slides.map((slide) => (
        <SplideSlide key={slide.id}>
          <div
            className="w-full h-72 flex items-center justify-center bg-center bg-cover"
            style={{ backgroundImage: `url(${slide.image})` }}
            onClick={() => window.location.href = '#'}
          >
            <img src={slide.image} alt={slide.alt} className="max-w-full max-h-72" loading="lazy" />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Slider;

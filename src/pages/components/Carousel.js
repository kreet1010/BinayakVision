import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Carousel1 from '../assets/Carousel1.jpg';
import Carousel2 from '../assets/Carousel2.JPG';
import Carousel3 from '../assets/Carousel3.jpg';
import Carousel4 from '../assets/Carousel4.jpg';
import Carousel5 from '../assets/Carousel5.jpg';
import Carousel6 from '../assets/Carousel6.jpg';
import Carousel7 from '../assets/Carousel7.jpg';
import Carousel8 from '../assets/Carousel8.jpg';
import Carousel9 from '../assets/Carousel9.jpg';
import '../styles/Carousel.css';

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const images = [Carousel1, Carousel2, Carousel3, Carousel4, Carousel5, Carousel6, Carousel7, Carousel8, Carousel9];

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((src, index) => (
          <div className="embla__slide" key={index}>
            <img src={src} className="embla_image" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmblaCarousel;

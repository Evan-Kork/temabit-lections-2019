import React from 'react';
import { Carousel } from 'react-bootstrap';
import imges from '../../../../data/imges';
import '../../../../../scss/pages/home/elements/main-carusel.scss';

const MainCarousel = () => (
  <Carousel className="carusel" indicators={false}>
    {
      imges.map(({ src, alt }) => (
        <Carousel.Item key={alt}>
          <img
            className="d-block w-100"
            src={src}
            alt={alt}
          />
        </Carousel.Item>)
      )
    }
  </Carousel>
);

export default MainCarousel

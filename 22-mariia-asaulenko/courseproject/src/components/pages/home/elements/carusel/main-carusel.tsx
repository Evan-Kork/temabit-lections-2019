import * as React from 'react';
import { Carousel } from 'react-bootstrap';
import * as imges from '../../../../data/imges.json';
import '../../../../../scss/pages/home/elements/main-carusel.scss';

type imge = {
  src:string,
  alt?:string
}

const MainCarousel = () => (
  <Carousel className="carusel" indicators={false}>
    {
      imges.map(({ src, alt }:imge) => (
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

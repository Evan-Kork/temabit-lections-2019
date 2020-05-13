import React, {Component, useState} from 'react';
import slide1 from '../../resources/slider/Kasta_for_sayt.jpg'
import slide2 from '../../resources/slider/Os_kab_Sayt.jpg'
import slide3 from '../../resources/slider/Sayt_ROZETKA_3-1.jpg'
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} fade={true}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}
export default ControlledCarousel
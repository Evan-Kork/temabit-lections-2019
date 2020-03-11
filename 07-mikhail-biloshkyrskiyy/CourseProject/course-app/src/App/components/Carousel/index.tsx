import React from 'react'
import { Carousel as CarouselBootstrap } from 'react-bootstrap'

import classes from './index.module.scss'
const Carousel: React.FC = () => {
    const carouselItems = [
        "https://via.placeholder.com/1368x450",
        "https://via.placeholder.com/1368x450",
        "https://via.placeholder.com/1368x450"
    ]

    return (
        <CarouselBootstrap indicators={false}>
            { carouselItems.map((value: string, index: number) => getCarouselItem(value, index)) }
        </CarouselBootstrap>
    )
}

export default Carousel

function getCarouselItem(src: string, key: number) {
    return <CarouselBootstrap.Item key={key}>
        <img className={`${classes.carouselItem} d-block w-100`} src={src} alt="First slide" />
    </CarouselBootstrap.Item>
}
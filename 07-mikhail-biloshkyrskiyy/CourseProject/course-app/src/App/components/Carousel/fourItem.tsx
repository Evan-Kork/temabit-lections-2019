import React, { useState, useRef, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Box from '@material-ui/core/Box'

import classes from './fourItemStyle.module.scss'

const FourItem: React.FC = () => {
    // Input data
    const carouselItems = [
        "https://via.placeholder.com/250x150",
        "https://via.placeholder.com/250x150",
        "https://via.placeholder.com/250x150",
        "https://via.placeholder.com/250x150",
        "https://via.placeholder.com/250x150",
        "https://via.placeholder.com/250x150",
        "https://via.placeholder.com/250x150",
        "https://via.placeholder.com/250x150",
        "https://via.placeholder.com/250x150",
        "https://via.placeholder.com/250x150",
        "https://via.placeholder.com/250x150",
        "https://via.placeholder.com/250x150",
        "https://via.placeholder.com/250x150",
        "https://via.placeholder.com/250x150"
    ]

    const [mediaCarousel, setMediaCarousel] = useState({ size: 0, type: 'none', minWidth: 0 })
    const widthCarouselRef = useRef(null)

    // Updates the state media.
    // Enhances the resize event
    // And removes the event with a DOM components reboot
    useEffect(() => {
        //@ts-ignore
        setMediaCarousel(GetMediaSettings(widthCarouselRef.current.offsetWidth, 250))

        const handleResize = () => {
            //@ts-ignore
            setMediaCarousel(GetMediaSettings(widthCarouselRef.current.offsetWidth, 250))
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div ref={widthCarouselRef}>
            <Carousel className={classes.carousel} controls={false}>
                {sliceItems(carouselItems, mediaCarousel.size).map((value: string[], index: number) => getCarouselItem(value, index, mediaCarousel.type))}
            </Carousel>
        </div>
    )
}

export default FourItem

// Goes through an array and forms an item for Carousel components
function getCarouselItem(src: string[], key: number, type: string) {
    return (
        <Carousel.Item key={key} className={classes.carouselItems}>
            <Box className={classes.carouselItem}>
                {src.map((value, index) => {
                    return getDisplayCarouselItem(type, value, index)
                })}
            </Box>
        </Carousel.Item>
    )
}
// Selects by type of desired element and specifies media queries
function getDisplayCarouselItem(media: string, src: string, key: number) {
    switch (media) {
        case 'XS':
            return <div key={key} className="d-block d-sm-none">
                <Box className={classes.carouselImage}>
                    <img src={src} alt="" />
                </Box>
            </div>
        case 'SM':
            return <div key={key} className="d-none d-sm-block">
                <Box className={classes.carouselImage}>
                    <img src={src} alt="" />
                </Box>
            </div>
        case 'MD':
            return <div key={key} className="d-none d-md-block">
                <Box className={classes.carouselImage}>
                    <img src={src} alt="" />
                </Box>
            </div>
        case 'LG':
            return <div key={key} className="d-none d-lg-block">
                <Box className={classes.carouselImage}>
                    <img src={src} alt="" />
                </Box>
            </div>
        case 'XL':
            return <div key={key} className="d-none d-xl-block">
                <Box className={classes.carouselImage}>
                    <img src={src} alt="" />
                </Box>
            </div>
    }
}
// Slices one array into several arrays of a certain length
function sliceItems(items: string[], step: number): string[][] {
    if (step > 0) {
        const arrayRow: string[][] = new Array()
        for (let i = 0; i < items.length; i += step) {
            arrayRow.push(items.slice(i, i + step))
        }
        return arrayRow
    } else {
        return new Array()
    }
}
// Checks the approximate size of the number of blocks that fit with the blanks and returns the type.
function GetMediaSettings(width: number, widthElement: number) {
    const mediaType = [
        {
            type: 'XS',
            size: 1,
            minWidth: 0
        },
        {
            type: 'SM',
            size: 1,
            minWidth: 540
        },
        {
            type: 'MD',
            size: 2,
            minWidth: 720
        },
        {
            type: 'LG',
            size: 3,
            minWidth: 960
        },
        {
            type: 'XL',
            size: 4,
            minWidth: 1140
        },
    ]

    try {
        for (let i = 0; i < mediaType.length; i++) {
            if (mediaType[i].size === Math.floor(width / widthElement)) {
                if (mediaType[i].minWidth <= width) {
                    return mediaType[i]
                } else {
                    return mediaType[i - 1]
                }
            }
        }
        return mediaType[0]
    } catch (error) { }
}
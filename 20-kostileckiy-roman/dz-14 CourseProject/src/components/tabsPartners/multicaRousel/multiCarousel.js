import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
import Card from "react-bootstrap/Card";
import styles from './multiCarousel.module.css'
import CardGroup from "react-bootstrap/CardGroup";
import {createStore} from "redux";
import {tabsAndPartner} from "../../../redux/tabsAndPartnerReduser";

class MultiCarousel extends Component {
    constructor(props) {
        super(props);
        this.store = createStore(tabsAndPartner).getState().MULTICAROUSEL
        this.logoPackOne = this.store.PARTNERS_LOGO_1.map(element =>
                <Card style={{ width: '18rem' }} className={styles.cardsImg}>
                    <Card.Img variant="top" src={element}/>
                </Card>
        )
        this.logoPackTwo = this.store.PARTNERS_LOGO_2.map(element =>
            <Card style={{ width: '18rem' }} className={styles.cardsImg}>
                <Card.Img variant="top" src={element}/>
            </Card>
        )
    }
    render() {
        return (
            <Container>
                    <Carousel controls={false}>
                        <CarouselItem>
                            <CardGroup className={styles.cardsgroup}>
                                {this.logoPackOne}
                            </CardGroup>
                        </CarouselItem>
                        <CarouselItem>
                            <CardGroup className={styles.cardsgroup}>
                                {this.logoPackTwo}
                            </CardGroup>
                        </CarouselItem>
                    </Carousel>
            </Container>
        );
    }
}

export default MultiCarousel;
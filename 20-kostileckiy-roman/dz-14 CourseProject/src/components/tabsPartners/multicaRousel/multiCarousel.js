import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
import Card from "react-bootstrap/Card";
import styles from './multiCarousel.module.css'
import CardGroup from "react-bootstrap/CardGroup";
import RozetkaLogo from './../../../resources/partners/rozetka_logo.png'
import AutoluxLogo from './../../../resources/partners/autolux_logo.png'
import FozzyLogo from './../../../resources/partners/fozzy_logo.png'
import ElmirLogo from './../../../resources/partners/elmir_logo.png'
import ParfumsLogo from './../../../resources/partners/parfums_logo.png'
import PromLogo from './../../../resources/partners/prom_logo.png'
import RingoLogo from './../../../resources/partners/ringo_logo.png'
import ThrashLogo from './../../../resources/partners/thrash_logo.png'


class MultiCarousel extends Component {
    render() {
        return (
            <Container>
                    <Carousel controls={false}>
                        <CarouselItem>
                            <CardGroup className={styles.cardsgroup}>

                                <Card style={{ width: '18rem' }} className={styles.cardsImg} >
                                    <Card.Img variant="top" src={RozetkaLogo} />
                                </Card>
                                <Card style={{ width: '18rem' }} className={styles.cardsImg} >
                                    <Card.Img variant="top" src={AutoluxLogo} />
                                </Card>
                                <Card style={{ width: '18rem' }} className={styles.cardsImg} >
                                    <Card.Img variant="top" src={FozzyLogo} />
                                </Card>
                                <Card style={{ width: '18rem' }} className={styles.cardsImg} >
                                    <Card.Img variant="top" src={ElmirLogo} />
                                </Card>
                            </CardGroup>
                        </CarouselItem>
                        <CarouselItem>
                            <CardGroup className={styles.cardsgroup}>
                                <Card style={{ width: '18rem' }} className={styles.cardsImg} >
                                    <Card.Img variant="top" src={ParfumsLogo} />
                                </Card>
                                <Card style={{ width: '18rem' }} className={styles.cardsImg} >
                                    <Card.Img variant="top" src={PromLogo} />
                                </Card>
                                <Card style={{ width: '18rem' }} className={styles.cardsImg} >
                                    <Card.Img variant="top" src={RingoLogo} />
                                </Card>
                                <Card style={{ width: '18rem' }} className={styles.cardsImg} >
                                    <Card.Img variant="top" src={ThrashLogo} />
                                </Card>
                            </CardGroup>
                        </CarouselItem>
                    </Carousel>
            </Container>
        );
    }
}

export default MultiCarousel;
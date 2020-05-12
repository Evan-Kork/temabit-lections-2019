import React, {Component} from 'react';
import partners from '../../../resources/partners.png';
import styles from '../partners.module.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MultiCarousel from "../multicaRousel/multiCarousel";


class Partners extends Component {
    render() {
        return (
            <Container>
                <Row className={styles.partnersImg}>
                    <img src={partners} alt=""/>
                </Row>
                <Row>
                    <MultiCarousel/>
                </Row>
            </Container>
        );
    }
}

export default Partners;
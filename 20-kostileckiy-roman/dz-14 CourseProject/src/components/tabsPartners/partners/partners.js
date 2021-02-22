import React, {Component} from 'react';
import styles from '../partners.module.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MultiCarousel from "../multicaRousel/multiCarousel";
import {createStore} from "redux";
import {tabsAndPartner} from "../../../redux/tabsAndPartnerReduser";

class Partners extends Component {
    constructor(props) {
        super(props);
        this.store = createStore(tabsAndPartner).getState().PARTNERS
    }
    render() {
        return (
            <Container>
                <Row className={styles.partnersImg}>
                    <img src={this.store.IMG} alt={this.store.TEXT}/>
                </Row>
                <Row>
                    <MultiCarousel/>
                </Row>
            </Container>
        );
    }
}

export default Partners;
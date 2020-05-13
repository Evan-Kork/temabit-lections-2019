import React, {Component} from 'react';
import styles from "../partners.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {TRACKER_PAGE} from "../../../redux/pagePath";
import {createStore} from "redux";
import {tabsAndPartner} from "../../../redux/tabsAndPartnerReduser";

class Cards extends Component {
    constructor(props) {
        super(props);
        this.store = createStore(tabsAndPartner).getState()
    }
    render() {
        return (
            <div className={styles.container}>
                <Card className={styles.ourDep} style={{ width: '24rem' }}>
                    <Card.Title className={styles.titleContainer}>
                        <img
                            src={this.store.LOCATION.IMG}
                            alt={this.store.LOCATION.TEXT} className={styles.tabImage}/>
                    </Card.Title>
                    <Card.Body className={styles.bodyContainer}>
                        <Card.Title>{this.store.LOCATION.TITLE}</Card.Title>
                        <Button
                            variant="primary"
                            className={styles.button}
                            href={this.store.LOCATION.LINK}>
                            {this.store.LOCATION.BTN_TEXT}
                        </Button>
                    </Card.Body>
                </Card>
                <Card className={styles.calc} style={{ width: '24rem' }}>
                    <Card.Title className={styles.titleContainer}>
                        <img src={this.store.CALCULATOR.IMG} alt={this.store.CALCULATOR.TEXT} className={styles.tabImage}/>
                    </Card.Title>
                    <Card.Body className={styles.bodyContainer}>
                        <Card.Title>Калькулятор</Card.Title>
                        <Button
                            variant="primary"
                            href={this.store.CALCULATOR.LINK}
                            className={styles.button}>
                            {this.store.CALCULATOR.BTN_TEXT}
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Cards;
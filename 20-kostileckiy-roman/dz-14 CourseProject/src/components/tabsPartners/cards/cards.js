import React, {Component} from 'react';
import styles from "../partners.module.css";
import Card from "react-bootstrap/Card";
import Locations from "../../../resources/ico-location.png";
import Button from "react-bootstrap/Button";
import Calculator from "../../../resources/ico-calculator.png";
import {TRACKER_PAGE} from "../../../redux/pagePath";

class Cards extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Card className={styles.ourDep} style={{ width: '24rem' }}>
                    <Card.Title className={styles.titleContainer}>
                        <img src={Locations} alt="" className={styles.tabImage}/>
                    </Card.Title>
                    <Card.Body className={styles.bodyContainer}>
                        <Card.Title>Наші відділення</Card.Title>
                        <Button variant="primary" className={styles.button}>ЗНАЙТИ</Button>
                    </Card.Body>
                </Card>
                <Card className={styles.calc} style={{ width: '24rem' }}>
                    <Card.Title className={styles.titleContainer}>
                        <img src={Calculator} alt="" className={styles.tabImage}/>
                    </Card.Title>
                    <Card.Body className={styles.bodyContainer}>
                        <Card.Title>Калькулятор</Card.Title>
                        <Button variant="primary" href={TRACKER_PAGE} className={styles.button}>РОЗРАХУВАТИ ВАРТІСТЬ ВІДПРАВЛЕННЯ</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Cards;
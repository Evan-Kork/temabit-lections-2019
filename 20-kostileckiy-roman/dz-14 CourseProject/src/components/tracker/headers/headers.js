import React, {Component} from 'react';
import styles from "../tracker.module.css";
import Row from "react-bootstrap/Row";


class Headers extends Component {
    render() {
        return (
            <Row className={styles.calcTitles}>
                <h1 className={styles.calcMainTitle}>Калькулятор</h1>
                <h1 className={styles.calcSubTitle}>Розрахуйте вартість</h1>
            </Row>
        );
    }
}

export default Headers;
import React, {Component} from 'react';
import styles from "../tracker.module.css";
import Row from "react-bootstrap/Row";
import {createStore} from "redux";
import {calcaculate} from "../../../redux/Calculate";


class Headers extends Component {
    constructor(props) {
        super(props);
        this.store = createStore(calcaculate).getState().HEADERS
    }

    render() {
        return (
            <Row className={styles.calcTitles}>
                <h1 className={styles.calcMainTitle}>{this.store.TITLE}</h1>
                <h1 className={styles.calcSubTitle}>{this.store.SUB_TITLE}</h1>
            </Row>
        );
    }
}

export default Headers;
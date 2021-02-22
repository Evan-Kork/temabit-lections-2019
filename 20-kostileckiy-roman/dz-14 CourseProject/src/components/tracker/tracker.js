import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import styles from './tracker.module.css';
import Headers from "./headers/headers";
import Calc from "./calc/calc";

class Tracker extends Component {
    render() {
        return (
            <Container fluid className={styles.MainContainer}>
                <Container>
                    <Headers/>
                    <Calc/>
                </Container>
            </Container>
        );
    }
}

export default Tracker;
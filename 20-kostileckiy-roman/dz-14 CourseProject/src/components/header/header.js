import React, {Component} from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import styles from './header.module.css';
import logo from '../../resources/logo_new.png';
import InternationalDelivery from '../../resources/Knopka_Mignarodna_DOSTAVKA.png'
import Cabinet from '../../resources/KABINET.png'
import FormControl from "react-bootstrap/FormControl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from '@fortawesome/free-solid-svg-icons'
import Container from "react-bootstrap/Container";


class Header extends Component {
    render() {
        return (
            <Container fluid className={styles.header}>
            <Container className={styles.headerConatainer}>

                    <Row className={styles.rowContainer}>
                        <Col xl={3}>
                            <div className={styles.logo}>
                                <a href="/"><img src={logo} alt=""/></a>
                            </div>
                        </Col>
                        <Col xl={4}>
                            <div className={styles.buttons}>
                                <a href="/"><img src={InternationalDelivery} alt="Международная доставка"/></a>
                                <a href="/"><img src={Cabinet} alt="Кабинет"/></a>
                            </div>
                        </Col>
                        <Col xl={2}>
                            <div className={styles.tel}>
                                <a href="tel:0-800-301-661">0-800-301-661</a>
                            </div>
                        </Col>
                        <Col xl={2} className={styles.searchBlock}>
                            <Form inline>
                                <FormControl type="text" placeholder="Номер отправки" className={styles.search}/>
                            </Form>
                        </Col>
                        <Col xl={1}>
                            <a href="/" className={styles.menuButton}>
                                <FontAwesomeIcon icon={faBars}/>
                            </a>
                        </Col>
                    </Row>

            </Container>
            </Container>
        );
    }
}

export default Header;
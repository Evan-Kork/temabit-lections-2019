import React, {Component} from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import styles from './header.module.css';
import FormControl from "react-bootstrap/FormControl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import {createStore} from "redux";
import {header} from "../../redux/headerReduser";


class Header extends Component {
    constructor(props) {
        super(props);
        this.store = createStore(header).getState()
    }
    render() {
        return (
            <Container fluid className={styles.header}>
            <Container>
                    <Row className={styles.rowContainer}>
                        <Col xl={3}>
                            <div className={styles.logo}>
                                <a href={this.store.JUSTIN_LOGO.LINK}>
                                    <img src={this.store.JUSTIN_LOGO.IMG}
                                         alt={this.store.JUSTIN_LOGO.TEXT}/>
                                </a>
                            </div>
                        </Col>
                        <Col xl={4}>
                            <div className={styles.buttons}>
                                <a href={this.store.INTERNATIONAL_DELIVERY.LINK}>
                                    <img src={this.store.INTERNATIONAL_DELIVERY.IMG}
                                         alt={this.store.INTERNATIONAL_DELIVERY.TEXT}/>
                                </a>
                                <a href={this.store.CABINET.LINK}>
                                    <img src={this.store.CABINET.IMG}
                                         alt={this.store.CABINET.TEXT}/>
                                </a>
                            </div>
                        </Col>
                        <Col xl={2}>
                            <div className={styles.tel}>
                                <a href={this.store.CONTACT.LINK}>{this.store.CONTACT.TEL}</a>
                            </div>
                        </Col>
                        <Col xl={2} className={styles.searchBlock}>
                            <Form inline>
                                <FormControl
                                    type={this.store.FORM.TYPE}
                                    placeholder={this.store.FORM.PLACEHOLDER}
                                    className={styles.search}
                                />
                            </Form>
                        </Col>
                        <Col xl={1}>
                            <a href="/" className={styles.menuButton}>
                                <FontAwesomeIcon icon={this.store.ICON_FA_BARS}/>
                            </a>
                        </Col>
                    </Row>
            </Container>
            </Container>
        );
    }
}

export default Header;
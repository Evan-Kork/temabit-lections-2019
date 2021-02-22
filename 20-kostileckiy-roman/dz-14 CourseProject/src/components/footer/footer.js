import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FooterLinks from "./footerLinks/footerLinks";
import styles from './footer.module.css'
import FoterDown from "./foterDown/foterDown";

class Footer extends Component {
    render() {
        return (
            <Container fluid className={styles.footerMainContainer}>
                <Row>
                    <FooterLinks/>
                    <FoterDown/>
                </Row>
            </Container>
        );
    }
}

export default Footer;
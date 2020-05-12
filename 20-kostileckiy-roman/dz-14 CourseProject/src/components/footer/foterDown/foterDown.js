import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from '../footer.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTelegram, faFacebookMessenger, faViber } from '@fortawesome/free-brands-svg-icons'

class FoterDown extends Component {
    render() {
        return (
            <Container>
                <Row className={styles.footerDownFlex}>
                    <div className={styles.copyring}>© 2020 Компания Justin</div>
                    <div className={styles.socialLinks}>
                        <ul>
                            <li><a href="/"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faTelegram} /></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faFacebookMessenger} /></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faViber} /></a></li>
                        </ul>
                    </div>
                    <div className={styles.privacyPolicy}>
                        <a href="/">Політика конфіденційності</a>
                    </div>
                </Row>
            </Container>
        );
    }
}

export default FoterDown;
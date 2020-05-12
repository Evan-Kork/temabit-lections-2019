import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from '../footer.module.css'

class FooterLinks extends Component {
    render() {
        return (
            <Container>
                <Row className={styles.footerLinks}>
                    <div>
                        <ul>
                            <li><a href="/">Про Justin</a></li>
                            <li><a href="/">Карта відділень</a></li>
                            <li><a href="/">Список відділень</a></li>
                            <li><a href="/">Розрахунок вартості</a></li>
                        </ul>
                    </div>
                    <div className={styles.centerLinks}>
                        <ul>
                            <li><a href="/">Тарифи</a></li>
                            <li><a href="/">Умови надання послуг</a></li>
                            <li><a href="/">Питання та відповіді</a></li>
                            <li><a href="/">Укласти договір</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><a href="/">Наші партнери</a></li>
                            <li><a href="/">Кредитні посередники</a></li>
                            <li><a href="/">Новини</a></li>
                            <li><a href="/">Контакти</a></li>
                        </ul>
                    </div>
                </Row>
            </Container>
        );
    }
}

export default FooterLinks;
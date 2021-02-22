import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from '../footer.module.css'
import {createStore} from "redux";
import {Footer} from "../../../redux/footerReducer";

class FooterLinks extends Component {
    constructor(props) {
        super(props);
        this.store = createStore(Footer).getState()
        this.leftLinks = this.store.LINKS.LEFT.map(element => <li key={element.toString()}><a href="/" >{element}</a></li>)
        this.middleLinks = this.store.LINKS.MIDDLE.map(element => <li key={element.toString()}><a href="/">{element}</a></li>)
        this.rightLinks = this.store.LINKS.RIGHT.map(element => <li key={element.toString()}><a href="/">{element}</a></li>)
    }
    render() {
        return (
            <Container>
                <Row className={styles.footerLinks}>
                    <div>
                        <ul>
                            {this.leftLinks}
                        </ul>
                    </div>
                    <div className={styles.centerLinks}>
                        <ul>
                            {this.middleLinks}
                        </ul>
                    </div>
                    <div>
                        <ul>
                            {this.rightLinks}
                        </ul>
                    </div>
                </Row>
            </Container>
        );
    }
}
export default FooterLinks;
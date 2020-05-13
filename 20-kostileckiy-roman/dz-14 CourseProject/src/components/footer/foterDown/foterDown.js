import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from '../footer.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {createStore} from "redux";
import {Footer} from "../../../redux/footerReducer";

class FoterDown extends Component {
    constructor(props) {
        super(props);
        this.store = createStore(Footer).getState().DOWN_SIDE
    }
    render() {
        return (
            <Container>
                <Row className={styles.footerDownFlex}>
                    <div className={styles.copyring}>{this.store.COPYRING.TEXT}</div>
                    <div className={styles.socialLinks}>
                        <ul>
                            <li>
                                <a
                                    href={this.store.ICONS.FACEBOOK.LINK}
                                    title={this.store.ICONS.FACEBOOK.TITLE}><FontAwesomeIcon
                                    icon={this.store.ICONS.FACEBOOK.ICON} />
                                </a>
                            </li>
                            <li>
                                <a
                                    href={this.store.ICONS.INSTAGFRAM.LINK}><FontAwesomeIcon
                                    title={this.store.ICONS.INSTAGFRAM.TITLE}
                                    icon={this.store.ICONS.INSTAGFRAM.ICON} />
                                </a>
                            </li>
                            <li>
                                <a
                                    href={this.store.ICONS.TELEGRAM.LINK}><FontAwesomeIcon
                                    title={this.store.ICONS.TELEGRAM.TITLE}
                                    icon={this.store.ICONS.TELEGRAM.ICON}/>
                                </a>
                            </li>
                            <li>
                                <a href={this.store.ICONS.MESSENGER.LINK}><FontAwesomeIcon
                                    title={this.store.ICONS.MESSENGER.TITLE}
                                    icon={this.store.ICONS.MESSENGER.ICON} />
                                </a>
                            </li>
                            <li>
                                <a
                                    href={this.store.ICONS.VIBER.LINK}><FontAwesomeIcon
                                    title={this.store.ICONS.VIBER.TITLE}
                                    icon={this.store.ICONS.VIBER.ICON} /></a></li>
                        </ul>
                    </div>
                    <div className={styles.privacyPolicy}>
                        <a href={this.store.PRIVACY_POLICY.LINK}>{this.store.PRIVACY_POLICY.TEXT}</a>
                    </div>
                </Row>
            </Container>
        );
    }
}
export default FoterDown;
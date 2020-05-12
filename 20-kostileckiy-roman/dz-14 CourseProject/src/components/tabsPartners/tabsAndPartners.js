import React, {Component} from 'react';
import Cards from "./cards/cards";
import styles from "./partners.module.css";
import Partners from "./partners/partners";

class TabsAndPartners extends Component {
    render() {
        return (
                <div className={styles.containerbg}>
                    <Cards/>
                    <Partners/>
                </div>
        );
    }
}

export default TabsAndPartners;
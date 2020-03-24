import "./style.scss";

import React from "react";

import FooterAside from "./FooterAside";
import FooterBottom from "./FooterBottom";

const Footer = (props) => {

    return (
        <footer className="site_footer">
            <div className="container">
                <FooterAside />
                <FooterBottom />                
            </div>
        </footer>
    );
};

export default Footer;

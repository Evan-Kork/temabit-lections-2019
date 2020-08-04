import React from "react";
import { Link } from "react-router-dom";


import {rootHref} from "../../config/core";
import logoImg from "../../img/logo_new.png";

const LogoLink = (props) => {

    return (
        <Link
            to={rootHref}
        >
            <img src={logoImg} className="logo_new" alt="Justin" />
        </Link>
    );
};

export default LogoLink;

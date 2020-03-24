import React, { Fragment } from "react";
import {Helmet} from "react-helmet";

import Header from "../../../components/Site-Header";
import Footer from "../../../components/Site-Footer";
import CookiesBar from "../../../components/UI/Cookies/Bar";
import ModalSpinner from "../../../components/Spinners/Modal";

function LayoutMain(props) {
    const {children} = props;
    return (
        <Fragment>
            <Helmet
                defaultTitle="Justin"
                titleTemplate="Justin | %s"
            ></Helmet>
            
            <Header {...props} />
            {children}
            <Footer />

            <CookiesBar />
            <ModalSpinner />
        </Fragment>
    );
};

export default LayoutMain;

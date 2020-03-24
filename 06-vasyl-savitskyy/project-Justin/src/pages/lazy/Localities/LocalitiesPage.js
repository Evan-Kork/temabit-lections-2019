import "./style.scss";

import React from "react";
import {Helmet} from "react-helmet";

import LayoutMain from "../../../containers/Layout/Main";
import LocalitiesContainer from "../../../containers/Localities";
import PageHeadSeparator from "../../../components/UI/PageHeadSeparator";

function LocalitiesPage(props) {
    const title = "Населені пункти";

    return (
        <LayoutMain {...props}>
            <Helmet>
                <title>{title}</title>
            </Helmet>

            <div className="container pt-3 pb-3 localities">
                <PageHeadSeparator />
                <LocalitiesContainer {...props} />
            </div>
        </LayoutMain>
    );
};

export default LocalitiesPage;

import "./style.scss";

import React from "react";
import {Helmet} from "react-helmet";

import LayoutMain from "../../../containers/Layout/Main";
import TrackingContainer from "../../../containers/Tracking";
import PageHeadSeparator from "../../../components/UI/PageHeadSeparator";

function TrackingPage(props) {
    const title = "Відстежити посилку";

    return (
        <LayoutMain {...props}>
            <Helmet>
                <title>{title}</title>
            </Helmet>

            <div className="container pt-3 pb-3 tracking">
                <PageHeadSeparator />
                <TrackingContainer {...props} />
            </div>
        </LayoutMain>
    );
};

export default TrackingPage;

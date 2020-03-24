import "./style.scss";

import React from "react";
import {Helmet} from "react-helmet";

import LayoutMain from "../../../containers/Layout/Main";
import TrackingHistoryContainer from "../../../containers/TrackingHistory";
import PageHeadSeparator from "../../../components/UI/PageHeadSeparator";

function TrackingHistoryPage(props) {
    const title = "Відстежити посилку";

    return (
        <LayoutMain {...props}>
            <Helmet>
                <title>{title}</title>
            </Helmet>

            <div className="container pt-3 pb-3 tracking_history">
                <PageHeadSeparator />
                <TrackingHistoryContainer {...props} />
            </div>
        </LayoutMain>
    );
};

export default TrackingHistoryPage;

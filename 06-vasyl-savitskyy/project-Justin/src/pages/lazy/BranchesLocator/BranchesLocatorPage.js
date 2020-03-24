import "./style.scss";

import React from "react";
import {Helmet} from "react-helmet";

import LayoutMain from "../../../containers/Layout/Main";
import BranchesLocatorContainer from "../../../containers/BranchesLocator";
import PageHeadSeparator from "../../../components/UI/PageHeadSeparator";

function BranchesLocatorPage(props) {
    const title = "Список відділень";

    return (
        <LayoutMain {...props}>
            <Helmet>
                <title>{title}</title>
            </Helmet>

            <div className="container pt-3 pb-3 branches_locator">
                <PageHeadSeparator />
                <BranchesLocatorContainer {...props} />
            </div>
        </LayoutMain>
    );
};

export default BranchesLocatorPage;

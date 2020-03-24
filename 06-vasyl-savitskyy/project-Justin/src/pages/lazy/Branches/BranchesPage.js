import "./style.scss";

import React from "react";
import {Helmet} from "react-helmet";

import LayoutMain from "../../../containers/Layout/Main";
import BranchesContainer from "../../../containers/Branches";
import PageHeadSeparator from "../../../components/UI/PageHeadSeparator";

function BranchesPage(props) {
    const title = "Список відділень";

    return (
        <LayoutMain {...props}>
            <Helmet>
                <title>{title}</title>
            </Helmet>

            <div className="container pt-3 pb-3 branches">
                <PageHeadSeparator />
                <BranchesContainer {...props} />
            </div>
        </LayoutMain>
    );
};

export default BranchesPage;

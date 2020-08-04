import React from "react";
import {Helmet} from "react-helmet";

import TestLayout from "../../../containers/Test/Layout";

function Error404Page() {

    return (
        <TestLayout>
            <Helmet>
                <title>404 Error</title>
            </Helmet>

            <div style={{padding: "30px"}}>
                Error 404 Page
            </div>
        </TestLayout>
    );
};

export default Error404Page;

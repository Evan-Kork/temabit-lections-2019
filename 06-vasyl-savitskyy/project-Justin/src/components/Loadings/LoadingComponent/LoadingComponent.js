import React from "react";

import TestLayout from "../../../containers/Test/Layout";

function LoadingComponent() {

    return (
        <TestLayout>
            <div style={{padding: "30px"}}>
                <h3 style={{textAlign: "center"}}>Loading ...</h3>
            </div>
        </TestLayout>
    );
};

export default LoadingComponent;

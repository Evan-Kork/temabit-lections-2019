import React, { ReactElement } from "react";
import ContentHeader from "./ContentHeader";

function PageHome(props: {}): ReactElement {
    return (
        <React.Fragment>
            <ContentHeader title="Головна" />
            <div className="row home">
                <span></span>
            </div>
        </React.Fragment>
    );
}

export default PageHome;

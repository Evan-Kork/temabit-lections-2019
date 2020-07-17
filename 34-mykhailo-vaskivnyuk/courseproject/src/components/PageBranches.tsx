import React, { ReactElement } from "react";
import TableData from "./TableData";
import ContentHeader from "./ContentHeader";

/*----------------------------------------------------------|
|             COMPONENT                                     |
|----------------------------------------------------------*/
function PageBranches(props: {}): ReactElement {
    return (
        <React.Fragment>
            <ContentHeader title="Наші відділення (поштомаркети)" />
            <TableData />
        </React.Fragment>
    );
}

export default PageBranches;

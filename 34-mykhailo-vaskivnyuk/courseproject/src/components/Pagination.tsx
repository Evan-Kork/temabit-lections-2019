import React, { ReactElement, FormEventHandler } from "react";

/*----------------------------------------------------------|
|             TYPES                                         |
|----------------------------------------------------------*/
interface Props {
    onClick: FormEventHandler,
    page: number,
    pages: number,
}

/*----------------------------------------------------------|
|             COMPONENT                                     |
|----------------------------------------------------------*/
function Pagination(props: Props): ReactElement {
    return (
        <div className="pages" onClick={props.onClick}>
            <i className="far fa-caret-square-left" data-direction="prev"></i>
            <span>Page {props.page} of {props.pages}</span>
            <i className="far fa-caret-square-right" data-direction="next"></i>
        </div>
    );
}

export default Pagination;

import React, { ReactElement, useState, MouseEventHandler } from "react";
import { handlePagination } from "../functions/handlers.table";

/*----------------------------------------------------------|
|             TYPES                                         |
|----------------------------------------------------------*/
interface Props {
    callback: (direction: string) => void,
    page: number,
    pages: number,
}

/*----------------------------------------------------------|
|             COMPONENT                                     |
|----------------------------------------------------------*/
function Pagination(props: Props): ReactElement {
    const { callback, page, pages } = props;
    const [onClick] = useState(
        () => handlePagination(callback) as React.MouseEventHandler
    );

    return (
        <div className="pages" onClick={onClick}>
            <i className="far fa-caret-square-left" data-direction="prev"></i>
            <span>Page {props.page} of {props.pages}</span>
            <i className="far fa-caret-square-right" data-direction="next"></i>
        </div>
    );
}

export default Pagination;

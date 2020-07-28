import React, { ReactElement, useCallback } from "react";
import { handlePagination } from "../functions/handlers.table";

/*----------------------------------------------------------|
|             TYPES                                         |
|----------------------------------------------------------*/
interface Props {
    callback: (direction: DIRECTION) => void,
    page: number,
    pages: number,
}

export enum DIRECTION {
    PREV = -1,
    NEXT = +1,
}

/*----------------------------------------------------------|
|             COMPONENT                                     |
|----------------------------------------------------------*/
function Pagination(props: Props): ReactElement {
    const { callback, page, pages } = props;
    const onClick = useCallback(handlePagination(callback) as React.MouseEventHandler, [callback]);

    return (
        <div className="pages" onClick={onClick}>
            <i className="far fa-caret-square-left" data-direction={DIRECTION.PREV}></i>
            <span>Page {props.page} of {props.pages}</span>
            <i className="far fa-caret-square-right" data-direction={DIRECTION.NEXT}></i>
        </div>
    );
}

export default Pagination;

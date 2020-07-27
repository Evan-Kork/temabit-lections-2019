import React, { ReactElement, RefObject, createRef } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { handleTable, HandleTable } from "../functions/handlers.table";
import { useLocalState, BaseLocalState } from "../functions/useLocalState";

import Pagination from "./Pagination";
import Comment, { RefComment } from "./Comment";
import Table from "./Table";

const PAGINATION = 25;

/*----------------------------------------------------------|
|             TYPES                                         |
|----------------------------------------------------------*/
export interface Props extends RouteComponentProps {
    data: Data.Branches,
}

interface StateData{
    page: number,
    pages: number,
}

/*----------------------------------------------------------|
|             STATE                                         |
|----------------------------------------------------------*/
export class LocalState extends BaseLocalState<Props, StateData> {

    refComment: RefObject<RefComment>;
    handlePagination: (direction: string) => void;
    handleTable: HandleTable;

    constructor(props: Props) {
        super(props);
        this.refComment = createRef(),
        this.bind('handleTable', handleTable);
        this.handlePagination = (direction: string) => this.handleTable({ direction });
        this.stateData = {
            page: 1,
            pages: Math.floor(props.data.length / PAGINATION) + 1,
        };
    }
}

const initLocalState = (props: Props): LocalState => new LocalState(props);

/*----------------------------------------------------------|
|             COMPONENT                                     |
|----------------------------------------------------------*/
function TableComponents(props: Props): ReactElement {

    const state = useLocalState(props, initLocalState);

    const { data } = state.props;
    const { handlePagination, refComment, handleTable } = state;
    const { page, pages } = state.stateData;
    const from = (page - 1) * PAGINATION;
    const to = from + PAGINATION;

    return(
        <React.Fragment>
            <Pagination
                page={page}
                pages={pages}
                callback={handlePagination} />
            <Comment ref={refComment} />
            <Table
                handleTable={handleTable}
                data={data}
                from={from}
                to={to} />
        </React.Fragment>
    );
}

export default withRouter(TableComponents);

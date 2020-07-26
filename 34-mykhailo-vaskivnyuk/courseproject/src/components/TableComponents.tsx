import React, {
    useState, ReactElement, Dispatch, RefObject,
} from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import {
    handleTable,
    HandleTable,
    HandleTablePars,
} from "../functions/handlers.table";

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

export interface LocalState {
    props: Props,
    stateData: StateData;
    refComment: RefObject<RefComment>;
    setState: Dispatch<StateData>;
    handlePagination: (direction: string) => void;
    handleTable: HandleTable;
}

interface StateData{
    page: number,
    pages: number,
}

/*----------------------------------------------------------|
|             HOOKS                                         |
|----------------------------------------------------------*/
function useLocalState(props: Props) {

    const [state] = useState((): LocalState => {
        const state = {} as LocalState;
        Object.assign(state, {
            refComment: React.createRef(),
            handleTable: (...args: HandleTablePars) => handleTable(state, ...args),
            handlePagination: (direction: string) => state.handleTable({ direction }),
        });
        return state;
    });

    [state.stateData, state.setState] = useState({
        page: 1,
        pages: Math.floor(props.data.length / PAGINATION) + 1,
    });

    state.props = props;
    
    return state;
}

/*----------------------------------------------------------|
|             COMPONENT                                     |
|----------------------------------------------------------*/
function TableComponents(props: Props): ReactElement {

    const state = useLocalState(props);

    const { data } = state.props;
    const { page, pages } = state.stateData;
    const from = (page - 1) * PAGINATION;
    const to = from + PAGINATION;

    return(
        <React.Fragment>
            <Pagination
                page={page}
                pages={pages}
                callback={state.handlePagination} />
            <Comment ref={state.refComment} />
            <Table
                handleTable={state.handleTable}
                data={data}
                from={from}
                to={to} />
        </React.Fragment>
    );
}

export default withRouter(TableComponents);

import React, {
    useState,
    ReactElement, MouseEventHandler, Dispatch,
} from "react";
import Pagination from "./Pagination";
import {
    eHandler,
    handleOnMouseOver,
    handleOnMouseOut,
    handleOnClick,
    handlePagination,
} from "../functions/handlers.table";

import TablePage from "./TablePage";

/*----------------------------------------------------------|
|             TYPES                                         |
|----------------------------------------------------------*/
export interface Props {
    data: Data.Branches,
    handleTable: (...args: any[]) => void,
}

export interface LocalState {
    props: Props,
    setState: Dispatch<stateData>;
    handlePagination: eHandler;
    handleOnMouseOver: MouseEventHandler;
    handleOnMouseOut: MouseEventHandler;
    handleOnClick: MouseEventHandler;
    stateData: stateData,
}

interface stateData{
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
            props,
            setState() {},
            handlePagination: handlePagination.bind(state),
            handleOnMouseOver: handleOnMouseOver.bind(state),
            handleOnMouseOut: handleOnMouseOut.bind(state),
            handleOnClick: handleOnClick.bind(state),
        });
        return state;
    });

    [state.stateData, state.setState] = useState({
        page: 1,
        pages: Math.floor(props.data.length / 50) + 1,
    });
    
    state.props = props;

    return state;
}

/*----------------------------------------------------------|
|             COMPONENT                                     |
|----------------------------------------------------------*/
function Table(props: Props): ReactElement {

    const state = useLocalState(props);

    const { data } = state.props;
    const { page, pages } = state.stateData;

    const head = (
        <tr>
            <th>N</th>
            <th>Адреса</th>
            <th>Навігація</th>
            <th>Сервіси</th>
            <th>Графік роботи</th>
        </tr>
    );

    return(
        <React.Fragment>
            <Pagination
                page={page}
                pages={pages}
                onClick={state.handlePagination} />
            <div className="tbl_branches">
                <table
                    onMouseOver={state.handleOnMouseOver}
                    onMouseOut={state.handleOnMouseOut}
                    onClick={state.handleOnClick}>
                    <thead>
                        {head}
                    </thead>
                    <tbody>
                        {TablePage(data, page)}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}

export default Table;

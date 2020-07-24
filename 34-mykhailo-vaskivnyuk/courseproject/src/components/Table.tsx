import React, {
    useState,
    ReactElement, ChangeEventHandler, MouseEventHandler
} from "react";
import Pagination from "./Pagination";
import {
    handleOnMouseOver,
    handleOnMouseOut,
    handleOnClick,
    handlePagination,
} from "../functions/handlers.table";

/*----------------------------------------------------------|
|             TYPES                                         |
|----------------------------------------------------------*/
export interface Props {
    data: Data.Branches,
    handleTable: (...args: any[]) => void,
}

export interface LocalState {
    props: Props,
    setState: React.Dispatch<stateData>;
    handlePagination: ChangeEventHandler;
    handleOnMouseOver: MouseEventHandler;
    handleOnMouseOut: MouseEventHandler;
    handleOnClick: MouseEventHandler;
    stateData?: stateData,
}

interface stateData{
    page: number,
    pages: number,
}

/*----------------------------------------------------------|
|             COMPONENT                                     |
|----------------------------------------------------------*/
function Table(props: Props): ReactElement {
    const [state] = useState((): LocalState => {
        const state: LocalState = {
            props: null,
            setState() {},
            handlePagination() {},
            handleOnMouseOver() {},
            handleOnMouseOut() {},
            handleOnClick() {},
        };
        state.handleOnMouseOver = handleOnMouseOver.bind(state) as MouseEventHandler;
        state.handlePagination = handlePagination.bind(state);
        state.handleOnMouseOut = handleOnMouseOut.bind(state);
        state.handleOnClick = handleOnClick.bind(state) as MouseEventHandler;
        return state;
    });
    [state.stateData, state.setState] = useState({
        page: 1,
        pages: Math.floor(props.data.length / 50) + 1,
    });

    state.props = props;

    const { data } = props;

    const head = (
        <tr>
            <th>N</th>
            <th>Адреса</th>
            <th>Навігація</th>
            <th>Сервіси</th>
            <th>Графік роботи</th>
        </tr>
    );

    const index_from = (state.stateData.page - 1) * 50;
    const index_to = index_from + 50;
    const body = data
        .slice(index_from, index_to)
        .map((item, index) =>
            <tr key={item.delivery_branch_id} data-index={index} data-number={item.number}>
                <td>{item.number}</td>
                <td>{item.adress}</td>
                <td>{item.navigation_ua}</td>
                <td>Додаткові: {item.strServices}</td>
                <td>{item.shedule_description}</td>
            </tr>
    );

    return(
        <React.Fragment>
            <Pagination
                page={state.stateData.page}
                pages={state.stateData.pages}
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
                        {body}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}

export default Table;

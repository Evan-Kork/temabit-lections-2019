import React, { ReactElement, ChangeEvent, FocusEvent, EventHandler, useState } from "react";
import Pagination from "./Pagination";
import {
    handleOnMouseOver,
    handleOnMouseOut,
    handleOnClick,
    handlePagination,
} from "../functions/handlers.table";
import { getServices } from "../functions/helpers";

/*----------------------------------------------------------|
|             TYPES                                         |
|----------------------------------------------------------*/
export interface Props {
    data: Data.Branches,
    handler: any,
}

export interface LocalState {
    setState: (state: LocalState) => void;
    props: Props,
    page: number,
    pages: number,
}

/*----------------------------------------------------------|
|             COMPONENT                                     |
|----------------------------------------------------------*/
function Table(props: Props): ReactElement {
    const [state, setState] = useState({
        page: 1,
        pages: Math.floor(props.data.length / 50) + 1,
    } as LocalState);
    state.setState = setState;
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

    const index_from = (state.page - 1) * 50;
    const index_to = index_from + 50;
    const body = data.slice(index_from, index_to).map((item, index) => {
        return (
            <tr key={item.delivery_branch_id} data-index={index} data-number={item.number}>
                <td>{item.number}</td>
                <td>{item.adress}</td>
                <td>{item.navigation_ua}</td>
                <td>Додаткові: {getServices(item.services)}</td>
                <td>{item.shedule_description}</td>
            </tr>
    )});

    return(
        <React.Fragment>
            <Pagination
                page={state.page}
                pages={state.pages}
                onClick={handlePagination.bind(state)} />
            <div className="tbl_branches">
                <table
                    onMouseOver={handleOnMouseOver.bind(state)}
                    onMouseOut={handleOnMouseOut.bind(state)}
                    onClick={handleOnClick.bind(state)}>
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

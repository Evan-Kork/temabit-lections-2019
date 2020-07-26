import React, { useState, ReactElement, MouseEventHandler } from "react";
import { TableHead, TableBody } from "./TableParts";
import {
    handleOnMouseOver,
    handleOnMouseOut,
    handleOnClick,
    HandleTable,
} from "../functions/handlers.table";

/*----------------------------------------------------------|
|             TYPES                                         |
|----------------------------------------------------------*/
export interface Props {
    data: Data.Branches,
    from: number,
    to: number,
    handleTable: HandleTable,
}

export interface LocalState {
    props: Props,
    onMouseOver: MouseEventHandler,
    onMouseOut: MouseEventHandler,
    onClick: MouseEventHandler,
}

/*----------------------------------------------------------|
|             HOOKS                                         |
|----------------------------------------------------------*/
function useLocalState(props: Props) {

    const [state] = useState((): LocalState => {
        const state = {} as LocalState;
        Object.assign(state, {
            onMouseOver: handleOnMouseOver.bind(state),
            onMouseOut: handleOnMouseOut.bind(state),
            onClick: handleOnClick.bind(state),
        });
        return state;
    });

    state.props = props;
    
    return state;
}

/*----------------------------------------------------------|
|             COMPONENT                                     |
|----------------------------------------------------------*/
function Table(props: Props): ReactElement {

    const state = useLocalState(props);

    const { data, from, to } = state.props;

    return(
        <div className="tbl_branches">
            <table
                onMouseOver={state.onMouseOver}
                onMouseOut={state.onMouseOut}
                onClick={state.onClick}>
                <thead>
                    <TableHead />
                </thead>
                <tbody>
                    {TableBody(data, from, to)}
                </tbody>
            </table>
        </div>
    );
}

export default Table;

import React, { ReactElement, useState, useEffect } from "react";
import { connect, HandleThunkActionCreator } from "react-redux";
import { setResponse } from "../reducer/actions/actions";
import { getBranches } from "../functions/helpers";
import { getDerivedStateFromProps } from "../functions/handlers.table";

import TableComponents from "./TableComponents";
import RequestInfo from "./RequestInfo";

/*----------------------------------------------------------|
|             TYPES                                         |
|----------------------------------------------------------*/
type Props = Data.BranchesData & {
    filter?: { city: string },
    setResponse: DispatchSetResponse,
}

type DispatchSetResponse = HandleThunkActionCreator<
    Reducer.SetResponse<Data.BranchesData>
>;

export type RequestProps = Pick<Props, 'data' | 'setResponse'>;

export interface LocalState {
    setState: (state: LocalState) => void,
    props: Props,
    data: Data.Branches,
    error: Error,
    filter: { city: string },
}

/*----------------------------------------------------------|
|             COMPONENT                                     |
|----------------------------------------------------------*/
function TableData(props: Props): ReactElement {
    const [state, setState] = useState({
        data: null,
        error: null,
        filter: {city: null},
    } as LocalState);
    state.setState = setState;
    state.props = props;

    getDerivedStateFromProps.call(state);

    useEffect(() => getBranches(props), []);
    
    const { filter } = props;
    const { data, error } = filter ? state : props;

    return (
        <div className="row justify-content-center">
            {error ?
                <RequestInfo error={error} />
            :data ?
                <TableComponents data={data} />
            :null}
        </div>
    );
}

const mapStateToProps = (state: Data.State): Data.BranchesData => 
    state.responses.branches;

const cntTableData = connect(mapStateToProps, { setResponse })(TableData);

export default cntTableData;

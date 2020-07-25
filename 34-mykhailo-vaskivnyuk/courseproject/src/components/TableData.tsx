import React, { ReactElement, useState, useEffect } from "react";
import { connect, HandleThunkActionCreator } from "react-redux";
import { setResponse } from "../reducer/actions/actions";
import { getBranches } from "../functions/helpers";
import { getDerivedStateFromProps } from "../functions/handlers.table";

import Table from "./Table";
import RequestInfo from "./RequestInfo";

/*----------------------------------------------------------|
|             TYPES                                         |
|----------------------------------------------------------*/
interface Props {
    branches: Data.BranchesData,
    setResponse: DispatchSetResponse,
    filter?: { city: string },
}

type DispatchSetResponse = HandleThunkActionCreator<
    Reducer.SetResponse<Data.BranchesData>
>;

export type RequestProps = Pick<Props, 'branches' | 'setResponse'>;

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
        filter: props.filter,
    } as LocalState);
    state.setState = setState;
    state.props = props;

    getDerivedStateFromProps.bind(state)();

    useEffect(() => getBranches(props), []);
    
    const { filter, branches } = props;
    const { data, error } = filter ? state : branches;

    return (
        <div className="row justify-content-center">
            {error ?
                <RequestInfo error={error} />
            :data ?
                <Table data={data} />
            :null}
        </div>
    );
}

function mapStateToProps(state: Data.State): Pick<Props, 'branches'> {
    return {
        branches: state.responses.branches,
    };
}

const cntTableData = connect(mapStateToProps, { setResponse })(TableData);

export default cntTableData;

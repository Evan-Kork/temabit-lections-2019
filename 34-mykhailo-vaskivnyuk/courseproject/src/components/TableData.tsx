import React, { ReactElement, useState, useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { setResponse } from "../reducer/actions/actions";
import request from "../functions/request";
import { validateResponse } from "../functions/validate";
import {
    handleTable,
    getDerivedStateFromProps,
} from "../functions/handlers.table";

import Comment, { CommentData } from "./Comment";
import Table from "./Table";
import RequestInfo from "./RequestInfo";

/*----------------------------------------------------------|
|             TYPES                                         |
|----------------------------------------------------------*/
type Props =
    RouteComponentProps &
    ReturnType<typeof mapStateToProps> & {
        setResponse: (req: string, res: Data.BranchesData) => void,
        filter?: { city: string },
    };

export interface LocalState {
    setState: (state: LocalState) => void,
    props: Props,
    data: Data.Branches,
    error: Error,
    comment_data: CommentData,
    filter: { city: string },
}

/*----------------------------------------------------------|
|             COMPONENT                                     |
|----------------------------------------------------------*/
function TableData(props: Props): ReactElement {
    const [state, setState] = useState({
        data: null,
        error: null,
        comment_data: null,
        filter: props.filter,
    } as LocalState);
    state.setState = setState;
    state.props = props;

    getDerivedStateFromProps.bind(state)();

    useEffect(() => {
        if (props.branches.data) return;
        const method = "branches";
        const params = "";
        request({ method, params })
        .then(validateResponse)
        .then((res: Data.BranchesData) =>
            props.setResponse(method, res),
        );
    }, []);
    
    const { filter, branches } = props;
    const { data, error } = filter ? state : branches;
    const { comment_data } = state;

    return (
        <div className="row justify-content-center">
            {comment_data ?
                <Comment data={comment_data} />
            : null}
            {data ?
                <Table data={data} handleTable={handleTable.bind(state)} />
            : (!filter || (filter && filter.city)) ?
                <RequestInfo error={error} />
            : null}
        </div>
    );
}

function mapStateToProps(state: Data.State): Pick<Data.Responses, 'branches'> {
    return {
        branches: state.responses.branches,
    };
}

const cntTableData = connect(mapStateToProps, { setResponse })(TableData);

export default withRouter(cntTableData);

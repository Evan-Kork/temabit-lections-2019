import React, { ReactElement } from "react";
import { RouteComponentProps } from "react-router-dom";
import { connect, HandleThunkActionCreator } from "react-redux";
import { setResponse } from "../reducer/actions/actions";
import { useRenderData } from "../functions/handlers.branch";

import ContentHeader from "./ContentHeader";
import FormBranch from "./FormBranch";
import BranchInfo from "./BranchInfo";
import BranchPhoto from "./BranchPhoto";
import RequestInfo from "./RequestInfo";

/*----------------------------------------------------------|
|             TYPES                                         |
|----------------------------------------------------------*/
export type Props =
    RouteComponentProps &
    Data.BranchesData & {
        match: {
            params: {
                branch: number,
            },
        },
        setResponse: DispatchSetResponse,
};

type DispatchSetResponse = HandleThunkActionCreator<
    Reducer.SetResponse<Data.BranchesData>
>;

export interface RenderData {
    branch: number,
    error: Error,
    branchInfo: Data.BranchClass,
    photo: string,
    handleBranch: (branch: string) => void,
}

/*----------------------------------------------------------|
|             COMPONENT                                     |
|----------------------------------------------------------*/
function PageBranch(props: Props): ReactElement {
    const {
        branch, error, branchInfo, photo, handleBranch,
    } = useRenderData(props);

    return (
        <React.Fragment>
            <ContentHeader title="Дані про відділення" />
            <FormBranch branch={branch} handleBranch={handleBranch} />
            {error ?
                <RequestInfo error={error} />
            : <>
                <BranchInfo branch={branchInfo} />
                <BranchPhoto src={photo} />
            </>}
        </React.Fragment>
    );
}

/*----------------------------------------------------------|
|             REDUX                                         |
|----------------------------------------------------------*/
function mapStateToProps(state: Data.State): Data.BranchesData {
    return state.responses.branches;
}

const cntPageBranch = connect(mapStateToProps, { setResponse })(PageBranch);

export default cntPageBranch;

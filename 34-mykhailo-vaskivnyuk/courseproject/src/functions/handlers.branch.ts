import { useEffect, useCallback } from "react";
import { Props, RenderData } from "../components/PageBranch";
import request from "../functions/request";
import { validateResponse } from "../functions/validate";

/*----------------------------------------------------------|
|             FUNCTIONS                                     |
|----------------------------------------------------------*/
function reqBranches (props: Props): void {
    if (props.data) return;
    const method = "branches";
    const params = "";
    request({ method, params })
    .then(validateResponse)
    .then((res: Data.BranchesData) =>
        props.setResponse(method, res),
    );
}

const _handleBranch = (branch: string, history: Props['history']): void =>
        history.push("/branch/" + branch);

function getRenderData(props: Props): Omit<RenderData, 'handleBranch'> {
    const { branch } = props.match.params;
    let { data, error } = props;
    let branchInfo, photo;
    if (!error && branch && data) {
        branchInfo = data.find(({ number }) => number === branch);
        if (branchInfo) {
            photo = branchInfo.photos && branchInfo.photos[0];
        } else {    
            error = new Error(`Відділення № ${branch} відсутнє!`);
        }
    }
    return { error, branchInfo, photo, branch };
}

/*----------------------------------------------------------|
|             HOOKS                                         |
|----------------------------------------------------------*/
export function useRenderData(props: Props): RenderData {
    useEffect(() => reqBranches(props), []);
    const { history } = props;
    const handleBranch = useCallback((branch: string) => _handleBranch(branch, history), [history]);

    return {
        ...getRenderData(props),
        handleBranch,
    };
}

import { Props, RenderData } from "../components/PageBranch";
import { useMemo, useEffect } from "react";
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

const getHandleBranch = (props: Props) => (branch: string): void =>
        props.history.push("/branch/" + branch);

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
    const handleBranch = useMemo(() => getHandleBranch(props), []);

    return {
        ...getRenderData(props),
        handleBranch,
    };
}

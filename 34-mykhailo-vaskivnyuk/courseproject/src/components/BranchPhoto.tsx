import React, { ReactElement } from "react";

interface Props {
    src: string,
}

function BranchPhoto ({ src }: Props): ReactElement {
    return src ? ( 
        <div className="row justify-content-center">
            <div className="branch_img">
                <img src={src} />
            </div>
        </div>
    ) : null;
}

export default BranchPhoto;

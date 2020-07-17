import React, { ReactElement } from "react";

/*----------------------------------------------------------|
|             TYPES                                         |
|----------------------------------------------------------*/
interface Props {
    data: CommentData,
}

export interface CommentData {
    branch: {
        photos: string[];
    };
    position: {
        top: number;
        left: number;
    }
}

/*----------------------------------------------------------|
|             COMPONENT                                     |
|----------------------------------------------------------*/
function Comment(props: Props): ReactElement {
    const { branch, position } = props.data;
    const { top: _top, left: _left } = position;
    const top = _top - 202 + pageYOffset + "px";
    const left = _left + 52 + "px";

    const img_src = branch.photos ? branch.photos[0] : "";

    return (
        img_src ? (
        <div className="comment"  style={{ top, left}}>
            <img src={img_src} />
        </div>
        ) : null
    );
}

export default Comment;

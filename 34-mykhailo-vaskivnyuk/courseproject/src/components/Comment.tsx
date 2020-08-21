import React, {
    ReactElement, Dispatch, RefObject,
    useState, useImperativeHandle,
} from "react";

/*----------------------------------------------------------|
|             TYPES                                         |
|----------------------------------------------------------*/
export interface CommentData {
    branch: Data.BranchClass,
    position: DOMRect,
}

export interface RefComment {
    setState: Dispatch<CommentData>;
}

/*----------------------------------------------------------|
|             COMPONENT                                     |
|----------------------------------------------------------*/
function Comment(props: {}, ref: RefObject<RefComment>): ReactElement {
    const [state, setState] = useState(null as CommentData);
    useImperativeHandle(ref, () => ({ setState }), []);

    if (!state) return null;

    const { branch, position } = state;
    const { top: _top, left: _left, width } = position;
    const top = _top - 232 + pageYOffset + "px";
    const left = _left + width + 10 + "px";

    const img_src = branch.photos ? branch.photos[0] : "";

    return (
        img_src ? (
        <div className="comment"  style={{ top, left }}>
            <img src={img_src} />
        </div>
        ) : null
    );
}

export default React.forwardRef(Comment);

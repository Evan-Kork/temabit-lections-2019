import React, {
    ReactElement,
    FormEventHandler, FormEvent,
    useRef, useEffect } from "react";

interface Props {
    handleBranch: (branch: string) => any,
    branch: number,
}

function FormBranch(props: Props): ReactElement {
    const { branch, handleBranch } = props;
    const branchRef = useRef(null);

    useEffect(
        () => { branchRef.current.value = branch || ""; },
        [branch],
    );

    const onSubmit: FormEventHandler = (event: FormEvent): void => {
        event.preventDefault();
        const branch = branchRef.current.value;
        handleBranch(branch);
    }

    return (
        <div className="row justify-content-center">
            <div className="branch">
                <form onSubmit={onSubmit}>
                    <input
                        ref={branchRef}
                        name="branch"
                        className="branch_number"
                        type="number"
                        placeholder="Введіть номер відділення" />
                    <i className="far fa-caret-square-right" onClick={onSubmit}></i>
                </form>
            </div>
        </div>
    );
}

export default FormBranch;

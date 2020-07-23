import React, {
    ReactElement, FormEventHandler, FormEvent,
    useRef, useEffect, useCallback,
} from "react";

/*----------------------------------------------------------|
|             TYPES                                         |
|----------------------------------------------------------*/
interface Props {
    handleBranch: (branch: string) => void,
    branch: number,
}

/*----------------------------------------------------------|
|             COMPONENT                                     |
|----------------------------------------------------------*/
function FormBranch(props: Props): ReactElement {
    const { branch } = props;
    const branchRef = useRef(null);

    const onSubmit: FormEventHandler = useCallback(
        (event: FormEvent): void => {
            event.preventDefault();
            const branch = branchRef.current.value;
            const { handleBranch } = props;
            handleBranch(branch);
    }, []);

    useEffect(
        () => { branchRef.current.value = branch || ""; },
        [branch],
    );

    return (
        <div className="row justify-content-center">
            <div className="branch">
                <form onSubmit={onSubmit}>
                    <input
                        name="branch"
                        ref={branchRef}
                        className="branch_number"
                        type="number"
                        placeholder="Введіть номер відділення" />
                    <i
                        className="far fa-caret-square-right"
                        onClick={onSubmit} />
                </form>
            </div>
        </div>
    );
}

export default FormBranch;

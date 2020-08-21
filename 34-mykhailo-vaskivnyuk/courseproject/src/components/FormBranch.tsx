import React, {
    ReactElement, FormEventHandler, FormEvent, RefObject,
    useState, useRef, useEffect, useCallback,
} from "react";

/*----------------------------------------------------------|
|             TYPES                                         |
|----------------------------------------------------------*/
interface Props {
    handleBranch: (branch: string) => void,
    branch: number,
}

const getOnSubmit = (
    branchRef: RefObject<HTMLInputElement>,
    handleBranch: Props['handleBranch'],
): FormEventHandler =>
    (event: FormEvent): void => {
        event.preventDefault();
        const branch = branchRef.current.value;
        handleBranch(branch);
};

/*----------------------------------------------------------|
|             COMPONENT                                     |
|----------------------------------------------------------*/
function FormBranch(props: Props): ReactElement {
    const { branch, handleBranch } = props;
    const branchRef = useRef(null);
    const [onSubmit] = useState(
        () => getOnSubmit(branchRef, handleBranch),
    );

    // useEffect(
    //     () => { branchRef.current.value = branch || ""; },
    //     [branch],
    // );

    return (
        <div className="row justify-content-center">
            <div className="branch">
                {/* <form onSubmit={onSubmit}> */}
                <form>
                    <input
                        onChange={onSubmit}
                        value={branch || ""}
                        name="branch"
                        ref={branchRef}
                        className="branch_number"
                        type="number"
                        placeholder="Введіть номер відділення" />
                    {/* <i
                        className="far fa-caret-square-right"
                        onClick={onSubmit} /> */}
                </form>
            </div>
        </div>
    );
}

export default FormBranch;

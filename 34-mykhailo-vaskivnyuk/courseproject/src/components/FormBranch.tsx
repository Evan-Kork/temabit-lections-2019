import React, { useRef, useEffect } from "react";

interface Props {
	onSubmit: React.FormEventHandler,
	branch: number,
}

function FormBranch(props: Props): React.ReactElement {
	const { branch, onSubmit } = props;
	const branchRef = useRef(null);
	const setBranch = (): void => {
		branchRef.current.branch.value = branch || "";
	};

	useEffect(
		setBranch,
		[branch]
	);

	return (
		<div className="row justify-content-center">
			<div className="branch">
				<form ref={branchRef} onSubmit={onSubmit}>
					<input
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

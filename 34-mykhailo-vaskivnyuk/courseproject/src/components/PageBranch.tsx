import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setResponse } from "../reducer/actions/actions";
import request from "../functions/request";
import FormBranch from "./FormBranch";
import BranchInfo from "./BranchInfo";
import ContentHeader from "./ContentHeader";
import RequestInfo from "./RequestInfo";

interface Props {
	branches: Data.BranchesData,
	history: {
		push: (location: string) => void,
	},
	match: {
		params: {
			branch: number,
		},
	},
	setResponse: (
		req: string,
		res: Data.BranchesData,
	) => void,
}

type HTMLForm = HTMLElement & { branch: HTMLInputElement };

function PageBranch(props: Props): React.ReactElement {

	const handleBranch: React.FormEventHandler = (event: React.FormEvent) => {
		event.preventDefault();
		let elem = event.target as HTMLForm;
		elem.tagName === "FORM" || (elem = elem.parentElement as HTMLForm);
		const branch = elem.branch.value;
		props.history.push("/branch/" + branch);
	}

	useEffect(() => {
		if (props.branches.data) return;
		const method = "branches";
		const params = "";
		request(
			{ method, params },
			(data: Data.Branches, error: Error) => {
				props.setResponse(
					method,
					{data, error}
				);
			}
		);
	}, []);


	const branch = props.match.params.branch;
	let { data, error } = props.branches;
	let branchInfo;
	if (branch && data) {
		branchInfo = data.find(({ number }) => number === branch);
		if (!branchInfo) error = {
			name: "",
			message: `Відділення № ${branch} відсутнє!`,
		};
	}

	return (
		<React.Fragment>
			<ContentHeader title="Дані про відділення" />
			<FormBranch branch={branch} onSubmit={handleBranch} />
			{branchInfo ?
				<BranchInfo branchInfo={branchInfo} />
			: branch ?
				<RequestInfo error={error} />
			: null}
			{(branchInfo && branchInfo.photos) ?
				(<div className="row justify-content-center">
					<div className="branch_img">
						<img src={branchInfo.photos[0]} />
					</div>
				</div>)
			: null}
		</React.Fragment>
	);
}

function mapStateToProps(state: Data.State): Pick<Data.Responses, 'branches'> {
	return {
		branches: state.responses.branches,
	};
}

export default connect(mapStateToProps, { setResponse })(PageBranch);;

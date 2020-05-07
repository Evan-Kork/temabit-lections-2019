import React from "react";
import { connect } from "react-redux";
import { setResponse, setMenu } from "../reducer/actions/actions";
import request from "../functions/request";
import FormBranch from "./FormBranch";
import BranchInfo from "./BranchInfo";
import ContentHeader from "./ContentHeader";
import RequestInfo from "./RequestInfo";

class PageBranch extends React.Component {

	constructor(props) {
		super(props);
		this.handleBranch = this.handleBranch.bind(this);
	}

	handleBranch(event) {
		event.preventDefault();
		let branch;
		if (event.target.tagName == "FORM") {
			branch = event.target.branch.value;
		} else {
			branch = event.target.parentElement.branch.value;
		}
		this.props.history.push("/branch/" + branch);
	}

	componentDidMount() {
		if (this.props.branches.data) return;
		const method = "branches";
		const params = "";
		request(
			{ method, params },
			(data, error) => {
				this.props.setResponse(
					method,
					{data, error}
				);
			}
		);
	}
	
	render() {

		const branch = this.props.match.params.branch;
		let { data, error } = this.props.branches;
		let branchInfo = null;
		if (data && branch) {
			branchInfo = data.filter(item => item.number === branch);
			branchInfo = branchInfo.length ? branchInfo[0] : null;
			if (!branchInfo) error = { message: "Відділення № " + branch + " відсутнє!"};
		}

		return (
				<React.Fragment>
					<ContentHeader title="Дані про відділення" />
					<FormBranch branch={branch} onSubmit={this.handleBranch} />
					{branchInfo ? <BranchInfo branchInfo={branchInfo} /> : 
						branch ? <RequestInfo error={error} /> : null}
					{(branchInfo && branchInfo.photos) ? (
					<div className="row justify-content-center">
						<div className="branch_img">
							<img src={branchInfo.photos[0]} />
						</div>
					</div>)
					: null}
				</React.Fragment>
		);
	}
}

function mapStateToProps(state) {
	return {
		branches: state.responses.branches,
	}
}

PageBranch = connect(mapStateToProps, { setResponse, setMenu })(PageBranch);

export default PageBranch;

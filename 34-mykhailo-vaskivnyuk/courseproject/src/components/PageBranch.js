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
		dev_log(event.target.parentElement);
		if (event.target.tagName == "FORM") {
			branch = event.target.branch.value;
		} else {
			branch = event.target.parentElement.branch.value;
		}
		//const branch = event.target.branch.value;
		//dev_log("VALUE" + event.target.branch.value);
		this.props.history.push("/branch/" + branch);
	}

	componentDidMount() {
		if (this.props.branches.data) return;
		const method = "branches";
		const params = "";
		request(
			{ method, params },
			(data, error) => {
				dev_log(error);
				this.props.setResponse(
					method,
					{data, error}
				);
			}
		);
	}
	
	render() {

		// if (this.props.selected != 4) {
		// 	this.props.setMenu(4);
		// 	return null;
		// }
		
		dev_log.render(this);

		const branch = this.props.match.params.branch;
		let { data, error } = this.props.branches;
		dev_log(data);
		let branchInfo = null;
		if (data && branch) {
			branchInfo = data.filter(item => item.number === branch);
			branchInfo = branchInfo.length ? branchInfo[0] : null;
			if (!branchInfo) error = { message: "Відділення № " + branch + " відсутнє!"};
		}

		dev_log(branchInfo);

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
		//selected: state.menu.selected
	}
}

PageBranch = connect(mapStateToProps, { setResponse, setMenu })(PageBranch);

export default PageBranch;

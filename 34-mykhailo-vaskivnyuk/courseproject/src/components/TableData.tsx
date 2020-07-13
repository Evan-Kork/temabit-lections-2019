import React, { ReactElement, useState, useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Table from "./Table";
import Comment from "./Comment";
import { connect } from "react-redux";
import { setResponse } from "../reducer/actions/actions";
import request from "../functions/request";
import RequestInfo from "./RequestInfo";

type Props = RouteComponentProps & {
	setResponse: (req: string, res: Data.BranchesData) => void,
	branches: Data.BranchesData,
	filter?: { city: string },
}

interface LocalState {
	setState: (state: LocalState) => void,
	props: Props,
	data: Data.Branches,
	error: Error,
	comment_data: any,
	filter: { city: string },
}

function handleTable(comment_data: any, branchNumber: number): void {
	const _this: LocalState = (this as any) as LocalState;
	if (branchNumber) {
		_this.props.history.push("/branch/" + branchNumber);
		window.scrollTo(0, 0);
		return;
	}
	_this.setState({ ..._this, comment_data });
}

function getDerivedStateFromProps(): void {
	const _this: LocalState = (this as any) as LocalState;
	const { filter, branches } = _this.props;
	if (!filter || filter === _this.filter) return null;
	
	let { data, error } = branches;
	if (!data) return null;

	if (filter.city) {
		data = data.filter(({ locality }) => locality === filter.city);
		if (!data.length) {
			error = { name: "", message: "Місто не знайдено!"};
			data = null;
		}
	}
	_this.setState({ ..._this, data, error, filter });
}

function TableData(props: Props): ReactElement {
	const [state, setState] = useState({
		data: null,
		error: null,
		comment_data: null,
		filter: props.filter,
	} as LocalState);
	state.setState = setState;
	state.props = props;
	getDerivedStateFromProps.bind(state);

	useEffect(() => {
		if (props.branches.data) return;
		const method = "branches";
		const params = "";
		request(
			{ method, params },
			(data: Data.Branches, error: Error) => {
				props.setResponse(
					method,
					{ data, error }
				);
			}
		);
	}, []);
	
	const { filter, branches } = props;
	const { data, error } = filter ? state : branches;
	const { comment_data } = state;

	return (
		<div className="row justify-content-center">
			{comment_data ? <Comment data={comment_data} /> : null}
			{data ?
				<Table data={data} handler={handleTable.bind(state)} />
			: (!filter || (filter && filter.city)) ?
				<RequestInfo error={error} />
			: null}
		</div>
	);
}

function mapStateToProps(state: Data.State): Pick<Data.Responses, 'branches'> {
	return {
		branches: state.responses.branches
	}
}

export default withRouter(connect(mapStateToProps, { setResponse })(TableData));

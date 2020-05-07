import React from "react";
import Table from "./Table";
import Comment from "./Comment";
import { connect } from "react-redux";
import { setResponse } from "../reducer/actions/actions";
import request from "../functions/request";
import RequestInfo from "./RequestInfo";

class TableData extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: null,
			error: null,
			comment_data: null,
			filter: this.props.filter,
		};
		this.redirect = null;
		this.handleTable = this.handleTable.bind(this);
	}

	static getDerivedStateFromProps(props, state) {

		const filter = props.filter;
		if (!filter || filter === state.filter) return null;
		
		let { data, error } = props.branches;
		if (!data) return null;

		if (filter.city) {
			data = data.filter(item => {
				if (item.locality == filter.city)
					return true;
			});
			if (!data.length) {
				error = { message: "Місто не знайдено!"};
				data = null;
			}
		}
		
		return { data, error, filter };
	}

	handleTable(comment_data, redirect) {

		if (redirect) {
			this.props.redirect("/branch/" + redirect);
			window.scrollTo(0, 0);
			return;
		}

		this.setState({ comment_data });
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
					{ data, error }
				);
			}
		);
	}
	
	render() {

		let data, error;
		const filter = this.props.filter;

		if (filter) {
			({ data, error } = this.state);
		} else {
			({ data, error } = this.props.branches);
		}

		const comment_data = this.state.comment_data;

		return (
			<div className="row justify-content-center">
				{comment_data ? <Comment data={comment_data} /> : null}
				{data ? <Table data={data} handler={this.handleTable} />
					: (!filter || (filter && filter.city)) ? <RequestInfo error={error} />
					: null}
			</div>
	)};
}

function mapStateToProps(state) {
	return {
		branches: state.responses.branches
	}
}

TableData = connect(mapStateToProps, { setResponse })(TableData);

export default TableData;

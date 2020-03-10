import React from "react";
import TableData from "./TableData";
import ContentHeader from "./ContentHeader";

class PageBranches extends React.Component {

	render() {

		dev_log.render(this);

		return (
			<React.Fragment>
				<ContentHeader title="Наші відділення (поштомаркети)" />
				<TableData redirect={this.props.history.push} />
			</React.Fragment>
	)};
}

export default PageBranches;

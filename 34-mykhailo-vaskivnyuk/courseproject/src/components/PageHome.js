import React from "react";
import ContentHeader from "./ContentHeader";

class PageHome extends React.Component {

	render() {
		return (
			<React.Fragment>
				<ContentHeader title="Головна" />
				<div className="row home">
					<span></span>
				</div>
			</React.Fragment>
	)};
}

export default PageHome;

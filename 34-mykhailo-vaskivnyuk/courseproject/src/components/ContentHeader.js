import React from "react";

class ContentHeader extends React.Component {

	render() {
		return (
			<div className="row">
				<div className="col">
					<div className="h2_line">
						<span></span>
					</div>
					<div className="h2">{this.props.title}</div>
				</div>
			</div>
		);
	}
}

export default ContentHeader;

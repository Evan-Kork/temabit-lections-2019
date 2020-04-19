import React from "react";
import ContentHeader from "./ContentHeader";

class PageHome extends React.Component {

	render() {
		return (
			<React.Fragment>
				<ContentHeader title="Головна" />
				<div className="row" style={{backgroundImage: "url('../src/imgs/Sayt_IZI.jpg')",
											backgroundSize: "100%",
											minHeight: "300px",
											marginBottom: "70px"}}>
					<span></span>
				</div>
			</React.Fragment>
	)};
}

export default PageHome;

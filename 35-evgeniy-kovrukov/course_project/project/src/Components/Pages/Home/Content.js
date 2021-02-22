import React from "react";
// import Interaction from "./Interaction";
import Banner from "./Banner";
import Partners from "./Partners";
import Cards from "./Cards";



class Content extends React.Component {
	render() {
		return (
			<div className="Content-component">
				Content
				<Cards />
				<Banner />
				<Partners />
			</div>
		);
	}
}

export default Content;


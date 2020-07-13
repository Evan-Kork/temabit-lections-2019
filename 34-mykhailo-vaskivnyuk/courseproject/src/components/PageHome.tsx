import React from "react";
import ContentHeader from "./ContentHeader";

function PageHome(): React.ReactElement {
	return (
		<React.Fragment>
			<ContentHeader title="Головна" />
			<div className="row home">
				<span></span>
			</div>
		</React.Fragment>
	);
}

export default PageHome;

import React from "react";
import { Switch, Route } from "react-router-dom";

import PageHome from "./PageHome";
import PageBranches from "./PageBranches";
import PageBranch from "./PageBranch";
import PageBranchesInCity from "./PageBranchesInCity";
import PageTracking from "./PageTracking";
import PageNews from "./PageNews";

function Content(): React.ReactElement {
	return (
		<div className="main wrapper">
			<main className="container">
				<Switch>
					<Route	path="/branches/locality"
							component={PageBranchesInCity} />
					<Route	path="/branches"
							component={PageBranches} />
					<Route	path={["/branch/:branch", "/branch"]} 
							component={PageBranch} />
					<Route	path={["/tracking/:order", "/tracking"]} 
							component={PageTracking} />
					<Route	path="/news"
							component={PageNews} />
					<Route	path="/"
							component={PageHome} />
				</Switch>
			</main>
		</div>
	);
}

export default Content;

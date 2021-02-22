import React from "react";
import Branches from "./Components/Branches";
// import CurrentBranch from "./Components/Current-branch";
// import LocalBranch from "./Components/Local-branch";
import Home from "./Components/Pages/Home/Home";

import "./main.scss";

import { HashRouter, Switch, Route, Link } from "react-router-dom";
import Slider from "./Components/Pages/Home/Slider";
import International from "./Components/Pages/International/International";
import Account from "./Components/Pages/Account/Account";
import About from "./Components/Pages/About/About";
import BranchList from "./Components/Pages/Branches/BranchList";
class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<HashRouter>
				<Switch>

					<Route exact path="/" component={Home} />
					<Route path="/slider" component={Slider} />
					<Route path="/international" component={International} />
					<Route path="/account" component={Account} />
					<Route path="/branches" component={BranchList } />
					<Route path="/about" component={About} />
				</Switch>

					{/* <Main /> */}
					{/* <Branches /> */}
					{/* <CurrentBranch /> */}
					{/* <LocalBranch /> */}
				
			</HashRouter>
		);
	}
}

export default App;

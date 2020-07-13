import React, {FC} from 'react'
import './main.scss'
import Home from "../pages/Home";
import About from "../pages/about/About";
import ListOfBranches from "../pages/listOfBranch/List-of-branches";
import Tariffs from "../pages/tarrifs/Tarrifs";
import {Switch, Route} from "react-router-dom";

const Main: FC = () => {
	return (
		<div className="main">
			<Switch>
				<Route path={'/'} exact component={Home}/>
				<Route path={'/about'} component={About}/>
				<Route path={'/list-of-branches'} component={ListOfBranches}/>
				<Route path={'/tariffs'} component={Tariffs}/>
			</Switch>

		</div>
	)
};

export default Main;
import React from 'react'
import Carusel from "./carusel/Carusel";
import './main.scss'
import Home from "../pages/Home";
import About from "../pages/About";
import ListOfBranches from "../pages/List-of-branches";
import Tariffs from "../pages/Tarrifs";
import {Switch, Route} from "react-router-dom";


const Main = () => {
	return (
		<div className="main">
			<Switch>
				<Route path={'/'} exact component={Home}/>
				<Route path={'/about'} component={About}/>
				<Route path={'/list-of-branches'} component={ListOfBranches}/>
				<Route path={'/tariffs'} component={Tariffs}/>
			</Switch>
			<Carusel/>
		</div>
	)
};

export default Main;
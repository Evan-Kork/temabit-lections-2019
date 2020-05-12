import React from "react";

//import Navigation from "./Navigation";
import { Container } from "react-bootstrap";
import Header from "../Home/Header";
import Branches from "../../Branches";

class BranchList extends React.Component {
	render() {
		return (
			<div className="BranchList-component" >
				<Header />
				<h3>Наші відділення (поштомаркети)</h3>
				<Branches />
			</div>
		);
	}
}

export default BranchList;

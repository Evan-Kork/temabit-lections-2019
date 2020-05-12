import React from "react";
import "./header.scss";
import Navigation from "./Navigation";
import { Container } from "react-bootstrap";

class Header extends React.Component {
	render() {
		return (
			<Container className="Header-component p-3" fluid>
				<Navigation />
			</Container>
		);
	}
}

export default Header;

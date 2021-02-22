import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import Footer from "./Footer";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import "./home.scss";
import Content from "./Content";


class Home extends React.Component {
	render() {
		return (
			<div className="HomePage-component">
				{/* <div style={{ backgroundColor: "lightblue" }}> */}
				<div>
					Home
					<Header />
					<Slider />
					<Content />

					<Footer />
				</div>
				<Link to="/Slider">
					<Button variant="primary">Slider!</Button>
				</Link>
			</div>
		);
	}
}

export default Home;

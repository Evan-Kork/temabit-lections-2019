
import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

class App extends React.Component {

	render() {

		return (
			<div className="min-vh-100 d-flex flex-column justify-content-between">
				<Router>
					<Header />
					<div className="main wrapper">
						<main className="container">
							<Content />
						</main>
					</div>
					<Footer />
				</Router>
			</div>
		);
	}
}

export default App;

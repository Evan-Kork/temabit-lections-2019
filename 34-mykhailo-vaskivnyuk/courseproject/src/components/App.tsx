
import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App(): React.ReactElement {
	return (
		<div className="min-vh-100 d-flex flex-column justify-content-between">
			<Router>
				<Header />
				<Content />
				<Footer />
			</Router>
		</div>
	);
}

export default App;

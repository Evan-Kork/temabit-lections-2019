import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import 'bootstrap';
import "./scss/styles.scss";

import App from "./components/App";
import reducer from "./reducer/reducer";
import data from "./data/data";

// ------------- DEV ------------- //
// import { dev_log } from "./functions/dev";
// window.dev_log = dev_log;
// dev_log("APP START!");
// ------------- DEV ------------- //

const store = createStore(reducer, data);

const app_root = document.getElementById("root");

ReactDOM.render(
	<Provider store={store}>
				<App />
	</Provider>,
	app_root
);

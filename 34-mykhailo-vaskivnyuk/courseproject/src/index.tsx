import React from "react";
import ReactDOM from "react-dom";
import { createStore, Store } from "redux";
import { Provider } from "react-redux";

import "reflect-metadata";
import 'bootstrap';
import "./scss/styles.scss";

import * as Data from "./data/data.types";

import App from "./components/App";
import reducer from "./reducer/reducer";
import data from "./data/data";

const store: Store<Data.State> = createStore(reducer, data);

const app_root: HTMLElement = document.getElementById("root");

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	app_root
);

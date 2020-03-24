import "bootstrap/dist/css/bootstrap.min.css";

import "./index.scss";

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from 'react-router-dom';
import {Provider} from "react-redux";
import {bindActionCreators} from "redux";
import {ConnectedRouter} from "connected-react-router";

import JustinService from "./services/Justin-Service";
import {JustinServiceProvider} from "./context/JustinServiceContext";
import ErrorBoundry from "./components/Errors/Boundry";

import store, {history} from "./store";
import * as actions from "./actions";
import {isMobile} from "./utils";

import routes from "./routes/routes";

console.log("%cjustin","font-weight:bold;font-size:50px;color:red;text-shadow:4px 4px 0 rgb(245,221,8),8px 8px 0 rgb(2,135,206)");

const justinService = new JustinService();

const {dispatch} = store;

const {screenResize} = bindActionCreators(actions, dispatch);

window.addEventListener("resize", () => {
    screenResize(isMobile());
});

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <ConnectedRouter history={history}>
                <JustinServiceProvider value={justinService}>
                    <Router>
                        {routes}
                    </Router>
                </JustinServiceProvider>
            </ConnectedRouter>
        </ErrorBoundry>
    </Provider>,
    document.getElementById("root")
);

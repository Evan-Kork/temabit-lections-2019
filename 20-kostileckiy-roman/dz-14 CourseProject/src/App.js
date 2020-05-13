import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./pages/mainPage";
import TrackerPage from "./pages/trackerPage";
import {createStore} from "redux";
import {Link} from "./redux/LinkReduser";

class App extends Component {
    constructor(props) {
        super(props);
        this.store = createStore(Link).getState().LINK_TO
    }
    render() {
        return (
            <BrowserRouter>
              <Route exact path={this.store.PAGE_MAIN}>
                  <MainPage/>
              </Route>
              <Route exact path={this.store.PAGE_TRACKER}>
                  <TrackerPage/>
              </Route>
            </BrowserRouter>
        );
    }
}

export default App;
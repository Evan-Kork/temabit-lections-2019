import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {HOMEPAGE, TRACKER_PAGE} from "./redux/pagePath";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./pages/mainPage";
import TrackerPage from "./pages/trackerPage";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
              <Route exact path={HOMEPAGE}>
                  <MainPage/>
              </Route>
              <Route exact path={TRACKER_PAGE}>
                  <TrackerPage/>
              </Route>
            </BrowserRouter>





        );
    }
}

export default App;
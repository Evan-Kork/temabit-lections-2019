import React, {Component} from 'react';
import Header from "../components/header/header";
import Tracker from "../components/tracker/tracker";

class TrackerPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Tracker/>
            </div>
        );
    }
}

export default TrackerPage;
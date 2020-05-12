import React, {Component} from 'react';
import Header from "../components/header/header";
import Tracker from "../components/tracker/tracker";
import Footer from "../components/footer/footer";

class TrackerPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Tracker/>
                <Footer/>
            </div>
        );
    }
}

export default TrackerPage;
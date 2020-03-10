import React from "react";
import parser from "../functions/parser";
import request from "../functions/request";
import TrackingStatus from "./TrackingStatus";

class TrackingHistory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            order: null,
            tracking_history: { data: null, error: null}
        };
    }

    getTrackingHistory() {
        const order = this.state.order;
        const { data, error } = this.state.tracking_history;
        if (!order || data || error) return;

        const method = "tracking_history";
        const params = order ? "/" + order : "";
        request(
            { method, params },
            (data, error) => {
                this.setState(
                    { [method]: { data, error } }
                );
            }
        );
    }

    static getDerivedStateFromProps(props, state) {
        const order = props.order;
        if (order == state.order) return null;
        const data = null;
        const error = null;
        const tracking_history = { data, error };
        return { order, tracking_history };
    }

    componentDidMount() {
        this.getTrackingHistory()
    }

    componentDidUpdate() {
        this.getTrackingHistory();
    }

    // getHistory(data) {
    //     const history = new Map();
    //     data.forEach(item => {
    //         let status = "";
    //         switch(item.status) {
    //             case "Запланована до відправки":
    //                 status = "ready";
    //                 break;
    //             case "Прямує в місто одержання":
    //                 status = "going";
    //                 break;
    //             case "На відділенні в місті одержання":
    //                 status = "on_branch";
    //                 break;
    //             case "Одержано":
    //                 status = "taken";
    //                 break;
    //         }               
    //         status ? history.set(status, {date: item.date, time: item.time}) : null;
    //     });

    //     return history;
    // }
    
    // getHistory(data) {
    //     const history = {};
    //     data.forEach(item => {
    //         switch(item.status) {
    //             case "Запланована до відправки":
    //                 history.ready = true;
    //                 break;
    //             case "Прямує в місто одержання":
    //                 history.going = true;
    //                 break;
    //             case "На відділенні в місті одержання":
    //                 history.on_branch = true;
    //                 break;
    //             case "Одержано":
    //                 history.taken =true;
    //                 break;
    //         }               
    //     });

    //     return history;
    // }

    getHistory(data) {
        const history = {};
        data.forEach(item => {
            let status = "";
            switch(item.status) {
                case "Запланована до відправки":
                    status = "ready";
                    break;
                case "Прямує в місто одержання":
                    status = "going";
                    break;
                case "На відділенні в місті одержання":
                    status = "on_branch";
                    break;
                case "Одержано":
                    status = "taken";
                    break;
            }               
            status ? history[status] = {date: item.date, time: item.time} : null;
        });

        return history;
    }

    render() {
        
        const { data, error } = this.state.tracking_history;
        //dev_log(error);
        if (!data) return null;
        const history = this.getHistory(data);

        //const divs = parser(data);

        dev_log(data);

        return (
            <div className="row tracking_history">
                <TrackingStatus status="ready" data={history.ready} />
                <TrackingStatus status="going" data={history.going} />
                <TrackingStatus status="on_branch" data={history.on_branch} />
                <TrackingStatus status="taken" data={history.taken} />
            </div>
        );
    }
}

export default TrackingHistory;

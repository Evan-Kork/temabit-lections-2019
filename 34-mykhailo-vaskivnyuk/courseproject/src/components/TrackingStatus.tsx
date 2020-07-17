import React, { ReactElement } from "react";

/*----------------------------------------------------------|
|             TYPES                                         |
|----------------------------------------------------------*/
interface Props {
    status: Data.StatusesNames,
    data: Pick<Data.TrackingHistoryInfo, 'date' | 'time'>,
}

const STATUSES: Data.Statuses = {
    ready: { img: "../src/imgs/road_on.png", text: "ВИРУШАЄ" },
    going: { img: "../src/imgs/start_on.png", text: "В ДОРОЗІ" },
    on_branch: { img: "../src/imgs/road_on.png", text: "НА ВІДДІЛЕННІ" },
    taken: { img: "../src/imgs/start_on.png", text: "ОТРИМАНА" }
}

/*----------------------------------------------------------|
|             COMPONENT                                     |
|----------------------------------------------------------*/
function TrackingStatus(props: Props): ReactElement {
    const { status, data } = props;
    const { img, text } = STATUSES[status];
    const { date, time } = data || {};
    const active = data ? "active" : "";

    return (
        <div className={"col-12 col-sm-6 col-md-3 tracking_status" + active}>
            <div className="tracking_icon">
                <img src={img} />
            </div>
            <img className="tracking_line" src="../src/imgs/polosa_on.png" />
            {data ? [
                <div key="text"><span>{text}</span></div>,
                <div key="date"><span>{date}</span></div>,
                <div key="time"><span>{time}</span></div>,
            ] : null}
        </div>
    );
}

export default TrackingStatus;

import React from "react";

const statuses = {
	ready: {img: "../src/imgs/road_on.png", text: "ВИРУШАЄ"},
	going: {img: "../src/imgs/start_on.png", text: "В ДОРОЗІ"},
	on_branch: {img: "../src/imgs/road_on.png", text: "НА ВІДДІЛЕННІ"},
	taken: {img: "../src/imgs/start_on.png", text: "ОТРИМАНА"}
}

class TrackingStatus extends React.Component {

	render() {
		const status = this.props.status;
		const data = this.props.data;
		const active = data ? "active" : "";

		return (
				<div className={"col-12 col-sm-6 col-md-3 tracking_status" + active}>
					<div className="tracking_icon"><img src={statuses[status].img} /></div>
					<img className="tracking_line" src="../src/imgs/polosa_on.png" />
					{data ? [
					<div key={"text"}><span>{statuses[status].text}</span></div>,
					<div key={"date"}><span>{data.date}</span></div>,
					<div key={"time"}><span>{data.time}</span></div>
					] : null}
				</div>
		);
	}
}

export default TrackingStatus;

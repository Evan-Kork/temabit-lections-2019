import React, { useState, useEffect } from "react";
import request from "../functions/request";
import TrackingStatus from "./TrackingStatus";
import RequestInfo from "./RequestInfo";

interface Props {
	order: string,
}

type TrackingHistory = {
	[Status in Data.StatusesNames]?:
		Pick<Data.TrackingHistoryInfo, 'date' | 'time'>
};

function getHistory(data: Data.TrackingHistoryInfo[]): TrackingHistory {
	const history: TrackingHistory = {};
	data.forEach(item => {
		let status: Data.StatusesNames;
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

function TrackingHistory(props: Props): React.ReactElement {
	const [order, setOrder] = useState("");
	const [tracking_history, setTrackingHistory] =
		useState({ data: null, error: null }  as Data.TrackingHistoryData);
	const newOrder = props.order;

	useEffect(() => {
		if (order && order === newOrder) return;

		const method = "tracking_history";
		const params = "/" + newOrder;
		request(
			{ method, params },
			(data: Data.TrackingHistoryInfo[], error: Error) => {
				setOrder(newOrder);
				setTrackingHistory({ data, error });
			}
		);
	}, [newOrder]);

	if (order !== newOrder) return null;

	const { data, error } = tracking_history;

	if (!data) {
		return (
			<div className="row justify-content-center">
				<RequestInfo error={error}/>
			</div>
		);
	}

	const history = getHistory(data);

	return (
		<div className="row tracking_history">
			<TrackingStatus status="ready" data={history.ready} />
			<TrackingStatus status="going" data={history.going} />
			<TrackingStatus status="on_branch" data={history.on_branch} />
			<TrackingStatus status="taken" data={history.taken} />
		</div>
	);
}

export default TrackingHistory;

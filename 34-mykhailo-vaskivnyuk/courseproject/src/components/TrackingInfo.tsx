import React, { useState, useEffect } from "react";
import request from "../functions/request";
import RequestInfo from "./RequestInfo";

interface Props {
	order: string,
}

function TrackingInfo(props: Props): React.ReactElement {
	const [order, setOrder] = useState("");
	const [tracking, setTracking] = useState({ data: null, error: null }  as Data.TrackingData);
	const newOrder = props.order;

	useEffect(() => {
		if (order && order === newOrder) return;

		const method = "tracking";
		const params = "/" + newOrder;
		request(
			{ method, params },
			(data: Data.TrackingInfo[], error: Error) => {
				setOrder(newOrder);
				setTracking({ data, error });
			}
		);
	}, [newOrder]);

	if (order !== newOrder) return null;
		
	const { data, error } = tracking;

	if (!data) {
		return (
			<div className="row justify-content-center">
				<RequestInfo error={error}/>
			</div>
		);
	}

	const {
		orderNumber,
		status,
		date,
		time,
		orderDescription,
		departmentNumber,
		departmentAdress,
	} = data[0];

	const body = [
		(<tr key="orderNumber">
			<td>Замовленя №</td><td>{orderNumber}</td>
		</tr>),
		(<tr key="status">
			<td>Статус</td><td>{status}</td>
		</tr>),
		(<tr key="date">
			<td>Дата</td><td>{date}</td>
		</tr>),
		(<tr key="time">
			<td>Час</td><td>{time}</td>
		</tr>),
		(<tr key="orderDescription">
			<td>Додаткові відомості</td><td>{orderDescription}</td>
		</tr>),
		(<tr key="departmentNumber">
			<td>Відділення №</td><td>{departmentNumber}</td>
		</tr>),
		(<tr key="departmentAdress">
			<td>Адреса</td><td>{departmentAdress}</td>
		</tr>),
	];
		
	return (
		<div className="row justify-content-center">
			<div className="tbl_tracking">
				<table>
					<tbody>
						{body}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default TrackingInfo;

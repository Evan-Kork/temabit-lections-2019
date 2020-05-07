import React from "react";
import request from "../functions/request";
import RequestInfo from "./RequestInfo";

class TrackingInfo extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			order: null,
			tracking: { data: null, error: null}
		};
	}

	getTracking() {
		const order = this.state.order;
		const { data, error } = this.state.tracking;
		if (!order || data || error) return;

		const method = "tracking";
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
		const tracking = { data, error };
		return { order, tracking };
	}

	componentDidMount() {
		this.getTracking();
	}

	componentDidUpdate() {
		this.getTracking();
	}

	render() {
		
		let { data, error } = this.state.tracking;

		if (!data){
			return (
				<div className="row justify-content-center">
					<RequestInfo error={error}/>
				</div>
			);
		}

		data = data[0];

		const body = [
			(<tr key={"orderNumber"}>
				<td>Замовленя №</td><td>{data.orderNumber}</td>
			</tr>),
			(<tr key={"status"}>
				<td>Статус</td><td>{data.status}</td>
			</tr>),
			(<tr key={"date"}>
				<td>Дата</td><td>{data.date}</td>
			</tr>),
			(<tr key={"time"}>
				<td>Час</td><td>{data.time}</td>
			</tr>),
			(<tr key={"orderDescription"}>
				<td>Додаткові відомості</td><td>{data.orderDescription}</td>
			</tr>),
			(<tr key={"departmentNumber"}>
				<td>Відділення №</td><td>{data.departmentNumber}</td>
			</tr>),
			(<tr key={"departmentAdress"}>
				<td>Адреса</td><td>{data.departmentAdress}</td>
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
}

export default TrackingInfo;

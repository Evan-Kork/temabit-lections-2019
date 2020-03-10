import React from "react";
import parser from "../functions/parser";
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
				//dev_log(data);
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
		// orderNumber :: 201810163
		// orderDescription :: Замовлення клієнта 201810163 від 7/25/2018
		// date :: 2018-08-06
		// time :: 17:20:05
		// status :: Прострочений термін зберігання
		// departmentNumber ::
		// departmentAdress ::
		
		let { data, error } = this.state.tracking;
		
		//dev_log(error);
		//const divs = parser(data);
		if (!data){

			return (
				<div className="row justify-content-center">
					<RequestInfo error={error}/>
				</div>
			);
		}

		data = data[0];

		const body = [
			// <React.Profiler>
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
			// </React.Profiler>
		];

		//dev_log(divs);
		
		return (
			<div className="row justify-content-center">
				<div className="tbl_tracking">
					<table>
						{/* <thead>
							{head}
						</thead> */}
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

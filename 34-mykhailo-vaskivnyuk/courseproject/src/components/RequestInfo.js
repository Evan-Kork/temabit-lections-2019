import React from "react";

class RequestInfo extends React.Component {

	constructor(props) {
		super(props);
	}
	
	render() {
		
		const error = this.props.error;
		const request_status = error ? error.message : "Зачекайте, дані завантажуються!";
		const className = error ? "request_error" : "";
		
		const body = [
			(<tr key={"request_status"}>
				<td className={className}>{request_status}</td>
			</tr>)
		];
	
		return(
			<div className="row justify-content-center">
				<div className="tbl_request">
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

export default RequestInfo;

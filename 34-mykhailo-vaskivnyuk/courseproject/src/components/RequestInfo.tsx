import React from "react";

interface Props {
	error: Error
}

function RequestInfo(props: Props): React.ReactElement {

	const { error } = props;
	const request_status = error ? error.message : "Зачекайте, дані завантажуються!";
	const className = error ? "request_error" : "";
	
	const body = [
		(<tr key="request_status">
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

export default RequestInfo;

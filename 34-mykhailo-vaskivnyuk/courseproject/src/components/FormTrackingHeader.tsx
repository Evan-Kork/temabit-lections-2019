import React, { ReactElement, FormEvent } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps { }

type FormEventData = FormEvent & {
	target: {
		order?: HTMLInputElement
	}
};

const onSubmit = (history: any) => (event: FormEventData) => {
	event.preventDefault();
	const order = event.target.order.value;
	history.push("/tracking/" + order);
}

function FormTrackingHeader(props: Props): ReactElement {
	return (
		<form
			className="tracking d-none d-md-inline"
			onSubmit={onSubmit(props.history)}>
			<input
				className="order_number"					
				type="text"
				name="order"
				placeholder="Введіть номер відправлення" />
		</form>
	);
}


export default withRouter(FormTrackingHeader);

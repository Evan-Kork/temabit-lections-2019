import React from "react";
import { withRouter } from "react-router-dom";

interface Props {
	history: any;
}

type FormEventData = React.FormEvent & {
	target: {
		order?: HTMLInputElement
	}
};

const onSubmit = (history: any) => (event: FormEventData) => {
	event.preventDefault();
	const order = event.target.order.value;
	history.push("/tracking/" + order);
}

function FormTrackingHeader(props: Props): React.ReactElement {
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

/*
class FormTrackingHeader extends React.Component {

	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(event) {
		event.preventDefault();
		const order = event.target.order.value;
		this.props.history.push("/tracking/" + order);
	}

	render() {
		return (
			<form className="tracking d-none d-md-inline" onSubmit={this.onSubmit}>
				<input 	className="order_number"					
						type="text"
						name="order"
						placeholder="Введіть номер відправлення" />
			</form>
		);
	}
}
*/

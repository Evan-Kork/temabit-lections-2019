import React from "react";

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

export default FormTrackingHeader;

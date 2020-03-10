import React from "react";

class FormTracking extends React.Component {

	constructor(props) {
		super(props);
		this.formRef = React.createRef();
	}

	order() {
		const order = this.props.order ? this.props.order : "";
		this.formRef.current.order.value = order;
	}

	componentDidMount() {
		this.order();
	}

	componentDidUpdate() {
		this.order();
	}

	render() {
		
		dev_log.render(this);
		
		return (
			<div className="row justify-content-center">
				<div className="tracking">
					<form ref={this.formRef} onSubmit={this.props.onSubmit}>
						<input  className="order_number"
								type="number"
								name="order"
								placeholder="Введіть номер відправлення" />
						<i className="far fa-caret-square-right" onClick={this.props.onSubmit}></i>
					</form>
				</div>
			</div>
		);
	}
}

export default FormTracking;

{/* <form ref={this.formRef} onSubmit={this.props.onSubmit}>
				<label>Order 
					<input type="number" name="order" />
				</label>
			</form> */}

import React from "react";
import FormTracking from "./FormTracking";
import TrackingInfo from "./TrackingInfo";
import TrackingHistory from "./TrackingHistory";
import ContentHeader from "./ContentHeader";

class PageTracking extends React.Component {

	constructor(props) {
		super(props);
		this.handleTracking = this.handleTracking.bind(this);
	}

	handleTracking(event) {
		event.preventDefault();
		let order;
		if (event.target.tagName == "FORM") {
			order = event.target.order.value;
		} else {
			order = event.target.parentElement.order.value;
		}
		this.props.history.push("/tracking/" + order);
	}
	
	render() {

		const order = this.props.match.params.order;

		return (
			<React.Fragment>
				<ContentHeader title="Інформація про відправлення" />
				<FormTracking order={order} onSubmit={this.handleTracking} />
				{order ? <TrackingInfo order={order} /> : null}
				{order ? <TrackingHistory order={order} /> : null}
			</React.Fragment>
		);
	}
}

export default PageTracking;

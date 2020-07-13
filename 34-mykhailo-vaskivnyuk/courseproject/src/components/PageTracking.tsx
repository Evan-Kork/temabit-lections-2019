import React from "react";
import FormTracking from "./FormTracking";
import TrackingInfo from "./TrackingInfo";
import TrackingHistory from "./TrackingHistory";
import ContentHeader from "./ContentHeader";

type HTMLForm = HTMLElement & { order: HTMLInputElement };

interface Props {
	history: {
		push: (path: string) => void,
	},
	match: {
		params: {
			order: string,
		},
	},
}

function PageTracking(props: Props): React.ReactElement {

	const handleTracking: React.FormEventHandler = (event: React.FormEvent) => {
		event.preventDefault();
		let elem = event.target as HTMLForm;
		elem.tagName === "FORM" || (elem = elem.parentElement as HTMLForm);
		const order = elem.order.value;
		props.history.push("/tracking/" + order);
	}

	const { order } = props.match.params;

	return (
		<React.Fragment>
			<ContentHeader title="Інформація про відправлення" />
			<FormTracking order={order} onSubmit={handleTracking} />
			{order ? <TrackingInfo order={order} /> : null}
			{order ? <TrackingHistory order={order} /> : null}
		</React.Fragment>
	);
}

export default PageTracking;

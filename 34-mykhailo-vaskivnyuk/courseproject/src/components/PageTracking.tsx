import React, { 
    ReactElement,
    FormEventHandler,
    FormEvent,
 } from "react";
import { RouteComponentProps } from "react-router-dom";
import FormTracking from "./FormTracking";
import TrackingInfo from "./TrackingInfo";
import TrackingHistory from "./TrackingHistory";
import ContentHeader from "./ContentHeader";

type HTMLForm = HTMLElement & { order: HTMLInputElement };

type Props = RouteComponentProps & {
    match: {
        params: {
            order: string,
        },
    },
}

function PageTracking(props: Props): ReactElement {

    const handleTracking: FormEventHandler = (event: FormEvent) => {
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

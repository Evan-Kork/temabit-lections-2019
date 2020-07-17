import React, { ReactElement } from "react";
import { RouteComponentProps } from "react-router-dom";
import FormTracking from "./FormTracking";
import TrackingInfo from "./TrackingInfo";
import TrackingHistory from "./TrackingHistory";
import ContentHeader from "./ContentHeader";

/*----------------------------------------------------------|
|             TYPES                                         |
|----------------------------------------------------------*/
type Props = RouteComponentProps & {
    match: {
        params: {
            order: string,
        },
    },
}

/*----------------------------------------------------------|
|             COMPONENT                                     |
|----------------------------------------------------------*/
function PageTracking(props: Props): ReactElement {

    const handleTracking = (order: string): void =>
        props.history.push("/tracking/" + order);

    const { order } = props.match.params;

    return (
        <React.Fragment>
            <ContentHeader title="Інформація про відправлення" />
            <FormTracking order={order} handleTracking={handleTracking} />
            {order ? <TrackingInfo order={order} /> : null}
            {order ? <TrackingHistory order={order} /> : null}
        </React.Fragment>
    );
}

export default PageTracking;

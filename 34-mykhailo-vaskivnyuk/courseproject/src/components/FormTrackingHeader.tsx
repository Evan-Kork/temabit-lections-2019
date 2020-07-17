import React, { ReactElement, FormEvent, EventHandler } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

/*----------------------------------------------------------|
|             TYPES                                         |
|----------------------------------------------------------*/
interface Props extends RouteComponentProps { }

type eData = FormEvent<HTMLFormElement> & {
    target: {
        order: HTMLInputElement
    }
};

type eHandler = EventHandler<eData>;

const onSubmit = (history: any): eHandler => (event: eData) => {
        event.preventDefault();
        const order = event.target.order.value;
        history.push("/tracking/" + order);
};

/*----------------------------------------------------------|
|             COMPONENT                                     |
|----------------------------------------------------------*/
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

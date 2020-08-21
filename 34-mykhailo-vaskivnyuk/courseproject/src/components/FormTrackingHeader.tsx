import React, {
    useState,
    ReactElement, FormEvent, EventHandler,
} from "react";
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

const getOnSubmit = ({ history }: Props): eHandler => (event: eData) => {
        event.preventDefault();
        const order = event.target.order.value;
        history.push("/tracking/" + order);
};

/*----------------------------------------------------------|
|             COMPONENT                                     |
|----------------------------------------------------------*/
function FormTrackingHeader(props: Props): ReactElement {
    const [onSubmit] = useState(() => getOnSubmit(props));
    return (
        <form
            className="tracking d-none d-md-inline"
            onSubmit={onSubmit}>
            <input
                className="order_number"					
                type="text"
                name="order"
                placeholder="Введіть номер відправлення" />
        </form>
    );
}


export default withRouter(FormTrackingHeader);

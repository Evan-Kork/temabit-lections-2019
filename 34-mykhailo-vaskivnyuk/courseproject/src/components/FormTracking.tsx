import React, {
    ReactElement, FormEventHandler, FormEvent,
    useRef, useEffect,
} from "react";

interface Props {
    handleTracking: (order: string) => void,
    order: string,
}

function FormTracking(props: Props): ReactElement {
    const { order, handleTracking } = props;
    const orderRef = useRef(null);

    useEffect(() => {
            orderRef.current.order.value = order || "";
        },
        [order],
    );
    
    const onSubmit: FormEventHandler = (event: FormEvent): void => {
        event.preventDefault();
        const order = orderRef.current.value;
        handleTracking(order);
    }

    return (
        <div className="row justify-content-center">
            <div className="tracking">
                <form ref={orderRef} onSubmit={onSubmit}>
                    <input name="order"
                        className="order_number"
                        type="number"
                        placeholder="Введіть номер відправлення" />
                    <i className="far fa-caret-square-right" onClick={onSubmit}></i>
                </form>
            </div>
        </div>
    );
}

export default FormTracking;

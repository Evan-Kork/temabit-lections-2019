import React, {
    ReactElement, FormEventHandler, FormEvent,
    useRef, useEffect, useCallback,
} from "react";

/*----------------------------------------------------------|
|             TYPES                                         |
|----------------------------------------------------------*/
interface Props {
    handleTracking: (order: string) => void,
    order: string,
}

/*-----------------------------------------------------------|
|             COMPONENT                                      |
|-----------------------------------------------------------*/
function FormTracking(props: Props): ReactElement {
    const { order, handleTracking } = props;
    const orderRef = useRef(null);

    useEffect(
        () => { orderRef.current.value = order || ""; },
        [order],
    );
    
    const onSubmit: FormEventHandler = useCallback((event: FormEvent): void => {
        event.preventDefault();
        const { value: order } = orderRef.current;
        handleTracking(order);
    }, []);

/*------------------------------------------------------------|
|             RESULT                                          |
|------------------------------------------------------------*/
    return (
        <div className="row justify-content-center">
            <div className="tracking">
                <form onSubmit={onSubmit}>
                    <input name="order"
                        ref={orderRef}
                        className="order_number"
                        type="number"
                        placeholder="Введіть номер відправлення" />
                    <i className="far fa-caret-square-right"
                        onClick={onSubmit} />
                </form>
            </div>
        </div>
    );
}

export default FormTracking;

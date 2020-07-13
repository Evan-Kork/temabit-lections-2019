import React, { useRef, useEffect } from "react";

interface Props {
	onSubmit: React.FormEventHandler,
	order: string,
}

function FormTracking(props: Props): React.ReactElement {
	const { order, onSubmit } = props;
	const orderRef = useRef(null);
	const setBranch = (): void => {
		orderRef.current.order.value = order || "";
	};

	useEffect(setBranch, [order]);
		
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

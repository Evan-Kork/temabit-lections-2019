import React    from "react"
import "./errorIndicator.scss"
import no from '../../img/no.png'

const ErrorIndicator = () => {
	return (
		<div className="error">
			<img src={no} alt="branch not found" />
			<h1>Відділення не  знайдено</h1>
		</div>
	
	)
};

export default ErrorIndicator;
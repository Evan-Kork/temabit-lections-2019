import React    from "react"
import ReactDom from "react-dom"
import "./errorIndicator.scss"
import no from './no.png'

const ErrorIndicator = () => {
	return (
		<div className="error">
			<img src={no} alt="branch not found" />
			<h1>Відділення не  знайдено</h1>
		</div>
	
	)
};

export default ErrorIndicator;
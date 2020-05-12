import React, {Component} from 'react';
import ReactDom           from 'react-dom';
import './carusel.scss'
import JustinApiService   from '../../../services/JustinApiService'
import Spiner             from "../../spiner/Spiner";
import ErrorIndicator     from "../../errorIndicator/ErrorIndicator";

export default class Carusel extends Component {
	
	componentDidMount() {
		this.updateService();
		// this.intrval = setInterval(this.updateService, 5000)
	}
	
	
	justinApiService = new JustinApiService();
	
	state = {
		branch: {},
		loading: true
	};
	
	onBranchLoaded = (branch) => {
		this.setState({
			branch,
			loading: false,
			error: false,
		})
	};
	
	
	onError = (err) => {
		this.setState({
			error: true,
			loading:false
		})
	};
	
	updateService = () => {
		const id = Math.floor((Math.random() * 300) + 2);
		this.justinApiService
		    .getOneBranch(id)
		    .then(this.onBranchLoaded)
		    .catch(this.onError)
	};
	
	render() {
		const {branch, loading, error} = this.state;
		const errorMessage = error ? <ErrorIndicator/> : null;
		const hasData = !(loading || error);
		const spinner = loading ? <Spiner /> : null;
		const content = hasData ? <BranchView branch={branch} /> : null;
		
		return (
			<div className="carusel jumbotron rounded">
				{errorMessage}
				{spinner}
				{content}
			</div>
		)
	}
}

const BranchView = ({branch}) => {
	const {format, description, adress, number, photo} = branch;
	
	return (
		<React.Fragment>
			<img className="carusel__image rounded" src={photo} alt="" />
			<div className="description">
				<h4 className="description__title">{description}</h4>
				<p className="format">Тип відділення: {format}</p>
				<p className="number">Номер відділення: №{number}</p>
				<p className="address">Адреса відділення:{adress}</p>
			</div>
		</React.Fragment>
	)
};
import React from "react";
import FormCity from "./FormCity";
import TableData from "./TableData";
import ContentHeader from "./ContentHeader";

class PageBranchesInCity extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			filter: { city: null }
		};
		this.handleCity = this.handleCity.bind(this);
	}

	handleCity(event) {
		this.setState({ filter: { city: event.target.value } });
	}

	render() {
		
		const filter = this.state.filter;
		const city = filter.city;

		return (
			<React.Fragment>
				<ContentHeader title="Наші відділення (поштомаркети) у місті" />
				<FormCity city={city} onChange={this.handleCity}/>
				<TableData filter={filter} redirect={this.props.history.push} />
			</React.Fragment>
	)};
}

export default PageBranchesInCity;

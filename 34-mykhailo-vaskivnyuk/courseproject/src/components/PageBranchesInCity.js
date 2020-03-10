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
		dev_log(event.target.value);
		this.setState({ filter: { city: event.target.value } });
	}

	render() {
	
		dev_log.render(this);
		
		const filter = this.state.filter;
		const city = filter.city;
		dev_log(filter);

		return (
			<React.Fragment>
				<ContentHeader title="Наші відділення (поштомаркети) у місті" />
				<FormCity city={city} onChange={this.handleCity}/>
				<TableData filter={filter} redirect={this.props.history.push} />
			</React.Fragment>
	)};
}

export default PageBranchesInCity;

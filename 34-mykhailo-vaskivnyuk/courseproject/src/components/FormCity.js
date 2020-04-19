import React from "react";
import { connect } from "react-redux";
import { setResponse } from "../reducer/actions/actions";
import request from "../functions/request";

class FormCity extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		if (this.props.localities.data) return;
		const method = "localities";
		const params = "";
		request(
			{ method, params },
			(data, error) => {
				this.props.setResponse(
					method,
					{data, error}
				);
			}
		);
	}
	
	render() {

		const city = this.props.city ? this.props.city : "";

		const { data, error } = this.props.localities;
		if (!data) return null;

		const options = data.map((item, index) => {
			return <option key={item.SCOATOU} value={item.title_ua}> {item.title_ua} </option>
		});

		return (
			<div className="row justify-content-center">
				<div className="locality">
					<form>
						<select defaultValue={city} name="city" onChange={this.props.onChange}>
						<option disabled key={0} value="">Виберіть місто</option>
						{options}
						</select>
					</form>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		localities: state.responses.localities
	}
}

export default FormCity = connect(mapStateToProps, { setResponse })(FormCity);

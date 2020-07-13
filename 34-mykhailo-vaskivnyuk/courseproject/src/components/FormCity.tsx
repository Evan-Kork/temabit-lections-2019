import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setResponse } from "../reducer/actions/actions";
import request from "../functions/request";

interface Props {
	localities: Data.LocalitiesData,
	city: string,
	onChange: React.FormEventHandler,
	setResponse: (
		req: string,
		res: Data.LocalitiesData,
	) => void,
}

function FormCity(props: Props): React.ReactElement{

	useEffect(() => {
		if (props.localities.data) return;
		const method = "localities";
		const params = "";
		request(
			{ method, params },
			(data: Data.Localities, error: Error) => {
				props.setResponse(
					method,
					{data, error}
				);
			}
		);
	}, []);

	const { data, error } = props.localities;
	if (!data) return null;

	const options = data.map((item, index) => {
		return <option key={item.SCOATOU} value={item.title_ua}> {item.title_ua} </option>
	});

	const city = props.city ? props.city : "";

	return (
		<div className="row justify-content-center">
			<div className="locality">
				<form>
					<select defaultValue={city} name="city" onChange={props.onChange}>
					<option disabled key={0} value="">Виберіть місто</option>
					{options}
					</select>
				</form>
			</div>
		</div>
	);
}

function mapStateToProps(state: Data.State): Pick<Data.Responses, 'localities'> {
	return {
		localities: state.responses.localities
	}
}

export default connect(mapStateToProps, { setResponse })(FormCity);

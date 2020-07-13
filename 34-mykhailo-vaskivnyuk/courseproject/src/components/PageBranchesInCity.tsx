import React, { useState } from "react";
import FormCity from "./FormCity";
import TableData from "./TableData";
import ContentHeader from "./ContentHeader";

interface Props {
	history: any
}

type FormEventData = React.FormEvent & {
	target?: HTMLInputElement
};

function PageBranchesInCity(props: Props): React.ReactElement {
	const [filter, setFilter] = useState({ city: null });

	const handleCity: React.FormEventHandler = (event: FormEventData) =>
		setFilter({ city: event.target.value });
		
	const { city } = filter;

	return (
		<React.Fragment>
			<ContentHeader title="Наші відділення (поштомаркети) у місті" />
			<FormCity city={city} onChange={handleCity}/>
			<TableData filter={filter} redirect={props.history.push} />
		</React.Fragment>
	);
}

export default PageBranchesInCity;

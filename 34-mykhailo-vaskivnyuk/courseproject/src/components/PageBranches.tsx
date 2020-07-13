import React from "react";
import TableData from "./TableData";
import ContentHeader from "./ContentHeader";

interface Props {
	history: { push: (location: string) => void };
}

function PageBranches({ history }: Props): React.ReactElement {
	return (
		<React.Fragment>
			<ContentHeader title="Наші відділення (поштомаркети)" />
			<TableData redirect={history.push} />
		</React.Fragment>
	);
}

export default PageBranches;

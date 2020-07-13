import React, { ReactElement } from "react";

interface Props {
	title: string
}

function ContentHeader({ title }: Props): ReactElement {
	return (
		<div className="row">
			<div className="col">
				<div className="h2_line">
					<span></span>
				</div>
				<div className="h2">{title}</div>
			</div>
		</div>
	);
}

export default ContentHeader;

import React from "react";

interface Props {
	onClick: React.FormEventHandler,
	page: number,
	pages: number,
}

function Pagination(props: Props): React.ReactElement {
	return (
		<div className="pages" onClick={props.onClick}>
			<i className="far fa-caret-square-left" data-direction="prev"></i>
			<span>Page {props.page} of {props.pages}</span>
			<i className="far fa-caret-square-right" data-direction="next"></i>
		</div>
	);
}

export default Pagination;

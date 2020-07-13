import React, { useState } from "react";
import Pagination from "./Pagination";

interface Props {
	data: Data.Branches,
	handler: any,
}

interface LocalState {
	setState: (state: LocalState) => void;
	props: Props,
	page: number,
	pages: number,
}

type HTMLForm = HTMLElement;
type FormEventData = React.FormEvent & { relatedTarget?: HTMLElement };

const SERVICES: Data.Services = {
	monobank: 'Картка "MONOBANK"',
	["3mob"]: "3Mob",
	uplata: "Uplata",
};

function getServices(services: Data.Services): string {
	let array = [];
	let service: Data.ServicesNames;
	for (service in services) {
		if (services[service] && SERVICES[service])
			array.push(SERVICES[service]);
	}
	return array.join("; ");
}

const handleOnMouseOver: React.FormEventHandler = function(event: React.FormEvent) {
	const _this: LocalState = (this as any) as LocalState;
	let elem = event.target as HTMLForm;
	elem = elem.closest("TR");
	if (!elem || !elem.closest("TBODY")) return;
	const index = +elem.dataset.index;
	const branch = _this.props.data[index];
	const position = elem.getBoundingClientRect();
	_this.props.handler({ branch, position });
}

const handleOnMouseOut: React.ReactEventHandler = function(event: FormEventData) {
	const _this: LocalState = (this as any) as LocalState;
	let elem = event.target as HTMLElement;
	elem = elem.closest("TR");
	let rel_elem =	event.relatedTarget;
	rel_elem = rel_elem ? rel_elem.closest("TR") : null;
	if (elem === rel_elem) return;
	_this.props.handler(null);
}

const handleOnClick: React.ReactEventHandler = function(event: React.FormEvent) {
	const _this: LocalState = (this as any) as LocalState;
	let elem = event.target as HTMLElement;
	elem = elem.closest("TR");
	if (!elem || !elem.closest("TBODY")) return;
	const number = elem.dataset.number;
	_this.props.handler(null, number);
}

const handlePagination: React.FormEventHandler = function(event: React.FormEvent) {
	const _this: LocalState = (this as any) as LocalState;
	const elem = event.target as HTMLElement;
	const direction = elem.dataset["direction"];
	const page = _this.page;
	if (direction == "next" && page < _this.pages) {
		_this.setState({ ..._this, page: page + 1 });
	}
	if (direction == "prev" && page > 1) {
		_this.setState({ ..._this, page: page - 1 });
	}
}

function Table(props: Props): React.ReactElement {
	const [state, setState] = useState({
		page: 1,
		pages: Math.floor(props.data.length / 50) + 1,
	} as LocalState);
	state.setState = setState;
	state.props = props;
	const { data } = props;

	const head = (
		<tr>
			<th>N</th>
			<th>Адреса</th>
			<th>Навігація</th>
			<th>Сервіси</th>
			<th>Графік роботи</th>
		</tr>
	);

	const index_from = (state.page - 1) * 50;
	const index_to = index_from + 50;
	const body = data.slice(index_from, index_to).map((item, index) => {
		return (
			<tr key={item.delivery_branch_id} data-index={index} data-number={item.number}>
				<td>{item.number}</td>
				<td>{item.adress}</td>
				<td>{item.public.navigation_ua}</td>
				<td>Додаткові: {getServices(item.services)}</td>
				<td>{item.shedule_description}</td>
			</tr>
	)});

	return(
		<React.Fragment>
			<Pagination
				page={state.page}
				pages={state.pages}
				onClick={handlePagination.bind(state)} />
			<div className="tbl_branches">
				<table
					onMouseOver={handleOnMouseOver.bind(state)}
					onMouseOut={handleOnMouseOut.bind(state)}
					onClick={handleOnClick.bind(state)}>
					<thead>
						{head}
					</thead>
					<tbody>
						{body}
					</tbody>
				</table>
			</div>
		</React.Fragment>
	);
}

export default Table;

import React from "react";
import Pagination from "./Pagination";

const SERVICES = {
	monobank: 'Картка "MONOBANK"',
	["3mob"]: "3Mob",
	uplata: "Uplata"
};

class Table extends React.PureComponent {

	constructor(props) {
		super(props);
		this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
		this.handleOnMouseOut = this.handleOnMouseOut.bind(this);
		this.handleOnClick = this.handleOnClick.bind(this);
		this.handlePagination = this.handlePagination.bind(this);
		this.state = {
			page: 1,
			pages: Math.floor(props.data.length / 50) + 1
		}
	}

	handleOnMouseOver(event) {
		const target = event.target.closest("TR");
		if (!target || !target.closest("TBODY")) return;
		const index = target.dataset.index;
		const branch = this.props.data[index];
		const position = target.getBoundingClientRect();
		this.props.handler({ branch, position });
	}

	handleOnMouseOut(event) {
		const target = event.target.closest("TR");
		const rel_target =	event.relatedTarget ? 
							event.relatedTarget.closest("TR") : null;

		if (target != rel_target) this.props.handler(null);
	}

	handleOnClick() {
		const target = event.target.closest("TR");
		if (!target || !target.closest("TBODY")) return;
		const number = target.dataset.number;
		this.props.handler(null, number);
	}

	handlePagination(event) {

		const direction = event.target.dataset["direction"];
		const page = this.state.page;

		if (direction == "next" && page < this.state.pages) {
			this.setState({page: page + 1});
		}

		if (direction == "prev" && page > 1) {
			this.setState({page: page - 1});
		}

	}

	getServices(services) {
		let array = [];
		for (let service in services) {
			if (services[service] && SERVICES[service])
				array.push(SERVICES[service]);
		}
		return array;
	}

	render() {
		
		const data = this.props.data;

		const head = (
			<tr>
				<th>N</th>
				<th>Адреса</th>
				<th>Навігація</th>
				<th>Сервіси</th>
				<th>Графік роботи</th>
			</tr>
		);

		const index_from = (this.state.page - 1) * 50;
		const index_to = index_from + 50;
		const body = data.slice(index_from, index_to).map((item, index) => {
			return (
				<tr key={item.delivery_branch_id} data-index={index} data-number={item.number}>
					<td>{item.number}</td>
					<td>{item.adress}</td>
					<td>{item.public.navigation_ua}</td>
					<td>Додаткові: {this.getServices(item.services).join("; ")}</td>
					<td>{item.shedule_description}</td>
				</tr>
		)});

		return(
			<React.Fragment>
				<Pagination page={this.state.page} pages={this.state.pages} onClick={this.handlePagination} />
				<div className="tbl_branches">
					<table	onMouseOver={this.handleOnMouseOver}
				 			onMouseOut={this.handleOnMouseOut}
							onClick={this.handleOnClick}>
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
}

export default Table;

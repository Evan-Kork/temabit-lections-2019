import React from "react";
import { Container, Table } from "react-bootstrap";

class Branches extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			items: [],
			isLoaded: false
		};
		//this.items = this.items.bind(this)
	}
	componentDidMount() {
		fetch(this.getBranches())
			.then(response => response.json())
			.then(
				result => {
					this.setState({
						isLoaded: true,
						items: result
					});
				},
				error => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			);
	}

	getBranches() {
		return "/api/branches";
	}

	render() {
		const { error, isLoaded, items } = this.state;
		console.log("Branches", items);
		//console.log("Logged output: render -> this.state.branches.length", this.state.branches.length)
		if (error) {
			return <div>Ошибка: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Загрузка...</div>;
		} else {
			return (
				<Container>
					<h1>All Branches</h1>
					<div>
						<Table striped bordered hover>
							<thead>
								<tr>
									<th>#</th>
									<th>Adress</th>
									<th>Navigation</th>
									<th>Locality</th>
									<th>Format</th>
									<th>Mw</th>
								</tr>
							</thead>
						</Table>
						{items.status == 0
							? "Loading branches..."
							: items.result.map(item => (
									<Table striped bordered hover>
										<tbody>
											<tr>
												<td>{item.number}</td>
												<td>{item.adress}</td>
												<td>{item.public.navigation_ua}</td>
												<td>{item.locality}</td>
												<td>{item.format}</td>
												<td>{item.max_weight}</td>
											</tr>
										</tbody>
									</Table>
							  ))}
					</div>
				</Container>
			);
		}
	}
}

// 		return (
// 			<div>
// 				<h1>branches</h1>
// 				<div className="Branches">
// 					{this.state.items.result.map(item => (
// 						<div key={item.name}>
// 							<ul><li>{item.type}</li></ul>
// 						</div>
// 				))}
// 				</div>
// 		</div>
// 		);
// 	}
// }

export default Branches;

{
	/* <div>
										<ul style={{ listStyle: "none" }}>
											<li>{item.number}</li>
											<li>{item.adress}</li>
											<li>{item.public.navigation_ua}</li>
											<li>{item.shedule_description}</li>
											<li>{item.locality}</li>
											<li>{item.format, item.max_weight}</li>
											<li>{item.max_weight}</li>
										</ul>
									</div> */
}

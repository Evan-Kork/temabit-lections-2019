import React from "react";

class CurrentBranch extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			error: null,
			isLoaded: false,
			items: []
		};
		//this.items = this.items.bind(this);
	}

	componentDidMount() {
		fetch("/api/branches/220")
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

	render() {
		const { error, isLoaded, items } = this.state;

		console.log("items", items);
		if (error) {
			return <div>Ошибка: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Загрузка...</div>;
		} else {
			return (
				<div>
					<h1>Current</h1>
					<div>
						{items.status == 0
							? "Loading branches..."
							: items.result.map(item => (
									<div key={item.name}>
										<ul style={{ listStyle: "none" }}>
											<li>{item.description}</li>
											<li>{item.adress}</li>
											<li>{item.shedule_description}</li>
											{/* <li>{item.services.map(res=><li>{res.monobank}</li>)}</li> */}
											<li>{item.locality}</li>
											
										</ul>
									</div>
							  ))}
					</div>
				</div>
			);
		}
	}
}

export default CurrentBranch;

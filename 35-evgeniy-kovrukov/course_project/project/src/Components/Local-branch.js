import React from "react";


class LocalBranch extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			error: null,
			isLoaded: false,
			items: []
		};
		//this.items = this.items.bind(this);
	}
   // function toFlat(array){
      
   // }

  // const arr = new flatMap()
	componentDidMount() {
		fetch("/api/branches" , {method: 'POST', locality: "Київ"})
		//request.post('/api/branches/220').send({"locality":"Київ"})
			.then(response => response.json())
			.then(
				result => {
					this.setState({
						isLoaded: true,
						items: result
					});
					console.log("Logged output: LocalBranch -> componentDidMount -> this.setState", this.setState)
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
			console.log("lolol",items, error.message);
			return <div>Ошибка: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Загрузка...</div>;
		} else {
			return (
				<div>
					<h1>Local</h1>
					<div>
						{items.status == 0
							? "Loading branches..."
							: items.result.map(item => (
									<div key={item.name}>
										<ul style={{ listStyle: "none" }}>
											<li>{item.description}</li>
											<li>{item.adress}</li>
											<li>{item.shedule_description}</li>
											<li>{item.locality}</li>
											{/* <li>{item.monobank}</li> */}
										</ul>
									</div>
							  ))}
					</div>
				</div>
			);
		}
	}
}

export default LocalBranch;

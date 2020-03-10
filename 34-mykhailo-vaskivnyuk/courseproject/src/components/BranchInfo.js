import React from "react";
// import parser from "../functions/parser";

const SERVICES = {
	monobank: 'Картка "MONOBANK"',
	["3mob"]: "3Mob",
	uplata: "Uplata"
};

class BranchInfo extends React.Component {

	getServices(services) {
		let array = [];
		for (let service in services) {
			if (services[service] && SERVICES[service])
				array.push(SERVICES[service]);
		}
		return array;
	}
	
	render() {

		dev_log.render(this);
		
		const data = this.props.branchInfo;
		//dev_log(data);
		// const head = (
		// 	<tr>
		// 		<th></th>
		// 		<th></th>
		// 	</tr>
		// );

		const body = [
			// <React.Profiler>
			(<tr key={"number"}>
				<td>Адреса</td><td>{data.number}</td>
			</tr>),
			(<tr key={"adress"}>
				<td>Навігація</td><td>{data.adress}</td>
			</tr>),
			(<tr key={"services"}>
				<td>Сервіси</td><td>{data.public.navigation_ua}</td>
			</tr>),  
			(<tr key={"shedule_description"}>
				<td>Графік роботи</td><td>Додаткові: {this.getServices(data.services).join("; ")}</td>
			</tr>),
			(<tr key={"max_weight"}>
				<td>Максимальна вага</td><td>{data.shedule_description}</td>
			</tr>),
			(<tr key={"lat_lng"}>
				<td>Координати</td><td>lat: {data.lat}; lng: {data.lat}</td>
			</tr>),
			// </React.Profiler>
		];
	

		return(
			<div className="row justify-content-center">
				<div className="tbl_branch">
					<table>
						{/* <thead>
							{head}
						</thead> */}
						<tbody>
							{body}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default BranchInfo;

// render() {
		
//     const branchInfo = this.props.branchInfo;
//     const divs = parser(branchInfo);

//     dev_log(divs);

//     return (
//         <div>
//             {divs}
//         </div>
//     );
// }
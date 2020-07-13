import React from "react";

interface Props {
	branchInfo: Data.Branch,
}

const SERVICES: Data.Services = {
	monobank: 'Картка "MONOBANK"',
	["3mob"]: "3Mob",
	uplata: "Uplata"
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

function BranchInfo(props: Props): React.ReactElement {
	const data = props.branchInfo;

	const body = [
		(<tr key={"number"}>
			<td>Номер</td><td>{data.number}</td>
		</tr>),
		(<tr key={"adress"}>
			<td>Адреса</td><td>{data.adress}</td>
		</tr>),
		(<tr key={"navigation"}>
			<td>Навігація</td><td>{data.public.navigation_ua}</td>
		</tr>),
		(<tr key={"shedule_description"}>
			<td>Графік роботи</td><td>{data.shedule_description}</td>
		</tr>),
		(<tr key={"services"}>
			<td>Сервіси</td><td>Додаткові: {getServices(data.services)}</td>
		</tr>),
		(<tr key={"max_weight"}>
			<td>Максимальна вага</td><td>{data.max_weight}</td>
		</tr>),
		(<tr key={"lat_lng"}>
			<td>Координати</td><td>lat: {data.lat}; lng: {data.lng}</td>
		</tr>)
	];

	return(
		<div className="row justify-content-center">
			<div className="tbl_branch">
				<table>
					<tbody>
						{body}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default BranchInfo;

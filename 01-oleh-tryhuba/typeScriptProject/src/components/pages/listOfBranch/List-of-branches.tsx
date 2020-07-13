import React, {FC, Fragment, ReactElement, useEffect, useState} from 'react';
import './ListOfBranch.scss'
import JustinApiService from "../../app/services/JustinApiService";
import ErrorIndicator from "../../errorIndicator/ErrorIndicator";
import Spiner from "../../spiner/Spiner";

const ListOfBranches = () => {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false);

	const [allbranch, setAllBranch] = useState([]);

	useEffect((): void => {
		updateService();
	}, [])

	const onBranchLoaded = (res: any): void => {
		setAllBranch({...res})
		setLoading(false)
	};

	const onError = (): void => {
		setError(true)
		setLoading(false)
	};

	const updateService = (): void => {
		new JustinApiService().getAllBranches()
		.then((branch) => onBranchLoaded(branch))
		.catch(onError)
	};

	const countries: Array<object> = Object.entries(allbranch);

	const listItems: Array<ReactElement<any, any>> = countries.map((value, index) =>
		<AllBranchess key={index} {...value} />
	);

	const errorMessage: ReactElement<any, any> | null = error ? <ErrorIndicator/> : null;
	const hasData: boolean = !(loading || error);
	const spinner: ReactElement<any, any> | null = loading ? <Spiner/> : null;
	let content: Array<ReactElement<any, any>> | null = hasData ? listItems : null;

	return (
		<Fragment>
			<h1>Список віддiлень</h1>
			<div className="tabs-holder">
				<div className="number">№</div>
				<div className="address">Адреса</div>
				<div className="navigation">Навігація</div>
				<div className="services">Сервіси</div>
				<div className="schedule">Графік</div>
			</div>
			{errorMessage}
			{spinner}
			{content}
		</Fragment>
	)
};

const AllBranchess: FC<any> = ({...props}) => {
	const {services, adress, shedule_description, number} = props[1];
	const navigation: string | null = props[1].public.navigation_ua;
	const servicesArray: Array<string> = [];
	const shedule_descriptionArray: Array<string> = shedule_description.split(',');
	for (const servicesKey in services) {
		if (services[servicesKey] === 1) {
			servicesArray.push(servicesKey)
		}
	}
	return (
		<div className="department-item">
			<div className="number">{number}</div>
			<div className="address">{adress}</div>
			<div className="navigation">{navigation}</div>
			<div className="services">
				{servicesArray.map((value: string) => <i key={value}>{value}</i>)}
			</div>
			<div className="schedule">
				{shedule_descriptionArray.map((value: string) => <p key={value}>{value}</p>)}
			</div>
		</div>
	)
}

export default ListOfBranches;
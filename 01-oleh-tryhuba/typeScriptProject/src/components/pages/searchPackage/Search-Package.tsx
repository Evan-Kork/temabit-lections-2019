import React, {FC, Fragment, useState} from 'react';
import {validate} from "class-validator";
import './searchPackage.scss'
import JustinApiService, {ITracking} from "../../app/services/JustinApiService";
import Spiner from "../../spiner/Spiner";
import {Invoice, Tracking} from "../../app/services/classes";
import {plainToClass} from "class-transformer";

const SearchPackage: FC = () => {

	const [loading, setLoading] = useState<boolean>(false)
	const [numberPackage, setNumberPackage] = useState<string>('')
	const [errorValid, setErrorValid] = useState<string>('')
	const [packages, setPackages] = useState<ITracking>({} as ITracking)

	// number 409781695

	const updateService = (num: string): void => {
		new JustinApiService().getTracking(num)
		.then((packag) => {
			setLoading(false);
			const ttn = new Invoice();
			ttn.package = numberPackage;
			validate(ttn).then(errors => {
				if (errors.length > 0) {
					errors.map(({constraints}) => {
						for (let error in constraints) {
							setErrorValid(constraints[error])
						}
					})
				} else {
					setPackages(packag)
					setErrorValid('')
					setNumberPackage('')
				}
			});
		})
		.catch((error) => console.log('errorMessage', error))
	};

	const showPackage = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			setLoading(true);
			updateService(numberPackage);
		}
	};

	return (
		<Fragment>
			<h1>Пошук Відправлення</h1>
			<input className="form-control mr-sm-2"
			       type="number"
			       value={numberPackage}
			       onChange={e => setNumberPackage(e.target.value)}
			       placeholder='введіть номер відправлення'
			       onKeyPress={showPackage}
			       aria-label="Search"/>
			<div className="error alert-danger m-1 ">{errorValid}</div>
			{loading ? <Spiner/> : null}
			{!loading ? <PackageView  {...packages}/> : null}
		</Fragment>
	)
};

const PackageView: FC<ITracking> = (packages: ITracking) => {

	let data = plainToClass(Tracking, packages);
	const {orderNumber, orderDescription, status} = data;

	return (
		<Fragment>
			<div className="aboutPackage">
				<div className="about_row orderNumber">Номер відправлення:<b> {orderNumber}</b></div>
				<div className="about_row orderDescription">Опис відправлення:<b> {orderDescription}</b></div>
				<div className="about_row date">Дата та час: <b>{data.orderNumber ? data.getDateTime() : null}</b></div>
				<div className="about_row status">Статус відправлення: <b>{status}</b></div>
			</div>
		</Fragment>
	)
};

export default SearchPackage;


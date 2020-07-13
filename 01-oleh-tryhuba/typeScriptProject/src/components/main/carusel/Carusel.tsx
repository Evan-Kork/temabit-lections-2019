import React, {FC, ReactComponentElement, useEffect, useState} from 'react';
import './carusel.scss'
import JustinApiService, {AllBranches} from '../../app/services/JustinApiService'
import Spiner from "../../spiner/Spiner";
import ErrorIndicator from "../../errorIndicator/ErrorIndicator";
import no from '../../../img/no-img.png'

const Carusel: FC = (props): ReactComponentElement<any> => {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false);

	const [branch, setBranch] = useState({
		adress: '',
		photos: [''],
		description: '',
		format: '',
		number: '',
		delivery_branch_id: '',
		lat: '',
		lng: '',
		locality: '',
		max_weight: '',
		public: [''],
		services: [],
		shedule_description: '',
		type: '',
	} as AllBranches);


	const updateService = (): void => {
		const count = Math.floor((Math.random() * 300) + 2)
		new JustinApiService().getOneBranch(count)
		.then((branch) => onBranchLoaded(branch))
		.catch(onError)
	};

	const onBranchLoaded = (res: AllBranches): void => {
		setBranch({
			adress: res.adress,
			photos: res.photos,
			description: res.description,
			format: res.format,
			number: res.number,
			delivery_branch_id: res.delivery_branch_id,
			lat: res.lat,
			lng: res.lng,
			locality: res.locality,
			max_weight: res.max_weight,
			public: res.public,
			services: res.services,
			shedule_description: res.shedule_description,
			type: res.type,
		})
		setLoading(false)
	};

	const onError = (): void => {
		setError(true)
		setLoading(false)
	};

	useEffect(() => {
		updateService();
	}, [])


	const nextBrunch = (e: React.MouseEvent<HTMLButtonElement>) => {
		setLoading(true);
		updateService();
	}

	const errorMessage = error ? <ErrorIndicator/> : null;
	const hasData = !(loading || error);
	const spinner = loading ? <Spiner/> : null;
	const content = hasData ? <BranchView  {...branch}/> : null;

	return (
		<div className="carusel jumbotron rounded">
			<button onClick={nextBrunch}>next branch</button>
			{errorMessage}
			{spinner}
			{content}
		</div>
	)
}

const BranchView: FC<AllBranches> = (branch: AllBranches) => {
	const {
		format, description, adress, number, photos,
		locality, max_weight, lng, lat
	} = branch;
	return (
		<React.Fragment>
			<img className="carusel__image rounded" src={photos[0] ? photos[0] : no} alt=""/>
			<div className="description">
				<h4 className="description__title">{description}</h4>
				<p className="format">Тип відділення: {format}</p>
				<p className="number_branch">Номер відділення: №{number}</p>
				<p className="address_branch">Адреса відділення: {adress}</p>
				<p className="address_branch">locality: {locality}</p>
				<p className="address_branch">lat: {lat}</p>
				<p className="address_branch">lng: {lng}</p>
				<p className="address_branch">max_weight: {max_weight}</p>
			</div>
		</React.Fragment>
	)
};

export default Carusel;
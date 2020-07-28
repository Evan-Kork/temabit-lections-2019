import React, {FC, ReactElement, useCallback, useEffect, useState} from 'react';
import './carusel.scss'
import JustinApiService, {AllBranches} from '../../app/services/JustinApiService'
import Spiner from "../../spiner/Spiner";
import ErrorIndicator from "../../errorIndicator/ErrorIndicator";
import no from '../../../img/no-img.png'

const currentState = () => ({} as AllBranches)
const justinApiService = new JustinApiService();

const Carusel: FC = (): ReactElement => {

	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const [branch, setBranch] = useState(currentState)

	const updateService = useCallback(() => {
		setError(false)
		justinApiService.getAllBranches()
		.then(res => Math.floor((Math.random() * res.length) + 1))
		.then(count => {
			justinApiService.getOneBranch(count)
			.then((branch) => {
				setBranch(branch)
				setLoading(false)
			})
			.catch(onError)
		})
	}, []);

	const onError = useCallback(() => {
		setError(true)
		setLoading(false)
	}, []);


	useEffect(() => {
		updateService();
	}, [])

	const nextBrunch = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
		setLoading(true);
		updateService();
	}, []);

	const errorMessage: ReactElement | null = error ? <ErrorIndicator/> : null;
	const hasData: boolean = !(loading || error);
	const spinner: ReactElement | null = loading ? <Spiner/> : null;
	const content: ReactElement | null = hasData ? <BranchView  {...branch}/> : null;

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
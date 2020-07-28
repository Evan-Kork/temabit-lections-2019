import {AllBranches, ResultType, Tracking} from "./classes";

export default class JustinApiService {

	private _apiBase: string = `http://openapi.justin.ua`;

	getResponce = async (url: string) => {
		const proxyurl: string = "https://cors-anywhere.herokuapp.com/";
		const result = await fetch(`${proxyurl}${this._apiBase}/${url}`);
		if (!result.ok) {
			throw new Error(`Could not fetch ${url}, received ${result.status} `)
		}
		return await result.json();
	};

	//Запит для отримання інформації всіх відділень
	getAllBranches = async (): Promise<Array<AllBranches>> => {
		const res = await this.getResponce(`/branches/`);
		return res.result.map(this._transformBranch);
	};

	//Запит для отримання інформації про відділення в населеному пункті (підтримує багатомовність):
	getAllBranchLocality = async (city: string): Promise<ResultType> => {
		return await this.getResponce(`/branches/?locality=${city}`);
	};

	//Запит для отримання інформації одного відділення:
	getOneBranch = async (id: number): Promise<AllBranches> => {
		const branch = await this.getResponce(`/branches/${id}`);
		return this._transformBranch(branch.result[0]);
	};

	//Метод дозволяє отримати інформацію про типи відділень
	getTypesInfo = async (): Promise<ResultType> => {
		return await this.getResponce(`/branch_types`)
	};

	//Метод дозволяє отримати інформацію про найближчі відділення до вказаної адреси
	getOneNearestBranch = async (id: number): Promise<ResultType> => {
		return await this.getResponce(`/branches_locator/${id}`);
	};

	//Метод дозволяє отримати інформацію про відправлення
	getTracking = async (numOrder: string): Promise<Tracking> => {
		return await this.getResponce(`/tracking/${numOrder}`).then(res => res.result ? res.result[0] : []);
	};

	//Метод дозволяє отримати історію руху відправлення
	getTrackingHistory = async (numOrder: number): Promise<ResultType> => {
		return await this.getResponce(`/tracking_history/${numOrder}`);
	};

	//Метод дозволяє отримати інформацію про населені пункти
	getInfoLocation = async (): Promise<ResultType> => {
		return await this.getResponce(`/localities`);
	};

	//Запит на отримання інформації про населені пункти в яких на даний момент працюють відділення
	getInfoLocationActive = async (): Promise<ResultType> => {
		return await this.getResponce(`/localities/activity`);
	};

	getServices = async (): Promise<ResultType> => {
		return await this.getResponce(`/services`);
	};

	private _transformBranch = (branch: AllBranches): AllBranches => {
		return {...branch}
	}
}

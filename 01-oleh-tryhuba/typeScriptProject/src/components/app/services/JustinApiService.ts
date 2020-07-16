import {classToPlain, plainToClass} from 'class-transformer'

//	Масив із публічною інформацією про філіал та навігацією різними мовами
interface Navigation {
	navigation_en: string
	navigation_ru: string
	navigation_ua: string
}

export interface AllBranches {
	number: string //	Номер відділення
	adress: string //	Адреса відділення
	locality: string //	Місто
	type: string //	Тип філіалу
	format: string //	Тип відділення
	delivery_branch_id: string //	Ідентифікатор відділення (може бути використано для API JustIn)
	max_weight: string //	Максимальна вага одного відправлення на відділенні (кг)
	lat: string //	Широта
	lng: string //	Довгота
	description: string //	Опис відділення
	shedule_description: string //	Опис розкладу роботи
	photos: Array<string> //	Масив із посиланням на публічні зображення філіалу
	services: Array<number> //	Масив із відміткою про доступні сервіси на філіалі (1 - доступний, 0 - недоступний). Детальніше в пункті "Інформація про доступні сервіси"
	public: Navigation
}

interface resultType {
	msg: string | null,
	result: Array<AllBranches>,
	status: number
}

interface resultTypeTrack {
	msg: string | null,
	result: ITracking,
	status: number
}

export interface ITracking {
	orderNumber: string //	Номер відправлення
	orderDescription: string //	Опис відправлення
	date: string //	Дата
	time: string //	Час
	status: string //	Статус відправлення
	departmentNumber: string //	Відділення (вказано, якщо відправлення знаходиться на відділенні)
	departmentAdress: string //	Адреса відділення (вказано, якщо відправлення знаходиться на відділенні)
}

class Tracking {
	// orderNumber: number
	// orderDescription:	string
	// time:	string
	// status:	string
	// departmentNumber:	string
	// departmentAdress:	string
	//
}

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
	getAllBranchLocality = async (city: string): Promise<resultType> => {
		return await this.getResponce(`/branches/?locality=${city}`);
	};

	//Запит для отримання інформації одного відділення:
	getOneBranch = async (id: number): Promise<AllBranches> => {
		const branch = await this.getResponce(`/branches/${id}`);
		return this._transformBranch(branch.result[0]);
	};

	//Метод дозволяє отримати інформацію про типи відділень
	getTypesInfo = async (): Promise<resultType> => {
		return await this.getResponce(`/branch_types`)
	};

	//Метод дозволяє отримати інформацію про найближчі відділення до вказаної адреси
	getOneNearestBranch = async (id: number): Promise<resultType> => {
		return await this.getResponce(`/branches_locator/${id}`);
	};

	//Метод дозволяє отримати інформацію про відправлення
	getTracking = async (numOrder: string): Promise<ITracking>  => {
		return await this.getResponce(`/tracking/${numOrder}`).then(res => res.result ? res.result[0] : []);
	};

	//Метод дозволяє отримати історію руху відправлення
	getTrackingHistory = async (numOrder: number): Promise<resultType> => {
		return await this.getResponce(`/tracking_history/${numOrder}`);
	};

	//Метод дозволяє отримати інформацію про населені пункти
	getInfoLocation = async (): Promise<resultType> => {
		return await this.getResponce(`/localities`);
	};

	//Запит на отримання інформації про населені пункти в яких на даний момент працюють відділення
	getInfoLocationActive = async (): Promise<resultType> => {
		return await this.getResponce(`/localities/activity`);
	};

	getServices = async (): Promise<resultType> => {
		return await this.getResponce(`/services`);
	};

	private _transformBranch = (branch: AllBranches): AllBranches => {
		return {...branch}
	}
}

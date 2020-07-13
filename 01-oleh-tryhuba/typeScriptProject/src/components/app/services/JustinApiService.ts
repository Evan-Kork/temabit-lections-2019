interface tracking {
	orderNumber: string //	Номер відправлення
	orderDescription: string //	Опис відправлення
	date: string //	Дата
	time: string //	Час
	status: string //	Статус відправлення
	departmentNumber: string //	Відділення (вказано, якщо відправлення знаходиться на відділенні)
	departmentAdress: string //	Адреса відділення (вказано, якщо відправлення знаходиться на відділенні)
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
	public: Array<string> //	Масив із публічною інформацією про філіал та навігацією різними мовами
}

export interface IBranch {
	description: string,
	adress: string,
	number: string,
	photos: Array<string>,
	format: string,
}

type resultType = {
	msg: string | null,
	result: Array<any>,
	status: number
}


export default class JustinApiService {

	_apiBase: string = `http://openapi.justin.ua`;

	getResponce = async (url: string): Promise<resultType> => {
		const proxyurl: string = "https://cors-anywhere.herokuapp.com/";
		const result = await fetch(`${proxyurl}${this._apiBase}/${url}`);
		if (!result.ok) {
			throw new Error(`Could not fetch ${url}, received ${result.status} `)
		}
		return await result.json();
	};

	//Запит для отримання інформації всіх відділень
	getAllBranches = async (): Promise<any> => {
		const res = await this.getResponce(`/branches/`);
		return res.result.map(this._transformBranch);
	};

	//Запит для отримання інформації про відділення в населеному пункті (підтримує багатомовність):
	getAllBranchLocality = async (city: string) => {
		const res = await this.getResponce(`/branches/?locality=${city}`);
		return res.result;
	};

	//Запит для отримання інформації одного відділення:
	getOneBranch = async (id: number): Promise<any> => {
		const branch = await this.getResponce(`/branches/${id}`);
		return this._transformBranch(branch.result[0]);
	};

	//Метод дозволяє отримати інформацію про типи відділен   ь
	getTypesInfo = async () => {
		const res = await this.getResponce(`/branch_types`);
		return res.result;
	};

	//Метод дозволяє отримати інформацію про найближчі відділення до вказаної адреси
	getOneNearestBranch = async (id: number) => {
		const res = await this.getResponce(`/branches_locator/${id}`);
		return res.result;
	};

	//Метод дозволяє отримати інформацію про відправлення
	getTracking = async (numOrder: number): Promise<tracking> => {
		const res = await this.getResponce(`/tracking/${numOrder}`);
		return res.result[0];
	};

	//Метод дозволяє отримати історію руху відправлення
	getTrackingHistory = async (numOrder: number) => {
		const res = await this.getResponce(`/tracking_history/${numOrder}`);
		return res.result;
	};

	//Метод дозволяє отримати інформацію про населені пункти
	getInfoLocation = async () => {
		const res = await this.getResponce(`/localities`);
		return res.result;
	};

	//Запит на отримання інформації про населені пункти в яких на даний момент працюють відділення
	getInfoLocationActive = async () => {
		const res = await this.getResponce(`/localities/activity`);
		return res.result;
	};

	getServices = async () => {
		const res = await this.getResponce(`/services`);
		return res.result;
	};

	_transformBranch = (branch: IBranch): IBranch => {
		return {...branch}
	}
}

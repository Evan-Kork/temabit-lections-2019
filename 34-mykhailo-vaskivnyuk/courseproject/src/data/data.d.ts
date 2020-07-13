declare namespace Data {
	interface Page {
		id: number;
		link: string;
		text: string;
	}

	type Pages = Page[];

	interface Menu {
		list: Pages;
		selected: Page;
	}

	interface Responses {
		branches: BranchesData,
		localities: LocalitiesData,
	}

	interface BranchesData {
		data: Branches,
		error: Error,
	}

	interface LocalitiesData {
		data: Localities,
		error: Error,
	}

	type Branches = Branch[];

	type Localities = Locality[];

	interface Branch {
		delivery_branch_id: number,
		number: number,
		adress: string,
		public: {
			navigation_ua: string,
		},
		shedule_description: string,
		services: Services,
		lat: number,
		lng: number,
		max_weight: number,
		photos: string[],
		locality: string,
	}

	interface Locality {
		SCOATOU: number,
		title_ua: string,
	}

	interface TrackingData {
		data: TrackingInfo[],
		error: Error,
	}
	
	interface TrackingInfo {
		orderNumber: number,
		status: string,
		date: string,
		time: string,
		orderDescription: string,
		departmentNumber: number,
		departmentAdress: string,
	}

	interface TrackingHistoryData {
		data: TrackingHistoryInfo[],
		error: Error,
	}
	
	interface TrackingHistoryInfo {
		status: string,
		date: string,
		time: string,
	}

	type StatusesNames = 'ready' | 'going' | 'on_branch' | 'taken';

	type ServicesNames = 'monobank' | '3mob' | 'uplata';

	type Services = { [Service in ServicesNames]: string; };

	type NewsTypes = 'all' | 'promotion' | 'company_news';

	interface State {
		menu: Menu;
		test: string;
		responses: Responses;
	}
}

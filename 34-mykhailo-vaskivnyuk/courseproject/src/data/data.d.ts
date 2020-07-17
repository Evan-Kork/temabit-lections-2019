declare namespace Data {
    interface State {
        menu: Menu;
        test: string;
        responses: Responses;
    }

    /*--------------------------
    /          MENU
    /-------------------------*/

    interface Menu {
        list: Pages;
        selected: Page;
    }

    interface Page {
        id: number;
        link: string;
        text: string;
    }

    type Pages = Page[];

    /*--------------------------
    /         RESPONSES
    /-------------------------*/

    interface Responses {
        branches: BranchesData,
        localities: LocalitiesData,
    }

    // type Response = { [K in keyof Responses]: Responses[K] }[keyof Responses];
    type Response<B extends Branch = BranchClass> =
        | BranchesData<B>
        | LocalitiesData
        | TrackingHistoryData
        | TrackingData;

    interface BranchesData<B extends Branch = BranchClass> {
        data: Branches<B>,
        error: Error,
    }

    interface LocalitiesData {
        data: Localities,
        error: Error,
    }

    type Branches<B extends Branch = BranchClass> = B[];

    class Branch {
        delivery_branch_id: number;
        number: number;
        adress: string;
        public: {
            navigation_ua: string,
        };
        shedule_description: string;
        services: Data.Services;
        lat: number;
        lng: number;
        max_weight: number;
        photos: string[];
        locality: string;
    }

    class BranchClass extends Branch {
        readonly navigation_ua: string;
        readonly lat_lng: string;
    }

    type ServicesNames = keyof Services;

    interface Services {
        monobank: string,
        ['3mob']: string,
        uplata: string,
    }

    type Localities = Locality[];

    class Locality {
        SCOATOU: string;
        title_ua: string;
    }

    /*--------------------------
    /         TRACKING
    /-------------------------*/

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
    
    type Statuses = {
        [Status in Data.StatusesNames]: {
            img: string,
            text: string,
        }
    };
    
    /*--------------------------
    /          NEWS
    /-------------------------*/

    type NewsTypes = 'all' | 'promotion' | 'company_news';

    interface NewsItem {
        id: number,
        type: NewsTypes,
        img: string,
        title: string,
        date: string,
        description: string,
    }

    type News = NewsItem[];

    /*--------------------------
    /          API
    /-------------------------*/

    interface MethodsAPI {
        [Method: string]: {
            name: string,
            request: string,
        },
    }
}

declare namespace Data {
    export interface State {
        menu: Menu;
        test: string;
        responses: Responses;
    }

    //----- MUNU ---------------
    export interface Menu {
        list: Pages;
        selected: Page;
    }

    export interface Page {
        id: number;
        link: string;
        text: string;
    }

    export type Pages = Page[];

    //----- RESPONSES ----------
    export interface Responses<B extends Branch = BranchClass> {
        branches: BranchesData<B>,
        localities: LocalitiesData,
    }

    // export type Response = { [K in keyof Responses]: Responses[K] }[keyof Responses];
    export type Response =
        | BranchesData<Branch>
        | LocalitiesData;

    export interface BranchesData<B extends Branch = BranchClass> {
        data: Branches<B>,
        error: Error,
    }

    export interface LocalitiesData {
        data: Localities,
        error: Error,
    }

    export type Branches<B extends Branch = BranchClass> = B[];

    export class Branch {
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

    export class BranchClass extends Branch {
        readonly navigation_ua: string;
    }

    export type Localities = Locality[];

    export class Locality {
        SCOATOU: string;
        title_ua: string;
    }

    //----- OTHES -------------
    export interface TrackingData {
        data: TrackingInfo[],
        error: Error,
    }

    export interface TrackingInfo {
        orderNumber: number,
        status: string,
        date: string,
        time: string,
        orderDescription: string,
        departmentNumber: number,
        departmentAdress: string,
    }

    export interface TrackingHistoryData {
        data: TrackingHistoryInfo[],
        error: Error,
    }

    export interface TrackingHistoryInfo {
        status: string,
        date: string,
        time: string,
    }

    export type StatusesNames = 'ready' | 'going' | 'on_branch' | 'taken';

    export type NewsTypes = 'all' | 'promotion' | 'company_news';

    export interface NewsItem {
        id: number,
        type: NewsTypes,
        img: string,
        title: string,
        date: string,
        description: string,
    }

    export type News = NewsItem[];

    export interface MethodsAPI {
        [Method: string]: {
            name: string,
            request: string,
        },
    }

    export type ServicesNames = 'monobank' | '3mob' | 'uplata';

    export type Services = { [Service in ServicesNames]: string; };
}

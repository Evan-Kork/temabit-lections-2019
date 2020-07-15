import {
    validate, validateOrReject,
    Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max} from "class-validator";

export class Branch {
        delivery_branch_id: number;
        @IsInt()
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
    get navigation_ua() {
        return this.public.navigation_ua;
    }
}

export class Locality {
    SCOATOU: string;
    title_ua: string;
}

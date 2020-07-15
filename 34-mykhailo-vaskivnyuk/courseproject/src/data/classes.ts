import {
    validate, validateOrReject,
    Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max} from "class-validator";

export class _Branch implements Data.Branch {
    delivery_branch_id: null;

    @IsInt()
    number: null;
    
    adress: null;
    public: {
        navigation_ua: null,
    };
    shedule_description: null;
    services: null;
    lat: null;
    lng: null;
    max_weight: null;
    photos: null;
    locality: null;

    get navigation_ua() {
        return this.public.navigation_ua;
    }
}

export class _Locality implements Data.Locality{
    SCOATOU: null;
    title_ua: null;
}

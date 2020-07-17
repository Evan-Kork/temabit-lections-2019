import {
    validate, validateOrReject,
    Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max} from "class-validator";
import { getServices } from "../functions/helpers";

export class Branch {
    delivery_branch_id: number;
    @Length(1, 3)
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

    get lat_lng() {
        return `lat: ${this.lat}; lng: ${this.lng}`;
    }

    get strServices(): string {
        return getServices(this.services);
    }
}

export class Locality {
    SCOATOU: string;
    title_ua: string;
}

/*-------------------------------------------------------------------------------------

// https://medium.com/devschacht/a-minimal-guide-to-ecmascript-decorators-c7348f61ba24
function myDecorator(target: any, property: any, descriptor?: any) {
    // console.log(target);
    // console.log(property);
    if (!descriptor) return null;
    // console.log(descriptor);
    return {...descriptor};
}

function myClassDecorator(target: any) {
    // console.log(target);
}

-------------------------------------------------------------------------------------*/
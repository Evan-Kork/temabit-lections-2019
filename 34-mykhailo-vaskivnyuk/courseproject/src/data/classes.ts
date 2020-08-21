import { Expose, Transform } from "class-transformer";
import { IsNumberString, Matches } from "class-validator";
import { getServices } from "../functions/helpers";

const toNumber = (value: any): number => parseInt(value);
const regExp = /^[1-9]\d*$/;

export class Branch {
    @Transform(toNumber)
    @Expose() delivery_branch_id: number;

    @IsNumberString({ no_symbols: true })
    @Matches(regExp)
    @Expose() number: number;

    @Expose() adress: string;
    @Expose() public: {
        navigation_ua: string,
    };
    @Expose() shedule_description: string;
    @Expose() services: Data.Services;
    @Expose() lat: string;
    @Expose() lng: string;

    @Transform(toNumber)
    @Expose() max_weight: number;

    @Expose() photos: string[];
    @Expose() locality: string;
}

export class BranchClass extends Branch {
    get navigation_ua(): string {
        return this.public.navigation_ua;
    }

    get lat_lng(): string {
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
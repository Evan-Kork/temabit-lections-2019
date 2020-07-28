import {Exclude, Expose} from "class-transformer";
import {MaxLength, MinLength} from "class-validator";
import {ITracking} from "./JustinApiService";

@Exclude()
export class Tracking implements ITracking{
	@Expose() orderNumber: string;
	@Expose() orderDescription: string;
	@Expose() date: string;
	@Expose() time: string;
	@Expose() status: string;
	@Expose() departmentNumber: string;
	@Expose() departmentAdress: string;

	@Expose() getDateTime = () => ` ${this.date} ${this.time}`;
	@Expose() getDepartament = () => ` ${this.departmentNumber} ${this.departmentAdress}`;
}


export class Invoice {
	@MinLength(6, {
		message: " Invoice number is too short. Minimal length is 6 symbols "
	})
	@MaxLength(9, {
		message: " Invoice number is too long. Maximal length is 9 symbols "
	})
	package: string
}
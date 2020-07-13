// import { Type } from 'class-transformer';
import {
  IsInt,
  IsString,
  IsNumber,
  ValidateNested,
  IsLatitude,
  IsLongitude,
} from 'class-validator';

type BankDecriptionOptions =
  | 'alias'
  | 'category_service'
  | 'description_en'
  | 'description_ru'
  | 'description_ua'
  | 'name_en'
  | 'name_ru'
  | 'name_ua'
  | 'self_service'
  | 'send_service';

type BankNames =
  | 'monobank'
  | 'cardpay'
  | 'vending'
  | 'remittance'
  | 'fitting'
  | '3mob'
  | 'uplata'
  | 'joint';

type PublicDecription =
  | 'public_description_ru'
  | 'public_description_ua'
  | 'public_description_en'
  | 'navigation_ru'
  | 'navigation_ua'
  | 'navigation_en';

type Status = number;

type ServicesPresent = {
  [key in BankNames]: number;
};

export type Public = {
  [key in PublicDecription]: string;
};

export type BankDecription = {
  [key in BankDecriptionOptions]: string;
};

export type Bank = {
  [k in BankNames]?: BankDecription;
};

interface ServicesResp {
  status: Status;
  msg: Msg;
  result: Bank[];
}

interface Msg {
  code: number;
  ru: string;
  ua: string;
  en: string;
  result: null;
}

export interface ResultTTN {
  orderNumber: string;
  orderDescription: string;
  date: string;
  time: string;
  status: string;
  departmentNumber: string;
  departmentAdress: string;
}

export interface DepartmentTypes {
  short_name: string;
  description: string;
}

export interface Department {
  number: string;
  adress: string;
  locality: string;
  type: string;
  format: string;
  delivery_branch_id: string;
  max_weight: string;
  lat: string;
  lng: string;
  description: string;
  shedule_description: string;
  photos: string[];
  services: ServicesPresent;
  public: Public;
}

//-------------- export classes -------------------------------------------------------------------------------------
class Msg {
  @IsNumber()
  code: number;
  @IsString()
  ru: string;
  @IsString()
  ua: string;
  @IsString()
  en: string;
  result: null;
}

export class ResultTTN {
  @IsString()
  orderNumber: string;
  @IsString()
  orderDescription: string;
  @IsString()
  date: string;
  @IsString()
  time: string;
  @IsString()
  status: string;
  @IsString()
  departmentNumber: string;
  @IsString()
  departmentAdress: string;
}
export class Tracking {
  @IsInt()
  status: Status;

  @ValidateNested()
  msg: Msg | null;

  @ValidateNested()
  result?: ResultTTN[];
}

export class DepartmentTypes {
  @IsString()
  short_name: string;
  @IsString()
  description: string;
}
export class ResponseDepartmentsTypes {
  @IsInt()
  status: Status;

  @ValidateNested()
  msg: Msg | null;

  @ValidateNested()
  result: DepartmentTypes[];
}

export class Department {
  @IsString()
  number: string;
  @IsString()
  adress: string;
  @IsString()
  locality: string;
  @IsString()
  type: string;
  @IsString()
  format: string;
  @IsString()
  delivery_branch_id: string;
  @IsString()
  max_weight: string;
  @IsLatitude()
  lat: string;
  @IsLongitude()
  lng: string;
  @IsString()
  description: string;
  @IsString()
  shedule_description: string;
  @ValidateNested()
  photos: string[];

  @ValidateNested()
  services: ServicesPresent;      //--------------строкой

  @ValidateNested()
  public: Public;      //--------------строкой
}

export class DepartmentsAll {
  @IsInt()
  status: Status;

  @ValidateNested()
  msg: Msg;

  @ValidateNested()
  result: Department[];
}

export class ClosestDepartments extends DepartmentsAll {
  @IsNumber()
  distance: number;
}

export class ServicesResponse implements ServicesResp {
  @IsInt()
  status: Status;

  @ValidateNested()
  msg: Msg;

  @ValidateNested()
  result: Bank[];      //--------------строкой
}









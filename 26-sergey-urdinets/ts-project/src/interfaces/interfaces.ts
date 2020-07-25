import {
  IsInt,
  IsString,
  IsNumber,
  ValidateNested,
  IsLongitude,
  IsLatitude,
  IsEmpty,
} from 'class-validator';
import { DELIVERY_STATUS } from '../components/constants';
import { Type } from 'class-transformer';

type Status = number;

export type Public = {
  public_description_ru: string;
  public_description_ua: string;
  public_description_en: string;
  navigation_ru: string;
  navigation_ua: string;
  navigation_en: string;
};

interface ServicesResp {
  status: Status;
  msg: Msg | null;
  result: Bank[];
}

export interface Msg {
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
  status: DELIVERY_STATUS;
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

export class Msg implements Msg {
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
  status: DELIVERY_STATUS;
  @IsString()
  departmentNumber: string;
  @IsString()
  departmentAdress: string;
}

export class Tracking {
  @IsInt()
  status: Status;
  msg: Msg | null;

  @Type(() => ResultTTN)
  @ValidateNested()
  result?: ResultTTN[];
}

export class TrackingError {
  @IsInt()
  status: Status;

  @Type(() => ResultTTN)
  @ValidateNested()
  msg: Msg;
}

export class ResponseDepartmentsTypes {
  @IsInt()
  status: Status;

  @IsEmpty()
  msg: null;

  @Type(() => DepartmentTypes)
  @ValidateNested()
  result: DepartmentTypes[];
}

export class DepartmentTypes {
  @IsString()
  short_name: string;
  @IsString()
  description: string;
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
  photos: string[];

  @Type(() => ServicesPresent)
  @ValidateNested()
  services: ServicesPresent;

  @ValidateNested()
  public: Public;
}

class ServicesPresent {
  @IsInt()
  monobank: number;
  @IsInt()
  cardpay: number;
  @IsInt()
  vending: number;
  @IsInt()
  remittance: number;
  @IsInt()
  fitting: number;
  @IsInt()
  '3mob': number;
  @IsInt()
  uplata: number;
  @IsInt()
  joint: number;
}

export class DepartmentsAll {
  @IsInt()
  status: Status;

  @IsEmpty()
  msg: null;

  @Type(() => Department)
  @ValidateNested()
  result: Department[];
}

export class ClosestDepartments {
  @IsInt()
  status: Status;

  @IsEmpty()
  msg: null;

  @Type(() => Department)
  @ValidateNested()
  result: CloseDepartment[];
}
class CloseDepartment extends Department {
  @IsNumber()
  distance: number;
}

export class ServicesResponse implements ServicesResp {
  @IsInt()
  status: Status;
  
  @IsEmpty()
  msg: null;

  @Type(() => Bank)
  @ValidateNested()
  result: Bank[];
}

export class Bank {
  @ValidateNested()
  monobank?: BankDecription;
  @ValidateNested()
  cardpay?: BankDecription;
  @ValidateNested()
  vending?: BankDecription;
  @ValidateNested()
  remittance?: BankDecription;
  @ValidateNested()
  fitting?: BankDecription;
  @ValidateNested()
  '3mob'?: BankDecription;
  @ValidateNested()
  uplata?: BankDecription;
  @ValidateNested()
  joint?: BankDecription;
}

export class BankDecription {
  @IsString()
  alias: string;
  @IsString()
  category_service: string;
  @IsString()
  description_en: string;
  @IsString()
  description_ru: string;
  @IsString()
  description_ua: string;
  @IsString()
  name_en: string;
  @IsString()
  name_ru: string;
  @IsString()
  name_ua: string;
  @IsString()
  self_service: string;
  @IsString()
  send_service: string;
}

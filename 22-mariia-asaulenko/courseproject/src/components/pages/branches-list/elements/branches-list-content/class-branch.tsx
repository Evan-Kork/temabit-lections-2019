import * as React from 'react'
import { Exclude, Expose, Type } from "class-transformer";
import { IsInt, IsNumberString, IsString,ValidateNested, Min, Max, ArrayContains } from 'class-validator';

@Exclude()
export class dataBranch {
  @Expose()
  @IsNumberString()
  number: number;
  @Expose()
  @IsString()
  adress: string;
  @Expose()
  @IsString()
  format: string;
  @Expose()
  @IsNumberString()
  max_weight?: number;
  @Expose()
  @IsString()
  shedule_description?: string;

  @Expose()
  @ValidateNested({each: true})
  @Type(() => TypeService)
  services!: TypeService
  @Expose()
  @ValidateNested({each: true})
  @Type(() => Navigation)
  public?: Navigation

  getAdress = () => `${this.adress} ${this.format} (${this.max_weight})`
  getServices = () => <td className="text-capitalize"> 
                        <b>Додаткові:</b> 
                        {`картка ${Object.entries(this.services).
                        reduce((str, [key, value]) => value ? `${str} ${key},` : str, "")}`}
                      </td>
                      
  getNavigation = () => `${this.public?.navigation_ua}`
}

class TypeService {
  @IsInt()
  @Min(0)
  @Max(1)
  '3mob'?: number;
  @IsInt()
  @Min(0)
  @Max(1)
  cardpay?: number;
  @IsInt()
  @Min(0)
  @Max(1)
  fitting?: number;
  @IsInt()
  @Min(0)
  @Max(1)
  joint?: number;
  @IsInt()
  @Min(0)
  @Max(1)
  monobank?: number;
  @IsInt()
  @Min(0)
  @Max(1)
  remittance?: number;
  @IsInt()
  @Min(0)
  @Max(1)
  uplata?: number;
  @IsInt()
  @Min(0)
  @Max(1)
  vending?: number;
}
@Exclude()
class Navigation {
  @Expose()
  @IsString()
  navigation_ua?: string;
}

@Exclude()
export class dataArr {
  @Expose()
  @Type(() => dataBranch)
  @ValidateNested()
  result: dataBranch[]
}
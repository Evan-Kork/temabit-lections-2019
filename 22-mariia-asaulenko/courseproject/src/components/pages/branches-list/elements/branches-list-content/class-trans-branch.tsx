import * as React from 'react'
import { Exclude, Expose, Type } from "class-transformer";

@Exclude()
export class dataBranch {
  @Expose()
  number: number;
  @Expose()
  adress: string;
  @Expose()
  format: string;
  @Expose()
  max_weight?: number;
  @Expose()
  shedule_description?: string;

  @Expose()
  @Type(() => TypeService)
  services?: TypeService
  @Expose()
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
  '3mob'?: number;
  cardpay?: number;
  fitting?: number;
  joint?: number;
  monobank?: number;
  remittance?: number;
  uplata?: number;
  vending?: number;
}
@Exclude()
class Navigation {
  @Expose()
  navigation_ua?: string;
}

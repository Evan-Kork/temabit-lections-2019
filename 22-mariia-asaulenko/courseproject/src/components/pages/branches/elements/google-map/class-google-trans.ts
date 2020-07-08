import {Exclude, Expose, Type} from "class-transformer";
import "reflect-metadata";
import "es6-shim";


@Exclude()
export class GeoLocMarket {
  @Expose()
  number: number;
  @Expose()
  lat: number;
  @Expose()
  lng: number;
  @Expose()
  format?: string;
  @Expose()
  description?: string;
  @Expose()
  adress?: string;
  @Expose()
  shedule_description?: string;
  
  @Expose ()
  @Type(() => Navigation)
  public: Navigation;

  infoStringBranch = () => `${this.format} ${this.description} ${this.adress} ${this.shedule_description}
    Як знайти: ${this.public?.navigation_ua}`
};

@Exclude()
class Navigation {
  @Expose ()
  navigation_ua?: string;
};

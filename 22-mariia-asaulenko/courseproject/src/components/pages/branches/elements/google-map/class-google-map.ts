import { Exclude, Expose, Type } from 'class-transformer';
import { IsString, IsNumberString, ValidateNested} from 'class-validator';

@Exclude()
export class GeoLocMarket {
  @Expose()
  @IsNumberString()
  number: number;
  @Expose()
  @IsString()
  lat: string;
  @Expose()
  @IsString()
  lng: string;
  @Expose()
  @IsString()
  format?: string;
  @Expose()
  @IsString()
  description?: string;
  @Expose()
  @IsString()
  adress?: string;
  @Expose()
  @IsString()
  shedule_description?: string;
  
  @Expose ()
  @ValidateNested()
  @Type(() => Navigation)
  public: Navigation;

  infoStringBranch = () => `${this.format} ${this.description} ${this.adress} ${this.shedule_description}
    Як знайти: ${this.public?.navigation_ua}`
};

@Exclude()
class Navigation {
  @Expose ()
  @IsString()
  navigation_ua?: string;
};

export class geoLocation {
  @ValidateNested()
  @Type(()=>GeoLocMarket)
  result: GeoLocMarket[];
}
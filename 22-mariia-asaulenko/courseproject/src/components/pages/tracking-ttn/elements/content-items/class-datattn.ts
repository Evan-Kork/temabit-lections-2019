import { Exclude, Expose, Type } from "class-transformer";
import { IsString, MinLength, MaxLength, IsNumberString, ValidateNested, IsInt } from 'class-validator';
import "reflect-metadata";
import "es6-shim";
@Exclude()
export class DataTtn {
  @Expose()
  @IsString()
  date: string;
  @Expose()
  @IsString()
  departmentNumber: string ;
  @Expose()
  @IsString()
  departmentAdress: string;
  @Expose()
  @IsString()
  status: string;
}
export class Ttn {
  @IsNumberString()
  @MinLength(3, {
    message: "Номер ТТН має складатись більш ніж з 3 цифр"
  })
  @MaxLength(9, {
    message: "Номер ТТН має складатись не більше ніж 9 цифр"
  })
  code: string;
  constraints?: Object
}

export class ValDataTtn {
  @ValidateNested()
  @Type(() => DataTtn)
  result: DataTtn[];
}
import { IsNumberString, MinLength, MaxLength } from "class-validator";

export class Ttn {
    @IsNumberString()
    @MinLength(3, {
      message: "Номер ТТН має складатись більш ніж з 3 цифр"
    })
    @MaxLength(9, {
      message: "Номер ТТН має складатись не більше ніж 9 символів"
    })
    code: string;
  
    constraints?: Object
  }
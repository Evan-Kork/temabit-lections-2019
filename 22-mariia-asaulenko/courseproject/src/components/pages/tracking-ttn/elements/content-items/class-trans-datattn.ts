import { Exclude, Expose } from "class-transformer";

@Exclude()
export class DataTtn {
  @Expose()
  date: string;
  @Expose()
  departmentNumber: number;
  @Expose()
  departmentAdress: string;
  @Expose()
  status: string;
}
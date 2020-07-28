import {Expose} from "class-transformer";
import {IsInt, IsString, MaxLength, MinLength} from "class-validator";


//	Масив із публічною інформацією про філіал та навігацією різними мовами
interface INavigation {
	navigation_en: string
	navigation_ru: string
	navigation_ua: string
}
interface IBranches {
	number: string //	Номер відділення
	adress: string //	Адреса відділення
	locality: string //	Місто
	type: string //	Тип філіалу
	format: string //	Тип відділення
	delivery_branch_id: string //	Ідентифікатор відділення (може бути використано для API JustIn)
	max_weight: string //	Максимальна вага одного відправлення на відділенні (кг)
	lat: string //	Широта
	lng: string //	Довгота
	description: string //	Опис відділення
	shedule_description: string //	Опис розкладу роботи
	photos: Array<string> //	Масив із посиланням на публічні зображення філіалу
	services: Array<number> //	Масив із відміткою про доступні сервіси на філіалі (1 - доступний, 0 - недоступний). Детальніше в пункті "Інформація про доступні сервіси"
	public: Navigation
}
interface IResultType {
	msg: string | null,
	result: Array<AllBranches>,
	status: number
}

interface ITracking {
	orderNumber: string //	Номер відправлення
	orderDescription: string //	Опис відправлення
	date: string //	Дата
	time: string //	Час
	status: string //	Статус відправлення
	departmentNumber: string //	Відділення (вказано, якщо відправлення знаходиться на відділенні)
	departmentAdress: string //	Адреса відділення (вказано, якщо відправлення знаходиться на відділенні)
}

export class Navigation implements INavigation{
	@IsString()
	navigation_en: string
	@IsString()
	navigation_ru: string
	@IsString()
	navigation_ua: string
}

export class AllBranches implements IBranches {
	@IsString()
	number: string
	@IsString()
	adress: string
	@IsString()
	locality: string
	@IsString()
	type: string
	@IsString()
	format: string
	@IsString()
	delivery_branch_id: string
	@IsString()
	max_weight: string
	@IsString()
	lat: string
	@IsString()
	lng: string
	@IsString()
	shedule_description: string
	photos: Array<string>
	services: Array<number>
	public: Navigation
	@IsString()
	description: string
}

export class ResultType implements IResultType {

	result: Array<AllBranches>;
	@IsInt()
	status: number
	msg: string | null;

}

export class Tracking implements ITracking {
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
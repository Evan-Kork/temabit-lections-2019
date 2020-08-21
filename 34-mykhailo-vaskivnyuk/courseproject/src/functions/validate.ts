import { validateSync, ValidationError } from "class-validator";
import { plainToClass } from "class-transformer";
import { BranchClass } from '../data/classes';

export function validateResponse(res: Data.BranchesData<Data.Branch>): Data.BranchesData {
    const errors: Array<ValidationError[]> = [];
    let { data, error } = res;
    if (error) return { data: null, error };
    let branches = plainToClass(BranchClass, data, {
        excludeExtraneousValues: true,
        enableImplicitConversion: false,
    });
    for (const branch of branches) {
        const e = validateSync(branch);
        if(e.length) {
            errors.push(e);
            console.log(e);
            break;
        }
    }
    if (errors.length) {
        branches = null;
        error = new Error("Невідповідні дані:\n" + JSON.stringify(errors[0]));
    }
    return { data: branches, error };
}

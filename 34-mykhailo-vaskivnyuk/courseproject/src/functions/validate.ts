import { validate, ValidationError } from "class-validator";
import { plainToClass } from "class-transformer";
import { BranchClass } from '../data/classes';

export async function validateResponse(res: Data.BranchesData<Data.Branch>): Promise<Data.BranchesData> {
    const errors: Array<ValidationError[]> = [];
    let { data, error } = res;
    if (error) return { data: null, error };
    let branches = plainToClass(BranchClass, data, {
        excludeExtraneousValues: true,
        enableImplicitConversion: false,
    });
    console.log(branches);
    for await(const branch of branches) {
        validate(branch)
        .then(e => {
            e.length && errors.push(e);
        });
    }
    if (errors.length) {
        branches = null;
        error = new Error("Невідповідні дані!");
    }
    return { data: branches, error };
}

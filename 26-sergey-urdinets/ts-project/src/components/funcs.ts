import { validateOrReject } from 'class-validator';







export function validateLog<T>(obj: T): void {
  validateOrReject(obj, {  skipMissingProperties : true  }).catch((errors) => {
    console.log('Promise rejected (validation failed). Errors: ', errors);
  });
}
import { TOGGLE_ASSIDE } from '../constans';

export function actionAsside(status){
    return {
        type: TOGGLE_ASSIDE,
        status
    }
}
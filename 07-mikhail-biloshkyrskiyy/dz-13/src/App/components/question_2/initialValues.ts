import * as Yup from 'yup'

import { iField } from '~interface/iField'
import { iFibonacci } from '~interface/iFibonacci'

export const field:iField[] = [{"name":"fibonacci", "type":"number"}]

export const initialValues: iFibonacci = {
    fibonacci: 0
}

export const Schema = Yup.object().shape({
    fibonacci: Yup.number()
        .default(0)
        .notRequired(),
})
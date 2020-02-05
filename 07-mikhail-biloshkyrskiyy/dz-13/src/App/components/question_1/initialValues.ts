import * as Yup from 'yup'

import { iField } from '~interface/iField'
import { iMultiple } from '~interface/iMultiple'

export const field:iField[] = [
    {"name":"first", "type":"text"},
    {"name":"second", "type":"text"}]

export const initialValues: iMultiple = {
    first: [],
    second: []
}

export const Schema = Yup.object().shape({
    first: Yup.string()
        .max(50)
        .default([])
        .notRequired(),
    second: Yup.string()
        .max(50)
        .default([])
        .notRequired(),
})
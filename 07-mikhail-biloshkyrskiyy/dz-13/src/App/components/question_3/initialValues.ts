import * as Yup from 'yup'

import { iField } from '~interface/iField'
import { iMultipleCached } from '~interface/iMultipleCached'

export const field:iField[] = [
    {"name":"first", "type":"text"},
    {"name":"second", "type":"text"},
    {"name":"third", "type":"text"}]

export const initialValues: iMultipleCached = {
    first: [],
    second: [],
    third: []
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
    third: Yup.string()
        .max(50)
        .default([])
        .notRequired(),
})
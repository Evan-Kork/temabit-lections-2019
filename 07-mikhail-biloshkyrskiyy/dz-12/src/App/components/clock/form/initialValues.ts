import * as Yup from 'yup'

import { iClock } from '~interface/iClock'

export const initialValues: iClock = {
    seconds: 0,
    minutes: 0,
    hour: 0,
    date: 1,
    month: 1,
    year: 1970
}

export const Schema = Yup.object().shape({
    seconds: Yup.number()
        .default(0)
        .notRequired(),
    minutes: Yup.number()
        .default(0)
        .notRequired(),
    hour: Yup.number()
        .default(0)
        .notRequired(),
    date: Yup.number()
        .default(1)
        .notRequired(),
    month: Yup.number()
        .default(1)
        .notRequired(),
    year: Yup.number()
        .default(1970)
        .notRequired(),
})
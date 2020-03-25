import * as Yup from 'yup'

export const initialValues = {
    login: '',
    password: ''
}

export const Schema = Yup.object().shape({
    login: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Enter login'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Enter password')
})
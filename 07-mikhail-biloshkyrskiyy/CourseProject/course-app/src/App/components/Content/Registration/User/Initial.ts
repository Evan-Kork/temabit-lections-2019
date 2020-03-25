import * as Yup from 'yup'
import { iInput } from '@/interfaces/iInput'

export const initialValues = {
    login: '',
    password: '',
    comparisonPassword: '',
    email: '',
    phone: '',

    name: '',
    region: '',
    city: '',
    birthday: '',
    parcelDepartment: ''
}

export const filled: iInput[] = [
    { name: 'login', label: 'Login', type: 'text' },
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'comparisonPassword', label: 'Comparison Password', type: 'password' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'phone', label: 'Phone', type: 'phone' },
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'region', label: 'Region', type: 'region' },
    { name: 'city', label: 'City', type: 'city' },
    { name: 'birthday', label: 'Birthday', type: 'date' },
    { name: 'parcelDepartment', label: 'Parcel Department', type: 'department' },
]

export const Schema = Yup.object().shape({
    login: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Enter login'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Enter password'),
    comparisonPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], "Passwords don't match")
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Enter password'),
    email: Yup.string()
        .matches(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Not correctly entered email")
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Enter email'),
    phone: Yup.string()
        .matches(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/, "Not correctly entered phone")
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Enter phone'),
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Enter name'),
    birthday: Yup.string()
        .max(50, 'Too Long!')
        .required('Enter birthday'),
    region: Yup.string()
        .required('Enter region'),
    city: Yup.string()
        .required('Enter city'),
    parcelDepartment: Yup.string()
        .notRequired()
})
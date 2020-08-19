import * as Yup from 'yup'
import { iInput } from '@/interfaces/iInput'

export const initialValuesUser = {
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

export const initialValuesCompany = {
    login: '',
    password: '',
    comparisonPassword: '',
    email: '',
    phone: '',

    name: '',
    region: '',
    city: '',
    parcelDepartment: ''
}

export const fieldsUser: iInput[] = [
    { name: 'login', label: 'Login', type: 'text', page: 0 },
    { name: 'password', label: 'Password', type: 'password', page: 0 },
    { name: 'comparisonPassword', label: 'Comparison Password', type: 'password', page: 0 },
    { name: 'email', label: 'Email', type: 'email', page: 0 },
    { name: 'phone', label: 'Phone', type: 'phone', page: 0 },
    { name: 'name', label: 'Name', type: 'text', page: 1 },
    { name: 'region', label: 'Region', type: 'region', page: 1 },
    { name: 'city', label: 'City', type: 'city', page: 1 },
    { name: 'birthday', label: 'Birthday', type: 'date', page: 1 },
    { name: 'parcelDepartment', label: 'Parcel Department', type: 'department', page: 1 },
]

export const fieldsCompany: iInput[] = [
    { name: 'login', label: 'Login', type: 'text', page: 0 },
    { name: 'password', label: 'Password', type: 'password', page: 0 },
    { name: 'comparisonPassword', label: 'Comparison Password', type: 'password', page: 0 },
    { name: 'email', label: 'Email', type: 'email', page: 0 },
    { name: 'phone', label: 'Phone', type: 'phone', page: 0 },
    { name: 'name', label: 'Name Company', type: 'text', page: 1 },
    { name: 'region', label: 'Region', type: 'region', page: 1 },
    { name: 'city', label: 'City', type: 'city', page: 1 },
    { name: 'parcelDepartment', label: 'Parcel Department', type: 'department', page: 1 },
]

export const SchemaUser = Yup.object().shape({
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

export const SchemaCompany = Yup.object().shape({
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
    region: Yup.string()
        .required('Enter region'),
    city: Yup.string()
        .required('Enter city'),
    parcelDepartment: Yup.string()
        .notRequired()
})
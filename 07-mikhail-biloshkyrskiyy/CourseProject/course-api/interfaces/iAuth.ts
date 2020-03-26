import { AccessibilityType } from '@/enum/auth'

export interface iUser {
    id: string
    login: string
    password: string
    email: string
    phone: string
    name: string
    region: string
    city: string
    birthday: Date
    parcelDepartment: string
    accessibility: AccessibilityType
}

export interface iCompany {
    id: string
    login: string
    password: string
    email: string
    phone: string
    name: string
    region: string
    city: string
    parcelDepartment: string
    accessibility: AccessibilityType
}

export interface iLogin {
    login: string
    password: string
}

export interface iAuth {
    jwt: string
}
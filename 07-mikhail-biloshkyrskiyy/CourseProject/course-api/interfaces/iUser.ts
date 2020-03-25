import { UserAccessibilityEnum } from '@/enum/user'

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
    accessibility: UserAccessibilityEnum
}

export interface iLogin {
    login: string
    password: string
}

export interface iAuth {
    jwt: string
}
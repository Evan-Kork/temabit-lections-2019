export interface iUser {
    login: string
    password: string
    email: string
    phone: string
    name: string
    region: string
    city: string
    birthday: string
    parcelDepartment: string
    accessibility: string
}

export interface iCompany {
    login: string
    password: string
    email: string
    phone: string
    name: string
    region: string
    city: string
    parcelDepartment: string
    accessibility: string
}

export enum UserAccessibilityEnum {
    User,
    Moderator,
    Company,
    Administrator
}

export interface iLogin {
    email: string
    password: string
}

export interface iApiResult {
    message: string
    success: boolean
}
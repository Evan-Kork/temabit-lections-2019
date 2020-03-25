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

export enum UserAccessibilityEnum {
    User,
    Moderator,
    Administrator
}

export interface iAuth {
    jwt: string
}

export interface iLogin {
    login: string
    password: string
}

export interface iRegistrationResult {
    success: boolean
    message: string
}
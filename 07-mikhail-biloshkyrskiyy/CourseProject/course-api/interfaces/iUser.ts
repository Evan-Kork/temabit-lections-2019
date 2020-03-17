import { UserAccessibilityEnum } from '@/enum/user'

export interface iUser {
    id: string
    login: string
    accessibility: UserAccessibilityEnum
    password: string
    email: string
}
import { MenuType } from '@/enum/menu'

export interface iMenu {
    id: string
    title: string
    icon: string
    path: string
    typeMenu: MenuType
}
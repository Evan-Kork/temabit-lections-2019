import iMenu, { MenuType } from '@/interfaces/iMenu'
import gql from 'graphql-tag'

export interface MenuInvertoryData {
    menu: iMenu[]
}

export interface MenuInvertoryVars {
    type: MenuType;
}

export const GET_MENU_INVERTORY = gql`
    query ($type: EnumMenuType!){
        menu: getTypeMenu(type: $type) {
            title
            icon
            path
            typeMenu
        }
    }
`
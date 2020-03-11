import iMenu, { MenuType } from '@/interfaces/iMenu'
import gql from 'graphql-tag'

export interface MenuInvertoryData {
    menu: iMenu[]
}

export interface MenuInvertoryVars {
    typeMenu: MenuType;
}

export const GET_MENU_INVERTORY = gql`
    query($typeMenu: TypeMenuEnum){
        menu: getTypeMenu(typeMenu: $typeMenu) {
            title
            icon
            path
            availability
        }
    }
`
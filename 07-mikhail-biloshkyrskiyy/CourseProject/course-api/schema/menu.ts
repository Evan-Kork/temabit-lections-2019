import { gql } from 'apollo-server-express'
import { model } from 'mongoose'

import { MenuType as EnumMenuType } from '@/enum/menu'
import { iMenu } from '@/interfaces/iMenu'

import '@/models/menu'

const Menu = model('Menu')
const EnumMenuTypeGql = gql`
    enum EnumMenuType {
        Base,
        Declaration,
        Office,
        PrivateOffice
    }
`
export const MenuType = gql`
    ${EnumMenuTypeGql}

    type MenuType {
        id: String,
        title: String,
        icon: String,
        path: String,
        typeMenu: EnumMenuType
    }

    input AddMenu {
        id: String,
        title: String!,
        icon: String!,
        path: String!,
        typeMenu: EnumMenuType!
    }

    input UpdateMenu {
        id: String,
        title: String!,
        icon: String,
        path: String,
        typeMenu: EnumMenuType
    }
`

export const TypeDefsQuery = `
    menu: [MenuType],
    getTypeMenu(type: EnumMenuType!): [MenuType]
`

export const TypeDefsMutation = `
    addMenu(menu: AddMenu!): MenuType,
    removeMenu(id: String!): MenuType,
    updateMenu(menu: UpdateMenu!): MenuType
`

export const Query = {
    menu: () => Menu.find(),
    getTypeMenu: async (parent: any, args: { type: EnumMenuType }) => await Menu.find({ typeMenu: args.type })
}

export const Mutation = {
    addMenu: async (parent: any, args: { menu: iMenu }) => {
        if (await Menu.findOne({ title: args.menu.title }) === null) {
            const menu = new Menu({
                title: args.menu.title,
                icon: args.menu.icon,
                path: args.menu.path,
                typeMenu: args.menu.typeMenu
            })
            return menu.save()
        }
    },
    removeMenu: async (parent: any, args: { id: string }) => {
        return await Menu.findByIdAndRemove(args.id)
    },
    updateMenu: async (parent: any, args: { menu: iMenu }) => {
        return await Menu.findOneAndUpdate({ title: args.menu.title }, {
            $set: {
                title: args.menu.title,
                icon: args.menu.icon,
                path: args.menu.path,
                typeMenu: args.menu.typeMenu
            }
        }).setOptions({ omitUndefined: true })
    }
}
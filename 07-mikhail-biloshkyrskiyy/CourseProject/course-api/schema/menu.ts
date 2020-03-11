import { model } from 'mongoose'
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLList
} from 'graphql'

import { AvailabilityEnum, MenuEnum } from '@/enum/menu'
import '@/models/menu'
const Menu = model('Menu')

const MenuType = new GraphQLObjectType({
    name: 'Menu',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        title: {
            type: new GraphQLNonNull(GraphQLString)
        },
        icon: {
            type: new GraphQLNonNull(GraphQLString)
        },
        path: {
            type: GraphQLString
        },
        availability: {
            type: AvailabilityEnum
        },
        typeMenu: {
            type: MenuEnum
        }
    })
})

export const getTypeMenu = {
    type: new GraphQLList(MenuType),
    args: {
        typeMenu: {
            type: MenuEnum
        }
    },
    resolve(parent:any, args:any) {
        return Menu.find({
            typeMenu: args.typeMenu
        })
    }
}


export const getMenu = {
    type: new GraphQLList(MenuType),
    resolve(parent:any, args:any) {
        return Menu.find()
    }
}

export const addMenu = {
    type: MenuType,
    args: {
        title: {
            type: new GraphQLNonNull(GraphQLString)
        },
        icon: {
            type: new GraphQLNonNull(GraphQLString)
        },
        path: {
            type: GraphQLString
        },
        availability: {
            type: AvailabilityEnum
        },
        typeMenu: {
            type: MenuEnum
        }
    },
    async resolve(parent:any, args:any) {
        if (await Menu.findOne({ title: args.title }) === null) {
            const menu = new Menu({
                title: args.title,
                icon: args.icon,
                path: args.path,
                availability: args.availability,
                typeMenu: args.typeMenu
            })
            return menu.save()
        }
    }
}

export const removeMenu = {
    type: MenuType,
    args: {
        id: {
            type: GraphQLID
        }
    },
    async resolve(parent:any, args:any) {
        return await Menu.findByIdAndRemove(args.id)
    }
}

export const updateMenu = {
    type: MenuType,
    args: {
        title: {
            type: new GraphQLNonNull(GraphQLString)
        },
        icon: {
            type: GraphQLString
        },
        path: {
            type: GraphQLString
        },
        availability: {
            type: AvailabilityEnum
        },
        typeMenu: {
            type: MenuEnum
        }
    },
    async resolve(parent:any, args:any) {
        return await Menu.findOneAndUpdate({ title: args.title }, {
            $set: {
                title: args.title,
                icon: args.icon,
                path: args.path,
                availability: args.availability,
                typeMenu: args.typeMenu
            }
        }).setOptions({ omitUndefined: true })
    }
}
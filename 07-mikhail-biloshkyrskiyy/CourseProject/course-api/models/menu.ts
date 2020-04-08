import { Schema, model } from 'mongoose'

import { MenuType } from '@/enum/menu'

const MenuSchema = new Schema({
    title: {
        type: String,
        maxlength: 255,
        minlength: 3,
        required: true
    },
    icon: {
        type: String,
        maxlength: 255,
        minlength: 3,
        required: true
    },
    path: {
        type: String,
        maxlength: 255,
        minlength: 3,
        required: true
    },
    typeMenu: {
        type: MenuType,
        required: true
    }
})

model('Menu', MenuSchema)
import { Schema, model } from 'mongoose'

enum Availability {
    NoRegistrations = 'NoRegistrations',
    Registrations = 'Registrations'
}

enum MenuType {
    Base = 'Base',
    Declaration = 'Declaration',
    Office = 'Office'
}

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
    availability: {
        type: Availability,
        maxlength: 255,
        minlength: 3,
        required: true
    },
    typeMenu: {
        type: MenuType,
        maxlength: 255,
        minlength: 3,
        required: true
    }
})

model('Menu', MenuSchema)
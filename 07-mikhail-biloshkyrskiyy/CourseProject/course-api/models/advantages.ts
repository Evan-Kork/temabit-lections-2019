import { Schema, model } from 'mongoose'

const AdvantagesSchema = new Schema({
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
    text: {
        type: String,
        maxlength: 255,
        minlength: 3,
        required: true
    }
})

model('Advantages', AdvantagesSchema)
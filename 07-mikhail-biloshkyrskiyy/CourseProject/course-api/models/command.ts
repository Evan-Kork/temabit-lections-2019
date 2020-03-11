import { Schema, model } from 'mongoose'

const CommandSchema = new Schema({
    title: {
        type: String,
        maxlength: 255,
        minlength: 3,
        required: true
    },
    position: {
        type: String,
        maxlength: 255,
        minlength: 3,
        required: true
    },
    img: {
        type: String,
        maxlength: 255,
        minlength: 3,
        required: true
    }
})

model('Command', CommandSchema)
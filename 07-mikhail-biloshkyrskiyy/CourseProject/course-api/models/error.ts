import { Schema, model } from 'mongoose'

const ErrorSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

model('Error', ErrorSchema)
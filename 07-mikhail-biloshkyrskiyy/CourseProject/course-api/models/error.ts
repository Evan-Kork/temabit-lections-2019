import { Schema, model } from 'mongoose'

const ErrorSchema = new Schema({
    error: {
        type: String,
        required: true
    },
    errorInfo: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

model('Error', ErrorSchema)
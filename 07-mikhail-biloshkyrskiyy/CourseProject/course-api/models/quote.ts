import { Schema, model } from 'mongoose'

const QuoteSchema = new Schema({
    title: {
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

model('Quote', QuoteSchema)
import { Schema, model } from 'mongoose'

const SponsorSchema = new Schema({
    title: {
        type: String,
        maxlength: 255,
        minlength: 3,
        required: true
    },
    logotype: {
        type: String,
        maxlength: 255,
        minlength: 3,
        required: true
    },
    text: {
        type: String,
        maxlength: 255,
        minlength: 3
    }
})

model('Sponsor', SponsorSchema)
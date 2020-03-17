import { Schema, model } from 'mongoose'

enum AccessibilityType {
    User = 'User',
    Moderator = 'Moderator',
    Administrator = 'Administrator'
}

const UserSchema = new Schema({
    login: {
        type: String,
        maxlength: 255,
        minlength: 3,
        required: true
    },
    accessibility: {
        type: AccessibilityType,
        required: true
    },
    password: {
        type: String,
        maxlength: 255,
        minlength: 3,
        required: true
    },
    email: {
        type: String,
        maxlength: 255,
        minlength: 3,
        required: true
    }
})

model('User', UserSchema)
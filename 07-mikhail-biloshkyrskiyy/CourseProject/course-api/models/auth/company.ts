import { Schema, model } from 'mongoose'

import { AccessibilityType } from '@/enum/auth'

const CompanySchema = new Schema({
    login: {
        type: String,
        maxlength: 255,
        minlength: 3,
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
    },
    phone: {
        type: String,
        maxlength: 255,
        minlength: 3,
        required: true
    },
    name: {
        type: String,
        maxlength: 255,
        minlength: 3,
        required: true
    },
    region: {
        type: String
    },
    city: {
        type: String
    },
    parcelDepartment: {
        type: String
    },
    accessibility: {
        type: AccessibilityType,
        required: true
    }
})

model('Company', CompanySchema)
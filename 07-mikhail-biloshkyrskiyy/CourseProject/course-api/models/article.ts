import { Schema, model } from 'mongoose'

enum Article {
    Tariffs = 'Tariffs'
}

const ArticleSchema = new Schema({
    title: {
        type: String,
        maxlength: 255,
        minlength: 3,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    tags: {
        type: Array(String),
    },
    typeArticle: {
        type: Article,
        required: true
    }
})

model('Article', ArticleSchema)
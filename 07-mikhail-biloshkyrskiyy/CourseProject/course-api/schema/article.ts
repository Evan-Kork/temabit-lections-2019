import { gql } from 'apollo-server'
import { model } from 'mongoose'

import { iArticle } from '@/interfaces/iArticle'
import { ArticleType as EnumArticleType } from '@/enum/article'

import '@/models/article'
const Article = model('Article')

const EnumArticleTypeGql = gql`
    enum EnumArticleType {
        Tariffs
    }
`
export const ArticleType = gql`
    ${EnumArticleTypeGql}

    type ArticleType {
        id: String,
        title: String,
        text: String,
        tags: String,
        typeArticle: EnumArticleType
    }

    input AddArticle {
        id: String,
        title: String!,
        text: String!,
        tags: String!,
        typeArticle: EnumArticleType!
    }

    input UpdateArticle {
        id: String,
        title: String!,
        text: String,
        tags: String,
        typeArticle: EnumArticleType
    }
`

export const TypeDefsQuery = `
    article: [ArticleType],
    getTypeArticle(type: EnumArticleType!): [ArticleType]
`

export const TypeDefsMutation = `
    addArticle(article: AddArticle!): ArticleType,
    removeArticle(id: String!): ArticleType,
    updateArticle(article: UpdateArticle!): ArticleType
`

export const Query = {
    article: () => Article.find(),
    getTypeArticle: async (parent: any, args: { type: EnumArticleType }) => await Article.find({ typeArticle: args.type }),
}

export const Mutation = {
    addArticle: async (parent: any, args: { article: iArticle }) => {
        if (await Article.findOne({ title: args.article.title }) === null) {
            const article = new Article({
                title: args.article.title,
                text: args.article.text,
                tags: args.article.tags,
                typeArticle: args.article.typeArticle
            })
            return article.save()
        }
    },
    removeArticle: async (parent: any, args: { id: string }) => {
        return await Article.findByIdAndRemove(args.id)
    },
    updateArticle: async (parent: any, args: { article: iArticle }) => {
        return await Article.findOneAndUpdate({ title: args.article.title }, {
            $set: {
                title: args.article.title,
                text: args.article.text,
                tags: args.article.tags,
                typeArticle: args.article.typeArticle
            }
        }).setOptions({ omitUndefined: true })
    }
}
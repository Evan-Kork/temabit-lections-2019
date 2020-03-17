import { ArticleType } from '@/enum/article'

export interface iArticle {
    id: string
    title: string
    text: string
    tags: string
    typeArticle: ArticleType
}
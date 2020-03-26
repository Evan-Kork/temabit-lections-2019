import { gql } from 'apollo-server-express'
import { EnumAccessibilityTypeGql, TypeRegistrationResult } from '@/schema/auth'

import {
    MenuType,
    TypeDefsQuery as TypeDefsQueryMenu,
    TypeDefsMutation as TypeDefsMutationMenu,
    Query as QueryMenu,
    Mutation as MutationMenu
} from '@/schema/menu'
import {
    QuoteType,
    TypeDefsQuery as TypeDefsQueryQuote,
    TypeDefsMutation as TypeDefsMutationQuote,
    Query as QueryQuote,
    Mutation as MutationQuote
} from '@/schema/quote'
import {
    AdvantagesType,
    TypeDefsQuery as TypeDefsQueryAdvantages,
    TypeDefsMutation as TypeDefsMutationAdvantages,
    Query as QueryAdvantages,
    Mutation as MutationAdvantages
} from '@/schema/advantages'
import {
    SponsorType,
    TypeDefsQuery as TypeDefsQuerySponsor,
    TypeDefsMutation as TypeDefsMutationSponsor,
    Query as QuerySponsor,
    Mutation as MutationSponsor
} from '@/schema/sponsor'
import {
    ArticleType,
    TypeDefsQuery as TypeDefsQueryArticle,
    TypeDefsMutation as TypeDefsMutationArticle,
    Query as QueryArticle,
    Mutation as MutationArticle
} from '@/schema/article'
import {
    CalculationType,
    TypeDefsQuery as TypeDefsQueryCalculation,
    TypeDefsMutation as TypeDefsMutationCalculation,
    Query as QueryCalculation,
    Mutation as MutationCalculation
} from '@/schema/calculation'
import {
    CommandType,
    TypeDefsQuery as TypeDefsQueryCommand,
    TypeDefsMutation as TypeDefsMutationCommand,
    Query as QueryCommand,
    Mutation as MutationCommand
} from '@/schema/command'
import {
    ErrorType,
    TypeDefsQuery as TypeDefsQueryError,
    TypeDefsMutation as TypeDefsMutationError,
    Query as QueryError,
    Mutation as MutationError
} from '@/schema/error'
import {
    UserType,
    TypeDefsQuery as TypeDefsQueryUser,
    TypeDefsMutation as TypeDefsMutationUser,
    Query as QueryUser,
    Mutation as MutationUser
} from '@/schema/auth/user'
import {
    CompanyType,
    TypeDefsQuery as TypeDefsQueryCompany,
    TypeDefsMutation as TypeDefsMutationCompany,
    Query as QueryCompany,
    Mutation as MutationCompany
} from '@/schema/auth/company'
import {
    AuthType,
    TypeDefsMutation as TypeDefsMutationAuth,
    Mutation as MutationAuth
} from '@/schema/auth'

const TypeDefs = gql`
    ${EnumAccessibilityTypeGql}
    ${TypeRegistrationResult}

    ${MenuType}
    ${QuoteType}
    ${AdvantagesType}
    ${SponsorType}
    ${ArticleType}
    ${CalculationType}
    ${CommandType}
    ${ErrorType}
    ${AuthType}
    ${UserType}
    ${CompanyType}

    type Query {
        ${TypeDefsQueryMenu}
        ${TypeDefsQueryQuote}
        ${TypeDefsQueryAdvantages}
        ${TypeDefsQuerySponsor}
        ${TypeDefsQueryArticle}
        ${TypeDefsQueryCalculation}
        ${TypeDefsQueryCommand}
        ${TypeDefsQueryError}
        ${TypeDefsQueryUser}
        ${TypeDefsQueryCompany}
    }

    type Mutation {
        ${TypeDefsMutationMenu}
        ${TypeDefsMutationQuote}
        ${TypeDefsMutationAdvantages}
        ${TypeDefsMutationSponsor}
        ${TypeDefsMutationArticle}
        ${TypeDefsMutationCalculation}
        ${TypeDefsMutationCommand}
        ${TypeDefsMutationError}
        ${TypeDefsMutationAuth}
        ${TypeDefsMutationUser}
        ${TypeDefsMutationCompany}
    }
`

const Resolvers = {
    Query: {
        ...QueryMenu,
        ...QueryQuote,
        ...QueryAdvantages,
        ...QuerySponsor,
        ...QueryArticle,
        ...QueryCalculation,
        ...QueryCommand,
        ...QueryError,
        ...QueryUser,
        ...QueryCompany
    },
    Mutation: {
        ...MutationMenu,
        ...MutationQuote,
        ...MutationAdvantages,
        ...MutationSponsor,
        ...MutationArticle,
        ...MutationCalculation,
        ...MutationCommand,
        ...MutationError,
        ...MutationAuth,
        ...MutationUser,
        ...MutationCompany
    }
}

export const typeDefs = {
    ...TypeDefs
}
export const resolvers = {
    ...Resolvers
}
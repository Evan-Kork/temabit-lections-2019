import {
    GraphQLSchema,
    GraphQLObjectType
} from 'graphql'

import {
    getTypeMenu,
    getMenu,
    addMenu,
    removeMenu,
    updateMenu
} from '@/schema/menu'
import {
    getAdvantages,
    addAdvantages,
    removeAdvantages,
    updateAdvantages
} from '@/schema/advantages'
import {
    getSponsor,
    addSponsor,
    removeSponsor,
    updateSponsor
} from '@/schema/sponsor'
import {
    getCommand,
    addCommand,
    removeCommand,
    updateCommand
} from '@/schema/command'
import {
    getQuote,
    addQuote,
    removeQuote,
    updateQuote
} from '@/schema/quote'
import {
    getCalculationLength,
    addCalculationLength,
    removeCalculationLength,
    updateCalculationLength,
    getCalculationWeight,
    addCalculationWeight,
    removeCalculationWeight,
    updateCalculationWeight,
    getCalculationPrice,
    addCalculationPrice,
    removeCalculationPrice,
    updateCalculationPrice,
    getTypeCalculationPrice
} from '@/schema/calculation'

export const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        getTypeMenu,
        getMenu,
        getAdvantages,
        getSponsor,
        getCommand,
        getQuote,
        getCalculationLength,
        getCalculationWeight,
        getCalculationPrice,
        getTypeCalculationPrice
    }
})

export const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addMenu,
        removeMenu,
        updateMenu,
        addAdvantages,
        removeAdvantages,
        updateAdvantages,
        addSponsor,
        removeSponsor,
        updateSponsor,
        addCommand,
        removeCommand,
        updateCommand,
        addQuote,
        removeQuote,
        updateQuote,
        addCalculationLength,
        removeCalculationLength,
        addCalculationWeight,
        updateCalculationLength,
        updateCalculationWeight,
        removeCalculationWeight,
        addCalculationPrice,
        removeCalculationPrice,
        updateCalculationPrice
    }
})

export default new GraphQLSchema({
    query: Query,
    mutation: Mutation
})
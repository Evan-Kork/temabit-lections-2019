import { GraphQLEnumType } from 'graphql'

export const WeightRangEnum = new GraphQLEnumType({
    name: 'WeightRangEnum',
    values: {
        'XS': { value: 1 },
        'S': { value: 2 },
        'M': { value: 3 },
        'L': { value: 4 },
        'XL': { value: 5 },
        'XXL': { value: 6 },
        'XXXL': { value: 7 },
    }
})

export const LegthRangEnum = new GraphQLEnumType({
    name: 'LegthRangEnum',
    values: {
        'Short': { value: 1 },
        'Medium': { value: 2 },
        'Long': { value: 3 },
    }
})
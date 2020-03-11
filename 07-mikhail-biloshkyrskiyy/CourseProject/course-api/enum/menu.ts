import { GraphQLEnumType } from 'graphql'

export const AvailabilityEnum = new GraphQLEnumType({
    name: 'AvailabilityEnum',
    values: {
        NoRegistrations: { value: 'NoRegistrations' },
        Registrations: { value: 'Registrations' },
    }
})

export const MenuEnum = new GraphQLEnumType({
    name: 'TypeMenuEnum',
    values: {
        Base: { value: 'Base' },
        Declaration: { value: 'Declaration' },
        Office: { value: 'Office' }
    }
})
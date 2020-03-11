import { model } from 'mongoose'
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLNonNull,
    GraphQLList
} from 'graphql'

import { WeightRangEnum, LegthRangEnum } from '@/enum/calculation'
import '@/models/calculation'
const CalculationWeight = model('CalculationWeight')
const CalculationLength = model('CalculationLegth')
const CalculationPrice = model('CalculationPrice')

const CalculationWeightType = new GraphQLObjectType({
    name: 'CalculationWeight',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        weight: {
            type: new GraphQLNonNull(GraphQLString)
        },
        rang: {
            type: new GraphQLNonNull(WeightRangEnum)
        }
    })
})
const CalculationLengthType = new GraphQLObjectType({
    name: 'CalculationLegth',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        parcelLength: {
            type: new GraphQLNonNull(GraphQLString)
        },
        rang: {
            type: new GraphQLNonNull(LegthRangEnum)
        }
    })
})
const CalculationPriceType = new GraphQLObjectType({
    name: 'CalculationPrice',
    fields: () => ({
        price: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        rang: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    })
})

export const getCalculationWeight = {
    type: new GraphQLList(CalculationWeightType),
    resolve(parent: any, args: any) {
        return CalculationWeight.find()
    }
}
export const getCalculationLength = {
    type: new GraphQLList(CalculationLengthType),
    resolve(parent: any, args: any) {
        return CalculationLength.find()
    }
}
export const getCalculationPrice = {
    type: new GraphQLList(CalculationPriceType),
    resolve(parent: any, args: any) {
        return CalculationPrice.find()
    }
}
export const getTypeCalculationPrice = {
    type: new GraphQLList(CalculationPriceType),
    args: {
        rang: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    resolve(parent:any, args:any) {
        return CalculationPrice.find({
            rang: args.rang
        })
    }
}

export const addCalculationWeight = {
    type: CalculationWeightType,
    args: {
        weight: {
            type: new GraphQLNonNull(GraphQLString)
        },
        rang: {
            type: new GraphQLNonNull(WeightRangEnum)
        }
    },
    async resolve(parent: any, args: any) {
        if (await CalculationWeight.findOne({ weight: args.weight }) === null) {
            const weight = new CalculationWeight({
                weight: args.weight,
                rang: args.rang
            })
            return weight.save()
        }
    }
}
export const addCalculationLength = {
    type: CalculationLengthType,
    args: {
        parcelLength: {
            type: new GraphQLNonNull(GraphQLString)
        },
        rang: {
            type: new GraphQLNonNull(LegthRangEnum)
        }
    },
    async resolve(parent: any, args: any) {
        if (await CalculationLength.findOne({ parcelLength: args.parcelLength }) === null) {
            const length = new CalculationLength({
                parcelLength: args.parcelLength,
                rang: args.rang
            })
            return length.save()
        }
    }
}
export const addCalculationPrice = {
    type: CalculationPriceType,
    args: {
        price: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        rang: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    async resolve(parent: any, args: any) {
        if (await CalculationPrice.findOne({ rang: args.rang }) === null) {
            const calculationPrice = new CalculationPrice({
                price: args.price,
                rang: args.rang
            })
            return calculationPrice.save()
        }
    }
}

export const removeCalculationWeight = {
    type: CalculationWeightType,
    args: {
        id: {
            type: GraphQLID
        }
    },
    async resolve(parent: any, args: any) {
        return await CalculationWeight.findByIdAndRemove(args.id)
    }
}
export const removeCalculationLength = {
    type: CalculationLengthType,
    args: {
        id: {
            type: GraphQLID
        }
    },
    async resolve(parent: any, args: any) {
        return await CalculationLength.findByIdAndRemove(args.id)
    }
}
export const removeCalculationPrice = {
    type: CalculationPriceType,
    args: {
        id: {
            type: GraphQLID
        }
    },
    async resolve(parent: any, args: any) {
        return await CalculationPrice.findByIdAndRemove(args.id)
    }
}

export const updateCalculationWeight = {
    type: CalculationWeightType,
    args: {
        weight: {
            type: new GraphQLNonNull(GraphQLString)
        },
        rang: {
            type: WeightRangEnum
        }
    },
    async resolve(parent: any, args: any) {
        return await CalculationWeight.findOneAndUpdate({ weight: args.weight }, {
            $set: {
                weight: args.weight,
                rang: args.rang
            }
        }).setOptions({ omitUndefined: true })
    }
}
export const updateCalculationLength = {
    type: CalculationLengthType,
    args: {
        parcelLength: {
            type: new GraphQLNonNull(GraphQLString)
        },
        rang: {
            type: LegthRangEnum
        }
    },
    async resolve(parent: any, args: any) {
        return await CalculationLength.findOneAndUpdate({ parcelLength: args.parcelLength }, {
            $set: {
                parcelLength: args.parcelLength,
                rang: args.rang
            }
        }).setOptions({ omitUndefined: true })
    }
}
export const updateCalculationPrice = {
    type: CalculationPriceType,
    args: {
        price: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        rang: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    async resolve(parent: any, args: any) {
        return await CalculationPrice.findOneAndUpdate({ price: args.price }, {
            $set: {
                price: args.price,
                rang: args.rang
            }
        }).setOptions({ omitUndefined: true })
    }
}
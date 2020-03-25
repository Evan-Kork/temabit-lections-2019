import React, { useContext, useEffect, useState } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { useQuery } from '@apollo/react-hooks'
import Box from '@material-ui/core/Box'
import { Row, Col } from 'react-bootstrap'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import {
    FieldProps,
    Form,
    Field,
    Formik
} from 'formik'
import Button from '@material-ui/core/Button'

import iRootState from '@/interfaces/iRootState'
import { iLocalities, LocalitiesType } from '@/interfaces/iBranch'
import { iCalculationWeight, iCalculationLength, iCalculationPrice, WeightRang, LegthRang } from '@/interfaces/iCalculation'
import {
    actionLocalities,
    actionInitLocalities
} from '@/actions/actionBranch'
import {
    actionCalculationWeight,
    actionCalculationLength
} from '@/actions/actionCalculation'
import {
    getLocalities
} from '@/selectors'
import { CalculationInvertoryData, GET_CALCULATION_INVERTORY } from './Query'

import { HeightLayout } from '@/context'
import classes from './index.module.scss'
// This import connects hook with styles
import useStyles from './makeStyle'

const mapState = (state: iRootState) => ({
    localities: getLocalities(state)
})

const mapDispatch = {
    actionLocalities,
    actionInitLocalities,
    actionCalculationWeight,
    actionCalculationLength
}

const connector = connect(
    mapState,
    mapDispatch
)
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

const initialValues = {
    start: '',
    end: '',
    weight: WeightRang.XS,
    _length: LegthRang.Short
}
interface iCalculator {
    name: string
    label: string
    helperText: string
}
const GetTextFieldLocalitiesStart = (value: iCalculator, localities: iLocalities[], key: number) => {
    return (
        <Col className='mb-4' md={6} key={key}>
            <Field render={({ field }: FieldProps) => (
                <TextField
                    select
                    label={value.label}
                    name={value.name}
                    onChange={field.onChange}
                    helperText={value.helperText}
                    value={field.value.start}
                    variant="outlined"
                >
                    {localities.map((option: iLocalities, index: number) => (
                        <MenuItem key={index} value={option.title_ua}>
                            {option.title_ua}
                        </MenuItem>
                    ))}
                </TextField>)} />
        </Col>
    )
}
const GetTextFieldLocalitiesEnd = (value: iCalculator, localities: iLocalities[], key: number) => {
    return (
        <Col className='mb-4' md={6} key={key}>
            <Field render={({ field }: FieldProps) => (
                <TextField
                    select
                    label={value.label}
                    name={value.name}
                    onChange={field.onChange}
                    helperText={value.helperText}
                    value={field.value.end}
                    variant="outlined"
                >
                    {localities.map((option: iLocalities, index: number) => (
                        <MenuItem key={index} value={option.title_ua}>
                            {option.title_ua}
                        </MenuItem>
                    ))}
                </TextField>)} />
        </Col>
    )
}
const GetTextFieldWeigth = (value: iCalculator, weight: iCalculationWeight[], key: number) => {
    return (
        <Col className='mb-4' md={6} key={key}>
            <Field render={({ field }: FieldProps) => (
                <TextField
                    select
                    label={value.label}
                    name={value.name}
                    onChange={field.onChange}
                    helperText={value.helperText}
                    value={field.value.weight}
                    variant="outlined"
                >
                    {weight.map((option: iCalculationWeight) => (
                        <MenuItem key={option.rang} value={option.rang}>
                            {option.title}
                        </MenuItem>
                    ))}
                </TextField>)} />
        </Col>
    )
}
const GetTextFieldLength = (value: iCalculator, parcelLength: iCalculationLength[], key: number) => {
    return (
        <Col className='mb-4' md={6} key={key}>
            <Field render={({ field }: FieldProps) => (
                <TextField
                    select
                    label={value.label}
                    name={value.name}
                    onChange={field.onChange}
                    helperText={value.helperText}
                    value={field.value._length}
                    variant="outlined"
                >
                    {parcelLength.map((option: iCalculationLength) => (
                        <MenuItem key={option.rang} value={option.rang}>
                            {option.title}
                        </MenuItem>
                    ))}
                </TextField>)} />
        </Col>
    )
}
const GetPrice = (WeightRang: number, LegthRang: number, price: iCalculationPrice[]) => {
    if (price[0].rang > WeightRang * LegthRang) {
        return price[0].price
    } else {
        for (let i = 0; i < price.length - 1; i++) {
            if  (WeightRang * LegthRang <= price[i].rang) {
                return price[i].price
            }
        }
    }

    return price[price.length - 1].price
}
const Calculator: React.FC<Props> = (props: Props) => {
    const makeClasses = useStyles()
    const heightContext = useContext(HeightLayout)
    const { loading, data } = useQuery<CalculationInvertoryData>(GET_CALCULATION_INVERTORY)
    const [price, setPrice] = useState(0)

    props.actionCalculationWeight(loading, data?.weight as iCalculationWeight[])
    props.actionCalculationLength(loading, data?._length as iCalculationLength[])

    const label: iCalculator[] = [
        { name: 'start', label: 'Choose a city', helperText: 'Please select your a city' },
        { name: 'end', label: 'Choose a city', helperText: 'Please select your a city' },
        { name: 'weight', label: 'Choose a weight', helperText: 'Please select your a weight' },
        { name: '_length', label: 'Choose a length', helperText: 'Please select your a legth' }
    ]

    useEffect(() => {
        if (props.localities[0] === undefined) {
            if (sessionStorage.getItem('localities')) {
                props.actionInitLocalities()
            } else {
                props.actionLocalities(LocalitiesType.Base)
            }
        }
    }, [])

    return (
        <Box style={{ minHeight: heightContext.height }} className={classes.root}>
            <Container>
                <Box className={classes.header}>
                    <Box className='d-flex justify-content-center py-4'>
                        <div className={classes.title}>Calculation</div>
                    </Box>
                </Box>
                <Box className={classes.body}>
                    <Box className='d-flex justify-content-center py-4'>
                        <div className={classes.title}>Сalculate the cost</div>
                    </Box>
                    <Formik initialValues={initialValues} onSubmit={(values) => {
                        data?.price && setPrice(GetPrice(values.weight, values._length, data?.price))
                    }} render={() => (<Form className={makeClasses.root}>
                        <Row>
                            {props.localities && label.map((value: iCalculator, index: number) => {
                                if (value.name === 'start') {
                                    return GetTextFieldLocalitiesStart(value, Object.values(props.localities), index)
                                } else if (value.name === 'end') {
                                    return GetTextFieldLocalitiesEnd(value, Object.values(props.localities), index)
                                } else if (value.name === 'weight') {
                                    return data?.weight && GetTextFieldWeigth(value, data?.weight, index)
                                } else if (value.name === '_length') {
                                    return data?._length && GetTextFieldLength(value, data?._length, index)
                                }
                            })}
                        </Row>
                        <div className='mb-2'></div>
                        <Button type="submit" variant="contained" className='m-auto d-block w-50 py-2' color="primary">Activity localities</Button>
                    </Form>)}>
                    </Formik>
                    <Box className={classes.price}>{price !== 0 ? `The current shipping cost is: ${price}` : null}</Box>
                </Box>
            </Container>
        </Box>
    )
}

export default connector(Calculator)
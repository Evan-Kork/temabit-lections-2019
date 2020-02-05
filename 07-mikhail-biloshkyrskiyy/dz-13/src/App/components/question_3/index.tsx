import React, { useState, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import Form from '~component/form'
import { initialValues, Schema, field } from './initialValues'
import iRootState from '~interface/iRootState'
import { actionMultipleCached } from '~action/actionMultipleCached'
import { actionMessage } from '~action/actionMessage'
import { getMessage, getMultipleCached } from '~selectors'
import { map } from '~publick/index'

const mapState = (state: iRootState) => ({
    multipleCached: getMultipleCached(state),
    message: getMessage(state)
})

const mapDispatch = {
    actionMultipleCached,
    actionMessage
}

const connector = connect(
    mapState,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

const Question_3: React.FC<Props> = (props: Props) => {
    const [multipleCached, setMultipleCached] = useState<number[]>()
    useEffect(() => {
        try {
            if (typeof props.multipleCached.first !== 'undefined' &&
                typeof props.multipleCached.second !== 'undefined' &&
                typeof props.multipleCached.third !== 'undefined') {
                setMultipleCached(Array.from(map((a: number, b: number, c: number) => (a + b) * c, props.multipleCached.first,
                    props.multipleCached.second,
                    props.multipleCached.third)))
            }
        } catch (error) {
            props.actionMessage(error)
        }
    }, [props.multipleCached])

    return (
        <div>
            <div className='h3 text-center text-danger'>{props.message.text}</div>
            <div className='h4 text-center text-primary'>Результат: {multipleCached?.map((value, index) => <div className='mx-1 d-inline-block' key={index}>{value}</div>)}</div>
            <Form initialValues={initialValues} Schema={Schema} field={field} action={props.actionMultipleCached} />
        </div>
    )
}

export default connector(Question_3)
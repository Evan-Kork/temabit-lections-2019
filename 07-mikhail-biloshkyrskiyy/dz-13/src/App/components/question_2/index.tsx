import React, { useState, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import Form from '~component/form'
import { initialValues, Schema, field } from './initialValues'
import iRootState from '~interface/iRootState'
import { actionFibonacci } from '~action/actionFibonacci'
import { actionMessage } from '~action/actionMessage'
import { getMessage, getFibonacci } from '~selectors'
import { fi } from '~publick/index'

const mapState = (state: iRootState) => ({
    fibonacci: getFibonacci(state),
    message: getMessage(state)
})

const mapDispatch = {
    actionFibonacci,
    actionMessage
}

const connector = connect(
    mapState,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

const Question_2: React.FC<Props> = (props: Props) => {
    const [fibonacci, setFibonacci] = useState<number>(0)
    useEffect(() => {
        try {
            if (typeof props.fibonacci.fibonacci !== 'undefined') {
                setFibonacci(fi(props.fibonacci.fibonacci))
            }
        } catch (error) {
            props.actionMessage(error)
        }
    }, [props.fibonacci])

    return (
        <div>
            <div className='h3 text-center text-danger'>{props.message.text}</div>
            <div className='h4 text-center text-primary'>Результат: {fibonacci}</div>
            <Form initialValues={initialValues} Schema={Schema} field={field} action={props.actionFibonacci} />
        </div>
    )
}

export default connector(Question_2)
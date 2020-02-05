import React, { useState, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import Form from '~component/form'
import { initialValues, Schema, field } from './initialValues'
import iRootState from '~interface/iRootState'
import { actionMultiple } from '~action/actionMultiple'
import { actionMessage } from '~action/actionMessage'
import { getMessage, getMultiple } from '~selectors'
import { intersection } from '~publick/index'

const mapState = (state: iRootState) => ({
    multiple: getMultiple(state),
    message: getMessage(state)
})

const mapDispatch = {
    actionMultiple,
    actionMessage
}

const connector = connect(
    mapState,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

const Question_1: React.FC<Props> = (props: Props) => {
    const [multiple, setMultiple] = useState<number[]>([])
    useEffect(() => {
        try {
            if (typeof props.multiple.first !== 'undefined' && typeof props.multiple.second !== 'undefined') {
                setMultiple(intersection(props.multiple.first, props.multiple.second))
            }
        } catch (error) {
            props.actionMessage(error)
        }
    }, [props.multiple])

    return (
        <div>
            <div className='h3 text-center text-danger'>{props.message.text}</div>
            <div className='h4 text-center text-primary'>Результат: {multiple?.map((value, index) => <div className='mx-1 d-inline-block' key={index}>{value}</div>)}</div>
            <Form initialValues={initialValues} Schema={Schema} field={field} action={props.actionMultiple} />
        </div>
    )
}

export default connector(Question_1)
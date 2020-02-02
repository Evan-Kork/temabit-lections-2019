import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import {
    FormikProps,
    FieldProps,
    Form,
    Field,
    Formik
} from 'formik'

import { actionClock } from '~action/actionClock'
import { actionMessage } from '~action/actionMessage'
import { initialValues, Schema } from './initialValues'
import classes from './index.module.scss'

const mapDispatch = {
    actionClock,
    actionMessage
}

const connector = connect(
    null,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

const Forms: React.FC<Props> = (props: Props) => {
    return (<div className='d-flex justify-content-center w-100'>
        <Formik initialValues={initialValues} onSubmit={(values, formikBag) => {
            // Sending data for processing
            props.actionClock(values)
            // Zero message text. 
            props.actionMessage('')
            setTimeout(() => {
                formikBag.setSubmitting(false)
            }, 200)
        }} validationSchema={Schema} render={(formikBag: FormikProps<typeof initialValues>) => (<Form className={classes.form}>
            {field.map((values, index) => getFieldInputNumber(index, values))}
            <button type="submit" className="btn btn-primary w-100" disabled={formikBag.isSubmitting}>Отправить</button>
        </Form>)}>
        </Formik>
    </div>)
}
/* The function generates a field for the library forming on the given array */
const field = ['seconds', 'minutes', 'hour', 'date', 'month', 'year']
function getFieldInputNumber(key: number, nameField: string) {
    return <div key={key} className="form-group">
        <Field render={({ field, form }: FieldProps) => (<>
            {
                // @ts-ignore
                <input name={nameField} step="any" type='number' className={`form-control ${form.errors[nameField] && 'is-invalid'}`} placeholder={`Enter ${nameField}`} onChange={field.onChange} />
            }
            {
                // @ts-ignore
                form.touched[nameField] && form.errors[nameField] && <div className="invalid-feedback">{form.errors[nameField]}</div>
            }
        </>)} />
    </div>
}

export default connector(Forms)
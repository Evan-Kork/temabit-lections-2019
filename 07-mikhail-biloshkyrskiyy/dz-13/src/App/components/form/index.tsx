import React from 'react'
import * as Yup from 'yup'
import { connect, ConnectedProps } from 'react-redux'
import {
    FormikProps,
    FieldProps,
    Form,
    Field,
    Formik
} from 'formik'

import { iField } from '~interface/iField'
import { actionMultiple } from '~action/actionMultiple'
import { actionMessage } from '~action/actionMessage'
import classes from './index.module.scss'

const mapDispatch = {
    actionMultiple,
    actionMessage
}

const connector = connect(
    null,
    mapDispatch
)

type T = any
interface iInitialValues {
    action: (values: T) => void
    initialValues: T
    Schema: Yup.ObjectSchema<object>
    field: iField[]
}

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & iInitialValues

const Forms: React.FC<Props> = (props: Props) => {
    return (<div className='d-flex justify-content-center w-100'>
        <Formik initialValues={props.initialValues} onSubmit={(values, formikBag) => {
            // Sending data for processing
            props.action(values)
            // Zero message text. 
            props.actionMessage('')
            setTimeout(() => {
                formikBag.setSubmitting(false)
            }, 200)
        }} validationSchema={props.Schema} render={(formikBag: FormikProps<typeof props.initialValues>) => (<Form className={classes.form}>
            {props.field.map((values, index) => getFieldInputNumber(index, values.name, values.type))}
            <button type="submit" className="btn btn-primary w-100" disabled={formikBag.isSubmitting}>Отправить</button>
        </Form>)}>
        </Formik>
    </div>)
}
/* The function generates a field for the library forming on the given array */
function getFieldInputNumber(key: number, nameField: string, type: string) {
    return <div key={key} className="form-group">
        <Field render={({ field, form }: FieldProps) => (<>
            {
                // @ts-ignore
                <input name={nameField} step="any" type={type} className={`form-control ${form.errors[nameField] && 'is-invalid'}`} placeholder={`Enter ${nameField}`} onChange={field.onChange} />
            }
            {
                // @ts-ignore
                form.touched[nameField] && form.errors[nameField] && <div className="invalid-feedback">{form.errors[nameField]}</div>
            }
        </>)} />
    </div>
}

export default connector(Forms)
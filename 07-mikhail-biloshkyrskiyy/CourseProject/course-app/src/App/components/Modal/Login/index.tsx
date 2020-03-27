import React, { useEffect } from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import TextField from '@material-ui/core/TextField'
import {
    FieldProps,
    Form,
    Field,
    Formik
} from 'formik'

import { AuthInvertoryData, LoginInvertoryVars, GET_AUTH_JWT } from './Query'
import { initialValues, Schema } from './Initial'
// This import connects hook with styles
import useStyles from './makeStyle'
import classes from './index.module.scss'
// Interface indicates
// what parameters are in the component
interface iProps {
    isOpen: boolean
    setIsOpen: Function
}
const Login: React.FC<iProps> = (props: iProps) => {
    const makeClasses = useStyles()
    const [login, data] = useLazyQuery<AuthInvertoryData, LoginInvertoryVars>(GET_AUTH_JWT)

    useEffect(() => {
        if (data.data?.login.success !== undefined && data.data?.login.success) {
            localStorage.setItem('token', data.data?.login.jwt)
            props.setIsOpen(false)
        }
    }, [data.loading])
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={makeClasses.modal}
            open={props.isOpen}
            onClose={() => props.setIsOpen(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={props.isOpen}>
                <div className={makeClasses.paper}>
                    <Box className={`${classes.title} mb-2`}>Welcome to Justin</Box>
                    <img className={classes.img} src={require('./man.png').default} alt='' />
                    <Formik
                        initialValues={initialValues}
                        validationSchema={Schema}
                        onSubmit={(values) => {
                            login({
                                variables: {
                                    auth: {
                                        login: values.login,
                                        password: values.password
                                    }
                                }
                            })
                        }} render={() => (<Form className={makeClasses.form}>
                            <Field render={({ field, form }: FieldProps) => (
                                <div className='my-4'>
                                    <div className="form-group">
                                        <TextField onChange={field.onChange} name='login' label="Login" className={`form-control ${form.touched.login && form.errors.login && 'is-invalid'}`} />
                                    </div>
                                    {form.touched.login && form.errors.login && <div className="invalid-feedback d-block">{form.errors.login}</div>}
                                </div>
                            )} />
                            <Field render={({ field, form }: FieldProps) => (
                                <div className='my-4'>
                                    <div className="form-group">
                                        <TextField onChange={field.onChange} type='password' name='password' label="Password" className={`form-control ${form.touched.password && form.errors.password && 'is-invalid'}`} />
                                    </div>
                                    {form.touched.password && form.errors.password && <div className="invalid-feedback d-block">{form.errors.password}</div>}
                                </div>
                            )} />
                            <Link className={`${classes.forgotPassword} mt-4 mb-2`} to='/forgotpassword'>Forgot password?</Link>
                            <Button type="submit" variant="contained" className='m-auto d-block w-100 py-2' color="primary">Login</Button>
                        </Form>)}>
                    </Formik>
                </div>
            </Fade>
        </Modal>
    );
}

export default Login
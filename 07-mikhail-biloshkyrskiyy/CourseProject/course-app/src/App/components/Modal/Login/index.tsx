import React, { useEffect } from 'react'
import Cookie from 'js-cookie'
import { connect, ConnectedProps } from 'react-redux'
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
import Alert from '@material-ui/lab/Alert'

import iRootState from '@/interfaces/iRootState'
import { actionLogin } from '@/actions/actionAuth'
import { getIsAuth } from '@/selectors'
import { initialValues, Schema } from './Initial'
// This import connects hook with styles
import useStyles from './makeStyle'
import classes from './index.module.scss'

const mapState = (state: iRootState) => ({
    isAuth: getIsAuth(state)
})
const mapDispatch = {
    actionLogin
}

const connector = connect(
    mapState,
    mapDispatch
)
// Interface indicates
// what parameters are in the component
interface iProps {
    isOpen: boolean
    setIsOpen: Function
    setIsCookie: Function
}
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & iProps
const Login: React.FC<Props> = (props: Props) => {
    const makeClasses = useStyles()

    useEffect(() => {
        if (props.isAuth && props.isAuth.success) {
            setTimeout(() => {
                props.setIsOpen(false)
                props.setIsCookie(false)
            }, 1000)
        } else {
            if(props.isAuth && !props.isAuth.success){
                props.setIsOpen(true)
                props.setIsCookie(Cookie.get('jwt') !== '')
            } else {
                props.setIsOpen(false)
                props.setIsCookie(Cookie.get('jwt') !== '')
            }
        }
    }, [props.isAuth])
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
                    <Box>{props.isAuth && <Alert severity={props.isAuth.success ? "success" : "error"} className={classes.alert}>{props.isAuth.message}</Alert>}</Box>
                    <img className={classes.img} src={require('./man.png').default} alt='' />
                    <Formik
                        initialValues={initialValues}
                        validationSchema={Schema}
                        onSubmit={(values) => {
                            props.actionLogin({
                                email: values.email,
                                password: values.password
                            })
                        }} render={() => (<Form className={makeClasses.form}>
                            <Field render={({ field, form }: FieldProps) => (
                                <div className='my-4'>
                                    <div className="form-group">
                                        <TextField onChange={field.onChange} name='email' label="Email" className={`form-control ${form.touched.email && form.errors.email && 'is-invalid'}`} />
                                    </div>
                                    {form.touched.email && form.errors.email && <div className="invalid-feedback d-block">{form.errors.email}</div>}
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

export default connector(Login)
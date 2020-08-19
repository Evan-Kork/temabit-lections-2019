import React from 'react'
import { useHistory } from 'react-router-dom'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import {
    FieldProps,
    Form,
    Field,
    Formik
} from 'formik'

// This import connects hook with styles
import useStyles from './makeStyle'

// Interface indicates
// what parameters are in the component
interface iProps {
    name: string
    placeholder: string
    initialValues: Object,
    callback: Function
    classes?: string
    redirect?: string
}

const Input: React.FC<iProps> = (props: iProps) => {
    const classes = useStyles()
    const history = useHistory()

    return (
        <Formik initialValues={props.initialValues} onSubmit={(values) => {
            props.callback(values)
            if (props.redirect) {
                history.push(props.redirect)
            }
        }} render={() => (<Form>
            <Field render={({ field }: FieldProps) => (
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        name={props.name}
                        onChange={field.onChange}
                        placeholder={props.placeholder}
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        className={props.classes}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>)} />
        </Form>)}>
        </Formik>
    )
}

export default Input
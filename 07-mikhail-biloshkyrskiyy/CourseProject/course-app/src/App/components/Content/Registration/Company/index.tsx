import React, { useContext, useState, useEffect } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { connect, ConnectedProps } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import {
    Form,
    Formik
} from 'formik'
import Button from '@material-ui/core/Button'
import Alert from '@material-ui/lab/Alert'

import { CompanyInvertoryData, CompanyInvertoryVars, GET_COMPANY_INVERTORY } from '../Query'
import iRootState from '@/interfaces/iRootState'
import { iLocation } from '@/interfaces/iBranch'
import { LocalitiesType } from '@/interfaces/iBranch'
import {
    actionLocalities,
    actionInitLocalities,
    actionBranchAll,
    actionBranchArray,
    actionInitBranch
} from '@/actions/actionBranch'
import {
    getLocalities,
    getBranches
} from '@/selectors'
import Steper from '@/components/Stepper'
import { HeightLayout } from '@/context'
import { initialValuesCompany, SchemaCompany, fieldsCompany } from '../Initial'
import { activeStep, setRegion, setCity, setParcelDepartment } from '../fields'

import classes from './index.module.scss'
// This import connects hook with styles
import useStyles from '../makeStyle'
import ColorButton from '../buttonStyle'

const mapState = (state: iRootState) => ({
    localities: getLocalities(state),
    branches: getBranches(state)
})

const mapDispatch = {
    actionLocalities,
    actionInitLocalities,
    actionBranchAll,
    actionBranchArray,
    actionInitBranch
}

const connector = connect(
    mapState,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux
const CompanyRegistration: React.FC<Props> = (props: Props) => {
    const steps = ['Basic company data', 'Company details for receiving the parcel']

    const history = useHistory()
    const heightContext = useContext(HeightLayout)
    const makeClasses = useStyles()

    const [registrationCompany, data] = useMutation<CompanyInvertoryData, CompanyInvertoryVars>(GET_COMPANY_INVERTORY)

    const [activeStepState, setActiveStepState] = useState(0)
    const [hidenActiveStepState, setHidenActiveStepState] = useState(0)
    const [skipped, setSkipped] = useState(new Set<number>())

    const [regionState, setRegionState] = useState('')
    const [locationState, setLocationState] = useState('')

    const [success, setSuccess] = useState(false)
    const [activeErrors, setActiveErrors] = useState(new Set<string>())
    const [allError, setAllError] = useState<Array<string>>([])
    const [hiddenError, setHiddenError] = useState<Array<string>>([])

    const region = props.localities.map && Array.from(setRegion(props.localities))
    const city = props.localities.map && Array.from(setCity(props.localities, regionState))
    const parcelDepartment = props.branches.map && Array.from(setParcelDepartment(props.branches, locationState))
    // Hook checks the download of localities
    // and makes a request
    useEffect(() => {
        if (props.localities[0] === undefined) {
            if (sessionStorage.getItem('localities')) {
                props.actionInitLocalities()
            } else {
                props.actionLocalities(LocalitiesType.Base)
            }
        }
    }, [])
    // Hook checks the download of branches
    // and makes a request
    useEffect(() => {
        if (props.branches[0] === undefined) {
            if (sessionStorage.getItem('branch')) {
                props.actionInitBranch()
            } else if (locationState !== '') {
                props.actionBranchArray(Object.values(locationState))
            } else if (JSON.parse(sessionStorage.getItem('location') as string) as iLocation !== null) {
                props.actionBranchArray(Object.values(JSON.parse(sessionStorage.getItem('location') as string) as iLocation))
            } else {
                props.actionBranchAll()
            }
        }
    }, [])
    // Hook checks the data upload from
    // Graphql, if the data is obtained
    // and, as a result, the result passes.
    // on the homepage
    useEffect(() => {
        if (data.data?.registrationCompany.success !== undefined) {
            setSuccess(data.data?.registrationCompany.success)
            if (!data.data?.registrationCompany.success) {
                setHiddenError([data.data?.registrationCompany.message])
            } else {
                setTimeout(() => {
                    history.push('/')
                }, 3000)
            }
        }
    }, [data.loading])
    // Checking to see if Skipped is in set
    const isStepSkipped = (step: number) => {
        return skipped.has(step)
    }
    // The event checks the intersection
    // all errors and activated
    // and keeps the intersection.
    // Returns boolean if there's about
    const handleError = () => {
        setHiddenError([])
        const error: Array<string> = []
        Object.values(activeErrors).map((valueErrors: string) => {
            allError.map((valueAllError: string) => valueErrors === valueAllError && error.push(valueErrors))
        })
        setHiddenError(error)

        return error.length > 0
    }
    // The event takes you to the next page.
    // if there are no mistakes on this page.
    const handleNext = () => {
        if (!handleError()) {
            let newSkipped = skipped
            if (isStepSkipped(activeStepState)) {
                newSkipped = new Set(newSkipped.values())
                newSkipped.delete(activeStepState)
            }

            setActiveStepState((prevActiveStep: number) => prevActiveStep + 1)
            setSkipped(newSkipped)
        }
    }
    const handleBack = () => {
        setActiveStepState((prevActiveStep: number) => prevActiveStep - 1)
    }

    return (
        <Box style={{ minHeight: heightContext.height }} className={makeClasses.root}>
            <Formik
                initialValues={initialValuesCompany}
                validationSchema={SchemaCompany}
                onSubmit={(values) => {
                    // Send the useMutation event to Graphql.
                    // with form variables
                    registrationCompany({
                        variables: {
                            company: {
                                login: values.login,
                                password: values.password,
                                email: values.email,
                                phone: values.phone,
                                name: values.name,
                                region: values.region,
                                city: values.city,
                                parcelDepartment: values.parcelDepartment,
                                accessibility: "Company"
                            }
                        }
                    })
                }} render={() => (
                    <Form className={classes.form}>
                        {success && <Alert severity="success" className={classes.alert}>Success Registration</Alert>}
                        {!success && hiddenError.map((values: string, index: number) => <Alert key={index} severity="error" className={classes.alert}>{values}</Alert>)}
                        <Steper
                            activeStep={activeStepState}
                            setActiveStep={setActiveStepState}
                            steps={steps}
                            skipped={skipped}
                        >
                            {
                                // Basic function to display all fields of the form
                                // also collects information about errors
                            }
                            {activeStep(
                                fieldsCompany,
                                activeStepState,
                                hidenActiveStepState,
                                setHidenActiveStepState,
                                region,
                                setRegionState,
                                city,
                                setLocationState,
                                parcelDepartment,
                                setActiveErrors,
                                allError,
                                setAllError
                            )}
                            <div>
                                {activeStepState !== steps.length && (
                                    <div className='d-flex justify-content-center'>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            disabled={activeStepState === 0}
                                            onClick={handleBack}
                                            className='mx-2'
                                        >
                                            Back
                                        </Button>
                                        {activeStepState === steps.length - 1 ?
                                            <Button
                                                onClick={handleError}
                                                variant="contained"
                                                color="primary"
                                                type="submit"
                                                className='mx-2'
                                            >
                                                Finish
                                            </Button>
                                            :
                                            <ColorButton
                                                onClick={handleNext}
                                                className={classes.margin}>
                                                Next
                                            </ColorButton>}
                                    </div>
                                )}
                            </div>
                        </Steper>
                    </Form>)}>
            </Formik>
        </Box>
    )
}

export default connector(CompanyRegistration)
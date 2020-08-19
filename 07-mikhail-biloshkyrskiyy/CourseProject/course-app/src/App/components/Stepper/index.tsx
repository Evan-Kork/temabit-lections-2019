import React, { useState } from 'react'
import { Stepper as MaterialStepper } from '@material-ui/core'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
// This import connects hook with styles
import useStyles from './makeStyle'


// Interface indicates
// what parameters are in the component
interface iProps {
    steps: string[]
    children: React.ReactNode
    activeStep: number
    setActiveStep: Function
    skipped: Set<number>
}
const Stepper: React.FC<iProps> = (props: iProps) => {
    const makeClasses = useStyles()

    const isStepOptional = (step: number) => {
        return step === 1
    }

    const isStepSkipped = (step: number) => {
        return props.skipped.has(step)
    }

    return (
        <div className={makeClasses.root}>
            <MaterialStepper activeStep={props.activeStep}>
                {props.steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: { optional?: React.ReactNode } = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = <Typography variant="caption">Optional</Typography>
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    )
                })}
            </MaterialStepper>
            {props.children}
        </div>
    )
}

export default Stepper
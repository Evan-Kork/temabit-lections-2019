import React from 'react'
import {
    FieldProps,
    Field
} from 'formik'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'

import { iInput } from '@/interfaces/iInput'
import { iLocalities, iOffice } from '@/interfaces/iOffice'

export function setRegion(region: iLocalities[]) {
    const setRegion = new Set<string>()
    region.map((value: iLocalities) => setRegion.add(value.parent_title_ua))
    return setRegion
}
export function setCity(city: iLocalities[], cityState: string) {
    const setCity = new Set<string>()
    city.map((value: iLocalities) => value.parent_title_ua === cityState && setCity.add(value.title_ua))
    return setCity
}
export function setParcelDepartment(department: iOffice[], departmentState: string) {
    const setParcelDepartment = new Set<string>()
    department.map((value: iOffice) => value.locality === departmentState && setParcelDepartment.add(value.adress))
    return setParcelDepartment
}
function setAllError(element: any, array: string[], setArray: Function) {
    if (element !== undefined) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === element) {
                return
            }
        }
        setArray([...array, element])
    }
}
function getFieldRegion(
    name: string,
    label: string,
    region: string[],
    setRegionState: Function,
    setActiveErrors: Function,
    allErrors: string[],
    setAllErrors: Function,
    key: number) {
    return <Field key={key} render={({ field, form, meta }: FieldProps) => (
        <FormControl className='w-100'>
            <InputLabel id="demo-simple-select-label">Region</InputLabel>
            <Select
                label={label}
                name={name}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={field.value.region}
                onChange={field.onChange}
            >
                {region.map((option: string, index: number) => (
                    <MenuItem key={index} value={option}>
                        {option}
                    </MenuItem>
                ))}
                {setRegionState(field.value.region)}
            </Select>
            {setActiveErrors(meta.error)}
            {setAllError(form.errors[name], allErrors, setAllErrors)}
        </FormControl>)} />
}
function getFieldCity(
    name: string,
    label: string,
    city: string[],
    setCityState: Function,
    setActiveErrors: Function,
    allErrors: string[],
    setAllErrors: Function,
    key: number) {
    return <Field key={key} render={({ field, form, meta }: FieldProps) => (
        <FormControl className='w-100'>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
                label={label}
                name={name}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={field.value.city}
                onChange={field.onChange}
            >
                {city.map((option: string, index: number) => (
                    <MenuItem key={index} value={option}>
                        {option}
                    </MenuItem>
                ))}
                {setCityState(field.value.city)}
            </Select>
            {setActiveErrors(meta.error)}
            {setAllError(form.errors[name], allErrors, setAllErrors)}
        </FormControl>)} />
}
function getFieldParcelDepartment(
    name: string,
    label: string,
    city: string[],
    setActiveErrors: Function,
    allErrors: string[],
    setAllErrors: Function,
    key: number) {
    return <Field key={key} render={({ field, form, meta }: FieldProps) => (
        <FormControl className='w-100 mb-2'>
            <InputLabel id="demo-simple-select-label">Parcel Department</InputLabel>
            <Select
                label={label}
                name={name}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={field.value.parcelDepartment}
                onChange={field.onChange}
            >
                {city.map((option: string, index: number) => (
                    <MenuItem key={index} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
            {setActiveErrors(meta.error)}
            {setAllError(form.errors[name], allErrors, setAllErrors)}
        </FormControl>)} />
}
function getFieldDate(
    name: string,
    label: string,
    type: string,
    setActiveErrors: Function,
    allErrors: string[],
    setAllErrors: Function,
    key: number) {
    return <Field key={key} render={({ field, form, meta }: FieldProps) => (
        <div className="form-group">
            <TextField type={type} onChange={field.onChange} name={name} label={label} className={`form-control ${form.touched[name] && form.errors[name] && 'is-invalid'}`} InputLabelProps={{
                shrink: true,
            }} />
            {setActiveErrors(meta.error)}
            {setAllError(form.errors[name], allErrors, setAllErrors)}
        </div>
    )} />
}
function getField(
    name: string,
    label: string,
    type: string,
    setActiveErrors: Function,
    allErrors: string[],
    setAllErrors: Function,
    key: number) {
    return <Field key={key} render={({ field, form, meta }: FieldProps) => (
        <div className="form-group">
            <TextField type={type} onChange={field.onChange} name={name} label={label} className={`form-control ${form.touched[name] && form.errors[name] && 'is-invalid'}`} />
            {setActiveErrors(meta.error)}
            {setAllError(form.errors[name], allErrors, setAllErrors)}
        </div>
    )} />
}
// Basic function to display all fields of the form
// also collects information about errors
export function activeStep(
    fields: iInput[],
    activeStep: number,
    hidenActiveStep: number,
    setHidenActiveStep: Function,
    region: string[],
    setRegionState: Function,
    city: string[],
    setCityState: Function,
    parcelDepartment: string[],
    setActiveErrors: Function,
    allErrors: string[],
    setAllErrors: Function
) {
    if (activeStep !== hidenActiveStep) {
        setHidenActiveStep(activeStep)
        setActiveErrors(new Set<string>())
        setAllErrors([])
    }
    return fields.map((value: iInput, index: number) => {
        if (value.page === activeStep) {
            if (value.type === 'text' || value.type === 'password' || value.type === 'phone' || value.type === 'email') {
                return getField(value.name, value.label, value.type, setActiveErrors, allErrors, setAllErrors, index)
            } else if (value.type === 'date') {
                return getFieldDate(value.name, value.label, value.type, setActiveErrors, allErrors, setAllErrors, index)
            } else if (value.type === 'region') {
                return getFieldRegion(value.name, value.label, region, setRegionState, setActiveErrors, allErrors, setAllErrors, index)
            } else if (value.type === 'city') {
                return getFieldCity(value.name, value.label, city, setCityState, setActiveErrors, allErrors, setAllErrors, index)
            } else if (value.type === 'department') {
                return getFieldParcelDepartment(value.name, value.label, parcelDepartment, setActiveErrors, allErrors, setAllErrors, index)
            }
        }
    })
}
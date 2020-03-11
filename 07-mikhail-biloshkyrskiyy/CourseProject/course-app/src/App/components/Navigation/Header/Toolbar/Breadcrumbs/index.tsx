import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Breadcrumbs as BreadcrumbsMaterial } from '@material-ui/core'

import classes from './index.module.scss'

const Breadcrumbs: React.FC = () => {
    useEffect(() => {}, [useHistory().location])

    const path: string[] = []
    return (
        <BreadcrumbsMaterial aria-label="breadcrumb" className={classes.breadcrumbs}>
            <Link className={classes.breadcrumbs_link} to='/'>/ main</Link>
            {location.pathname.split('/').map((value: string, index: number) => {
                value !== '' && path.push(`/${value}`)
                return (
                    value !== ''
                        ? <Link key={index} className={classes.breadcrumbs_link} to={path.join('')}>{value}</Link>
                        : null
                )
            })}
        </BreadcrumbsMaterial>
    )
}

export default Breadcrumbs
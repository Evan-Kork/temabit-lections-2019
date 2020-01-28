import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

import classes from './index.module.scss'

export default ({ item }) => {
    return (
        <Link to={`/arrayMethod/${item.id}`} className={classes.item}>
            <div className={classes.title}>{item.name}</div>
            <FontAwesomeIcon icon={faPlay} />
        </Link>
    )
}
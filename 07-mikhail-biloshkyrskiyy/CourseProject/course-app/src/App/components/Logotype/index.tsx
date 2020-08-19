import React from 'react'
import { Link } from 'react-router-dom'

import classes from './index.module.scss'

const Logotype: React.FC = () => {
    return (
        <Link to='/'>
            <img className={classes.logotype}
                src="https://justin.ua/wp-content/uploads/2019/03/logo_new.png" alt="Justin" />
        </Link>
    )
}

export default Logotype
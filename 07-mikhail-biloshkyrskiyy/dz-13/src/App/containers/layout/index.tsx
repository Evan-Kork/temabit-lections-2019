import React from 'react'
import { Link } from 'react-router-dom'

import Form from '~component/form'
import classes from './index.module.scss'

const Layout: React.FC = (props) => {
    return (
        <div className='vh-100 d-flex flex-column justify-content-center align-items-center'>
            <div className='my-2 h3'>Выберите номер задания</div>
            <div className='d-flex'>
                <Link to='/question/1' className={classes.nav_link}>Задание 1</Link>
                <Link to='/question/2' className={classes.nav_link}>Задание 2</Link>
                <Link to='/question/3' className={classes.nav_link}>Задание 3</Link>
            </div>
            <div className='my-2'></div>
            { props.children }
        </div>
    )
}

export default Layout
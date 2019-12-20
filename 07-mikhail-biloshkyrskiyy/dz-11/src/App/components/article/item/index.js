import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowCircleDown,
    faArrowCircleUp
} from '@fortawesome/free-solid-svg-icons'

import classes from './index.module.scss'

class Item extends Component {

    renderExtended(item, children) {
        return (
            <div className={classes.extended}>
                <div className={`m-0 ${classes.padding}`}>
                    <p className={'h4'}>Сводка: </p>
                    <p className={`h5 ${classes.marginLeft}`}>{item.description}</p>
                </div>
                <pre className={`m-0 ${classes.syntax} ${classes.padding}`}>
                    <p className={'h4'}>Синтаксис: </p>
                    <p className={`${classes.marginLeft} overflow-auto`}>{item.syntax}</p>
                    <p className={'h4'}>JavaScript Demo</p>
                    { children }
                </pre>
            </div >
        )
    }
    render() {

        const { item, extended, children } = this.props

        return (
            <div className={classes.item}>
                {extended ?
                    <Link to='/' className={classes.link}>
                        <div className={`${classes.title} ${classes.padding}`}>
                            {item.name}
                            <FontAwesomeIcon icon={faArrowCircleDown} />
                        </div>
                    </Link> :
                    <Link to={`/arrayMethod/${item.id}`} className={classes.link}>
                        <div className={`${classes.title} ${classes.padding}`}>
                            {item.name}
                            <FontAwesomeIcon icon={faArrowCircleUp} />
                        </div>
                    </Link>
                }
                {extended ? this.renderExtended(item, children) : null}
                {extended ?
                    <Link to='/' className={classes.link}>
                        <div className={`h6 ${classes.padding}`}>Method: {item.method}</div>
                    </Link> :
                    <Link to={`/arrayMethod/${item.id}`} className={classes.link}>
                        <div className={`h6 ${classes.padding}`}>Method: {item.method}</div>
                    </Link>
                }
            </div>
        )
    }
}

export default Item
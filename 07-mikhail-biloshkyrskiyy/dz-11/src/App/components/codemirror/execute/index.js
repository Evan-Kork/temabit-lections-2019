import React from 'react'

import classes from './index.module.scss'

export default ({code}) => {
    return (
        <iframe className={classes.iframe} srcDoc={`<script>${code}</script>`}>
            <p>Your browser does not support iframes.</p>
        </iframe>
    )
}
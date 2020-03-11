import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import { Card as MaterialCard } from '@material-ui/core'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { iButton } from '@/interfaces/iUtils'
import classes from './index.module.scss'

// Interface indicates
// what parameters are in the component
interface iProps {
    faIcon: IconProp
    title: string
    text: string
    button1?: iButton
    button2?: iButton
}
const Card: React.FC<iProps> = (props: iProps) => {
    return (
        <MaterialCard className={classes.root}>
            <CardActionArea>
                <Box className={classes.media}>
                    <FontAwesomeIcon className={classes.icon} icon={props.faIcon} />
                </Box>
                <hr />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{props.title}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{props.text}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {props.button1 !== undefined ? <Link className={classes.link} to={props.button1.path}>{props.button1.title}</Link> : null}
                {props.button2 !== undefined ? <Link className={classes.link} to={props.button2.path}>{props.button2.title}</Link> : null}
            </CardActions>
        </MaterialCard>
    )
}

export default Card
import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
    root: {
        backgroundImage: `url(${require('./bc.png').default})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }
}))
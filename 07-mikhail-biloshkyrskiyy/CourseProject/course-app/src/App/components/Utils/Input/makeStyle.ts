import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        border: '1px solid white',
        backgroundColor: 'white',
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        right: 0,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000',
    },
    inputRoot: {
        color: '#000',
        width: '100%'
    },
    inputInput: {
        padding: theme.spacing(1, 7, 1, 1),
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}))
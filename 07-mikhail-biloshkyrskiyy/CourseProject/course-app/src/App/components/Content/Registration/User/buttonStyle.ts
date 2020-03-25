import Button from '@material-ui/core/Button'
import {
    withStyles,
    Theme
} from '@material-ui/core/styles'

const ColorButton = withStyles((theme: Theme) => ({
    root: {
        color: theme.palette.getContrastText('#4c5dc3'),
        backgroundColor: '#4c5dc3',
        '&:hover': {
            backgroundColor: '#303f9f',
        },
    },
}))(Button)

export default ColorButton
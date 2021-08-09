import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    text: {
        color: '#ccc',
    },
    greenButton: {
        backgroundColor: theme.palette.primary.main,
    },
    redButton: {
        backgroundColor: theme.palette.secondary.main,
    },
    yellowButton: {
        backgroundColor: '#ff0',
    },
    blankButton: {
        backgroundColor: '#ccc',
    },
    selectedPage: {
        borderColor: '#0ff',
        borderWidth: '3px',
    },
}));
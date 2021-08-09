import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    text: {
        color: '#ccc',
    },
    greenButton: {
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.down('md')]: {
            width: '60vw',
        },
        [theme.breakpoints.up('lg')]: {
            width: '21vw',
        },
    },
    redButton: {
        backgroundColor: theme.palette.secondary.main,
        [theme.breakpoints.down('md')]: {
            width: '60vw',
        },
        [theme.breakpoints.up('lg')]: {
            width: '21vw',
        },
    },
    yellowButton: {
        backgroundColor: '#ff0',
        [theme.breakpoints.down('md')]: {
            width: '60vw',
        },
        [theme.breakpoints.up('lg')]: {
            width: '21vw',
        },
    },
    blankButton: {
        backgroundColor: '#ccc',
        [theme.breakpoints.down('md')]: {
            width: '60vw',
        },
        [theme.breakpoints.up('lg')]: {
            width: '21vw',
        },
    },
    selectedPage: {
        borderColor: '#0ff',
        borderWidth: '3px',
    },
    comicDoneButton: {
        marginTop: theme.spacing(1),
    },
    checkIcon: {
        color: theme.palette.primary.main,
        backgroundColor: '#fff',
        outline: '5px solid #555',
        outlineOffset: '-3px',
    },
    redCheckIcon: {
        color: '#f00',
        backgroundColor: '#fff',
        outline: '5px solid #555',
        outlineOffset: '-3px',
    },
}));
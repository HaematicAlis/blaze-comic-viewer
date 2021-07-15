import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    outerContainer: {
        borderRadius: '5px',
        backgroundColor: '#888',
        filter: 'drop-shadow(-10px 4px 8px #000)',
        padding: theme.spacing(1),
        [theme.breakpoints.down('md')]: {
            height: '44vh',
        },
        [theme.breakpoints.up('lg')]: {
            height: '33vh',
        },
    },
    thumbnail: {
        maxWidth: '100%',
        border: '3px solid black',
        borderRadius: '5px',
        [theme.breakpoints.down('md')]: {
            maxHeight: '42vh',
        },
        [theme.breakpoints.up('lg')]: {
            maxHeight: '26vh',
        },
    },
    titleText: {
        color: 'white',
    },
    popupBox: {
        padding: theme.spacing(2),
    },
}));
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    outerContainer: {
        backgroundColor: '#888',
        [theme.breakpoints.down('md')]: {
            width: '100vw',
            height: '95vh',
        },
        [theme.breakpoints.up('lg')]: {
            width: '30vw',
            minHeight: '95vh',
            filter: 'drop-shadow(-30px 0px 20px #000)',
            borderRadius: '5px',
        }
    },
    previewPaper: {
        padding: theme.spacing(5),
        marginBottom: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing(3),
            width: '60vw',
        },
        [theme.breakpoints.up('lg')]: {
            marginTop: '20vh',
            marginLeft: '3vw',
            marginRight: '3vw',
            height: '40vh',
        },
    },
}));
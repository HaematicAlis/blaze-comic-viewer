import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    outerContainer: {
        backgroundColor: '#fdf',
        [theme.breakpoints.down('md')]: {
            width: '100vw',
            height: '100vh',
        },
        [theme.breakpoints.up('lg')]: {
            width: '30vw',
            minHeight: '100vh',
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
            height: '40vh',
        },
    },
}));
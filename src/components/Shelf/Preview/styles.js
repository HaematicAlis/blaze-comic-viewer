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
            height: '100vh',
        }
    },
    previewPaper: {
        padding: theme.spacing(5),
        height: '40vh',
        marginTop: '20vh',
        marginBottom: theme.spacing(3),
    },
}));
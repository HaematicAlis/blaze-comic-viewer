import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    outerContainer: {
        backgroundColor: '#fdf',
        [theme.breakpoints.down('sm')]: {
            width: '100vw',
        },
        [theme.breakpoints.up('md')]: {
            width: '40vw',
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
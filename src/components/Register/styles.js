import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    outerContainer: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        backgroundColor: theme.palette.background,
        padding: theme.spacing(6, 0, 8),
    },
    registerFields: {
        padding: theme.spacing(2),
    },
    submitBox: {
        marginTop: theme.spacing(3),
        margin: '0 auto',
        width: '200px',
    }
}));
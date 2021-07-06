import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    outerContainer: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        padding: theme.spacing(6, 0, 8),
    },
    loginFields: {
        padding: theme.spacing(2),
    },
    submitBox: {
        padding: theme.spacing(3),
    },
}));
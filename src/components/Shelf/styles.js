import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    outerContainer: {
        width: '100vw',
        height: '100vh',
    },
    appbar: {
        backgroundColor: '#333',
        height: '50px',
    },
    toolbarPageControl: {
        marginRight: theme.spacing(2),
        flex: 1,
    },
    toolbarButton: {
        marginRight: theme.spacing(2),
    },
}));
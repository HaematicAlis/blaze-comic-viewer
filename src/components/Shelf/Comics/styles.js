import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    outerContainer: {
        backgroundColor: '#ddf',
        [theme.breakpoints.down('sm')]: {
            width: '100vw',
        },
        [theme.breakpoints.up('md')]: {
            width: '60vw',
            height: '100vh',
        }
    },
}));
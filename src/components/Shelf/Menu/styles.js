import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    outerContainer: {
        backgroundColor: '#333',
        padding: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            width: '100vw',
        },
        [theme.breakpoints.up('lg')]: {
            width: '30vw',
            minHeight: '95vh',
            filter: 'drop-shadow(-30px 0px 20px #000)',
            borderRadius: '5px',
        },
    },
}));
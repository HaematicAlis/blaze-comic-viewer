import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    outerContainer: {
        backgroundColor: '#ddf',
        [theme.breakpoints.down('md')]: {
            width: '100vw',
            height: '100vh',
        },
        [theme.breakpoints.up('lg')]: {
            width: '70vw',
            height: '100vh',
        }
    },
    comicImage: {
        border: '3px solid black',
        [theme.breakpoints.down('md')]: {
            width: '60vw',
        },
        [theme.breakpoints.up('lg')]: {
            height: '80vh',
        }
    },
}));
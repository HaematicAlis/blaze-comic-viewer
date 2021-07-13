import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    outerContainer: {
        backgroundColor: '#ddf',
        [theme.breakpoints.down('md')]: {
            width: '100vw',
        },
        [theme.breakpoints.up('lg')]: {
            width: '70vw',
            minHeight: '100vh',
        },
    },
    comicImage: {
        border: '3px solid black',
        height: '90vh',
    },
    comicImageWide: {
        border: '3px solid black',
        [theme.breakpoints.down('md')]: {
            width: '90vw',
        },
        [theme.breakpoints.up('lg')]: {
            width: '60vw',
        }
    }
}));
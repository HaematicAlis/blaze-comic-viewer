import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    outerContainer: {
        backgroundColor: '#333',
        paddingTop: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            minWidth: '100vw',
        },
        [theme.breakpoints.up('lg')]: {
            width: '70vw',
            minHeight: '95vh',
        },
    },
    comicImage: {
        border: '3px solid',
        borderColor: theme.palette.secondary.main,
        filter: 'drop-shadow(-10px 4px 8px #000)',
        height: '90vh',
        marginBottom: theme.spacing(3),
    },
    comicImageWide: {
        border: '3px solid',
        borderColor: theme.palette.secondary.main,
        filter: 'drop-shadow(-10px 4px 8px #000)',
        marginBottom: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            width: '90vw',
        },
        [theme.breakpoints.up('lg')]: {
            width: '60vw',
        }
    }
}));
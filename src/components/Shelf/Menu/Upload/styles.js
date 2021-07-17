import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    outerContainer: {
        
    },
    previewPaper: {
        padding: theme.spacing(5),
        margin: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing(3),
            width: '70vw',
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft: '1vw',
            marginRight: '1vw',
        },
    },
}));
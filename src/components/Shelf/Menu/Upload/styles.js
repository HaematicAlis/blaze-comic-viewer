import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    outerContainer: {
        
    },
    previewPaper: {
        align: 'center',
        padding: theme.spacing(5),
        margin: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing(3),
            width: '60vw',
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft: '3vw',
            marginRight: '3vw',
        },
    },
}));
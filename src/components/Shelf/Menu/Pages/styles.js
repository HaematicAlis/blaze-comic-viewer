import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    text: {
        color: '#ccc',
    },
    greenButton: {
        backgroundColor: theme.palette.primary.main,
    },
    blankButton: {
        backgroundColor: '#ccc',
    },
    selectedPage: {
        borderColor: '#0ff',
        borderRadius: '5px',
    },
}));
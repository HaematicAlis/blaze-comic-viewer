import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    wordAccordion: {
        backgroundColor: '#ccc',
    },
    vocabInfoGrid: {
        marginTop: theme.spacing(2),
    },
    congratsText: {
        color: theme.palette.primary.main,
        padding: theme.spacing(1),
    },
    checkIcon: {
        color: theme.palette.primary.main,
    },
}));
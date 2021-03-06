import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    outerContainer: {
        borderRadius: '5px',
        backgroundColor: '#555',
        position: 'relative',
        filter: 'drop-shadow(-10px 4px 8px #000)',
        margin: theme.spacing(3),
        padding: theme.spacing(1),
        width: '200px',
        height: '350px',
    },
    thumbnail: {
        maxWidth: '100%',
        maxHeight: '100%',
        border: '3px solid',
        borderColor: '#222',
        borderRadius: '5px',
    },
    doneThumbnail: {
        maxWidth: '100%',
        maxHeight: '100%',
        border: '3px solid',
        borderColor: theme.palette.primary.main,
        borderRadius: '5px',
    },
    titleText: {
        color: '#ccc',
    },
    bottomBar: {
        position: 'absolute',
        bottom: '0%',
        padding: theme.spacing(1),
    },
    albumButton: {
        flex: '1',
    },
    deleteButton: {
        marginRight: theme.spacing(2),
    },
    albumIcon: {
        color: '#ccc',
    },
    checkIcon: {
        color: theme.palette.primary.main,
    },
    deleteIcon: {
        color: theme.palette.secondary.main,
    },
}));
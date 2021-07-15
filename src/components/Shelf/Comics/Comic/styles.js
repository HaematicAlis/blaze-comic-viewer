import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    outerContainer: {
        borderRadius: '5px',
        backgroundColor: '#888',
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
        border: '3px solid black',
        borderRadius: '5px',
    },
    titleText: {
        color: 'white',
    },
    bottomBar: {
        position: 'absolute',
        bottom: '0%',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
}));
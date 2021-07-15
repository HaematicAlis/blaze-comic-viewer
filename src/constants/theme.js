import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Roboto',
            'sans-serif',
        ].join(','),     
    },
    palette: {
        primary: green,
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                body: {
                    backgroundColor: '#333',
                },
                '.MuiDrawer-paperAnchorRight': {
                    backgroundColor: '#fdf',
                },
            },
        },
        MuiDrawer: {
            paper: {
                backgroundColor: '#333',
            },
        },
        MuiBackdrop: {
            root: {
                opacity: '0.0',
            },
        },
    },
});

export default theme;
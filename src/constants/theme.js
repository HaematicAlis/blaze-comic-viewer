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
            },
        },
    },
});

export default theme;
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Revalia',
            'cursive',
        ].join(','),     
    },
    palette: {
        primary: green,
    },
});

export default theme;
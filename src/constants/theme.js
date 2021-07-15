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
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1920,
        },
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
                height: '240px',
                borderRadius: '5px',
            },
        },
    },
});

export default theme;
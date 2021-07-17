import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import pink from '@material-ui/core/colors/pink';

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Roboto',
            'sans-serif',
        ].join(','),     
    },
    palette: {
        primary: green,
        secondary: pink,
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
                    backgroundColor: '#222',
                },
            },
        },
        MuiPaper: {
            root: {
                backgroundColor: '#ccc',
            },
        },
        MuiDrawer: {
            paper: {
                backgroundColor: '#222',
                height: '240px',
                borderRadius: '5px',
            },
        },
        MuiAccordion: {
            root: {
                backgroundColor: '#555',
                color: '#ccc',
            },
        },
    },
});

export default theme;
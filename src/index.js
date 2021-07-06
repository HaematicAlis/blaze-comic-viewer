import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Cookies from 'universal-cookie';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './App.js';
import reducers from './reducers';
import theme from './constants/theme.js';

export const cookies = new Cookies();

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById("root")
);
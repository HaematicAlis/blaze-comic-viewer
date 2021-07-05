import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Register from './components/Register/Register.js';
import Login from './components/Login/Login.js';

const App = () => {
    return (
        <Router basename={'/'}>
            <Switch>
                <Route exact path="/" component={Register} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </Router>
    );
}

export default App;
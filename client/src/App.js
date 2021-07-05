import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Register from './components/Register/Register.js';
import Login from './components/Login/Login.js';
import Shelf from './components/Shelf/Shelf.js';

const App = () => {
    return (
        <Router basename={'/'}>
            <Switch>
                <Route exact path="/" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/shelf" component={Shelf} />
            </Switch>
        </Router>
    );
}

export default App;
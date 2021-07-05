import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { cookies } from '../../index.js';
import { login } from '../../actions/account.js';

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({ username: '', password: '' });
    const [message, setMessage] = useState("");
    const session = useSelector((state) => state.session);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        setMessage(session.message);
    }, [session]);

    const doLogin = () => {
        dispatch(login(loginInfo))
        .then((response) => {
            if (cookies.get('ID')) {
                console.log(cookies.get('ID'));
                console.log(cookies.get('Username'));
                history.push('/shelf');
            }
        });
    }

    return (
        <div>
            <h1>Login</h1>
            Username:&nbsp;
            <input type="text" id="loginUsername" onChange={(e) => setLoginInfo({ ...loginInfo, username: e.target.value })}></input><br></br>
            Password:&nbsp;
            <input type="text" id="loginPassword" onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}></input><br></br>
            <button type="button" id="loginButton" onClick={doLogin}>Login</button><br></br>
            <Link to="/"><p>Don't have an account? Click here to register.</p></Link><br></br>
            <div id="loginStatus">{message}</div>
        </div>
    );
}

export default Login;
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { login, logout } from '../../actions/account.js';

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({ username: '', password: '' });
    const [message, setMessage] = useState("");
    const session = useSelector((state) => state.session);
    const dispatch = useDispatch();

    useEffect(() => {
        setMessage(session.message);
    }, [session]);

    const doLogin = () => {
        dispatch(login(loginInfo));
    }

    const doLogout = () => {
        if (session.username) {
            dispatch(logout());
        }
    }

    return (
        <div>
            <h1>Login</h1>
            Username:&nbsp;
            <input type="text" id="loginUsername" onChange={(e) => setLoginInfo({ ...loginInfo, username: e.target.value })}></input><br></br>
            Password:&nbsp;
            <input type="text" id="loginPassword" onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}></input><br></br>
            <button type="button" id="loginButton" onClick={doLogin}>Login</button>
            <button type="button" id="logoutButton" onClick={doLogout}>Logout</button><br></br>
            <Link to="/"><p>Don't have an account? Click here to register.</p></Link><br></br>
            <div id="loginStatus">{message}</div>
        </div>
    );
}

export default Login;
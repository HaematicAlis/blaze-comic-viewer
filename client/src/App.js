import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { register } from './api';
import { login, logout } from './actions/account.js';

const App = () => {
    const [registerInfo, setRegisterInfo] = useState({ username: '', password: '' });
    const [message, setMessage] = useState("");
    const session = useSelector((state) => state.session);
    const dispatch = useDispatch();

    useEffect(() => {
        setMessage(session.message);
    }, [session]);

    const doRegister = async () => {
        const { data, status } = await register(registerInfo);
        if (status === 201) {
            setMessage(`${data.username} has registered`);
        } else {
            setMessage("Error during registration");
        }
    }

    const doLogin = () => {
        dispatch(login(registerInfo));
    }

    const doLogout = () => {
        if (session.username) {
            dispatch(logout());
        }
    }

    return (
        <div>
            Username: 
            <input type="text" id="username" onChange={(e) => setRegisterInfo({ ...registerInfo, username: e.target.value })}></input><br></br>
            Password: 
            <input type="text" id="password" onChange={(e) => setRegisterInfo({ ...registerInfo, password: e.target.value })}></input><br></br>
            <button type="button" id="registerButton" onClick={doRegister}>Register</button>
            <button type="button" id="loginButton" onClick={doLogin}>Login</button>
            <button type="button" id="logoutButton" onClick={doLogout}>Logout</button><br></br>
            <div id="loginStatus">{message}</div>
        </div>
    );
}

export default App;
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { register } from './api';
import { login } from './actions/account.js';

const App = () => {
    const [registerInfo, setRegisterInfo] = useState({ username: '', password: '' });
    const session = useSelector((state) => state.session);
    const dispatch = useDispatch();

    const doRegister = async () => {
        const { data, status } = await register(registerInfo);
        if (status === 201) {
            alert(`${data.username} has registered`);
        } else {
            alert('Error during registration');
        }
    }

    const doLogin = () => {
        dispatch(login(registerInfo));
    }

    return (
        <div>
            Username: 
            <input type="text" id="username" onChange={(e) => setRegisterInfo({ ...registerInfo, username: e.target.value })}></input><br></br>
            Password: 
            <input type="text" id="password" onChange={(e) => setRegisterInfo({ ...registerInfo, password: e.target.value })}></input><br></br>
            <button type="button" id="registerButton" onClick={doRegister}>Register</button>
            <button type="button" id="loginButton" onClick={doLogin}>Login</button><br></br>
            <div id="loginStatus">{session.username ? `Logged in as: ${session.username}` : `${session.message}`}</div>
        </div>
    );
}

export default App;
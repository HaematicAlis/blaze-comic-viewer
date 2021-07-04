import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { register, login } from './actions/account.js';

const App = () => {
    const [registerInfo, setRegisterInfo] = useState({ username: '', password: '' });
    const dispatch = useDispatch();

    const doRegister = () => {
        dispatch(register(registerInfo));
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
            <button type="button" id="loginButton" onClick={doLogin}>Login</button>
        </div>
    );
}

export default App;
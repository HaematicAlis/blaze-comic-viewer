import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { register } from '../../api';

const Register = () => {
    const [registerInfo, setRegisterInfo] = useState({ username: '', password: '' });
    const [message, setMessage] = useState("");
    const session = useSelector((state) => state.session);

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

    return (
        <div>
            <h1>Register</h1>
            Username:&nbsp;
            <input type="text" id="username" onChange={(e) => setRegisterInfo({ ...registerInfo, username: e.target.value })}></input><br></br>
            Password:&nbsp;
            <input type="text" id="password" onChange={(e) => setRegisterInfo({ ...registerInfo, password: e.target.value })}></input><br></br>
            <button type="button" id="registerButton" onClick={doRegister}>Register</button><br></br>
            <Link to="/login"><p>Click here to login.</p></Link><br></br>
            <div id="loginStatus">{message}</div>
        </div>
    );
}

export default Register;
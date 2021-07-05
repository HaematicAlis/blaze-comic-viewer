import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import validator from 'validator';

import { cookies } from '../../index.js'
import { register } from '../../api';
import { reload } from '../../actions/account.js';

import './Register.css';

const Register = () => {
    const [registerInfo, setRegisterInfo] = useState({ username: '', password: '', email: '' });
    const [message, setMessage] = useState("");
    const session = useSelector((state) => state.session);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (cookies.get('Username')) {
            dispatch(reload({ id: cookies.get('ID'), username: cookies.get('Username') }))
            .then((response) => {
                history.push('/shelf');
            });
        }
    }, [dispatch, history]);

    useEffect(() => {
        setMessage(session.message);
    }, [session]);

    const doRegister = async () => {
        if (registerInfo.username === '' || registerInfo.password === '' || registerInfo.confirmPassword === '' || registerInfo.email === '') {
            setMessage('Must fill out all fields');
            return;
        }
        if (registerInfo.password !== registerInfo.confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }
        if (!validator.isEmail(registerInfo.email)) {
            setMessage('Invalid email');
            return;
        }

        try {
            const { data } = await register({ username: registerInfo.username, password: registerInfo.password, email: registerInfo.email });
            setMessage(`${data.username} has registered`);
        } catch (error) {
            setMessage(error.response.data.message);
        }
    }

    return (
        <div id="outerContainer">
            <h1>Register</h1>
            <div id="registerLabels">
                <p>Username:&nbsp;</p>
                <p>Password:&nbsp;</p>
                <p>Confirm Password:&nbsp;</p>
                <p>Email:&nbsp;</p>
            </div>
            <div id="registerFields">
                <input type="text" id="registerUsername" onChange={(e) => setRegisterInfo({ ...registerInfo, username: e.target.value })}></input><br></br>
                <input type="password" id="registerPassword" onChange={(e) => setRegisterInfo({ ...registerInfo, password: e.target.value })}></input><br></br>
                <input type="password" id="registerConfirmPassword" onChange={(e) => setRegisterInfo({ ...registerInfo, confirmPassword: e.target.value })}></input><br></br>
                <input type="text" id="registerEmail" onChange={(e) => setRegisterInfo({ ...registerInfo, email: e.target.value })}></input><br></br>
            </div>
            <div id="submitBox">
                <button type="button" id="registerButton" onClick={doRegister}>Register</button><br></br>
                <Link to="/login"><p>Click here to login.</p></Link><br></br>
                <div id="registerStatus">{message}</div>
            </div>
        </div>
    );
}

export default Register;
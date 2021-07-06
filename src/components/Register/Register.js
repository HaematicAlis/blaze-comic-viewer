import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import validator from 'validator';

import { cookies } from '../../index.js'
import { register } from '../../api';
import { reload } from '../../actions/account.js';

import useStyles from './styles.js';
import { Button, Paper, Container, TextField, Typography } from '@material-ui/core';

const Register = () => {
    const [registerInfo, setRegisterInfo] = useState({ username: "", password: "", confirmPassword: "", email: "" });
    const [message, setMessage] = useState({ username: "", password: "", confirmPassword: "", email: "", status: "" });
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        if (cookies.get('Username')) {
            dispatch(reload({ id: cookies.get('ID'), username: cookies.get('Username') }))
            .then((response) => {
                history.push('/shelf');
            });
        }
    }, [dispatch, history]);

    const validateRegister = () => {
        let error = false;
        let username = '';
        let password = '';
        let confirmPassword = '';
        let email = '';

        if (registerInfo.username === '') {
            username = 'Must fill out all fields';
            error = true;
        }
        if (registerInfo.password === '') {
            password = 'Must fill out all fields';
            error = true;
        }
        if (registerInfo.confirmPassword === '') {
            confirmPassword = 'Must fill out all fields';
            error = true;
        }
        if (registerInfo.email === '') {
            email = 'Must fill out all fields';
            error = true;
        }
        if (error) {
            setMessage({ username: username, password: password, confirmPassword: confirmPassword, email: email, status: '' });
            return;
        }

        if (registerInfo.password !== registerInfo.confirmPassword) {
            setMessage({ username: '', password: 'Passwords do not match', confirmPassword: '', email: '', status: '' });
            return;
        }
        if (!validator.isEmail(registerInfo.email)) {
            setMessage({ username: '', password: '', confirmPassword: '', email: 'Invalid email', status: '' });
            return;
        }
        doRegister();
    }

    const doRegister = async () => {
        try {
            const { data } = await register({ username: registerInfo.username, password: registerInfo.password, email: registerInfo.email });
            setMessage({ ...message, status: `${data.username} has registered` });
        } catch (error) {
            setMessage({ ...message, status: error.response.data.message });
        }
    }

    return (
        <Container m={5} maxWidth="sm" className={classes.outerContainer}>
            <Paper elevation={5}>
                <Typography variant="h4">Register</Typography>
                <div className={classes.registerFields}>
                    <TextField label="Username" className={classes.registerField} error={message.username ? true : false} helperText={message.username ? message.username : ""} variant="outlined" onChange={(e) => setRegisterInfo({ ...registerInfo, username: e.target.value })}></TextField>
                    <TextField label="Password" error={message.password ? true : false} helperText={message.password ? message.password : ""} variant="outlined" onChange={(e) => setRegisterInfo({ ...registerInfo, password: e.target.value })}></TextField>
                    <TextField label="Confirm Password" error={message.confirmPassword ? true : false} helperText={message.passwordConfirm ? message.passwordConfirm : ""} variant="outlined" onChange={(e) => setRegisterInfo({ ...registerInfo, confirmPassword: e.target.value })}></TextField>
                    <TextField label="Email" error={message.email ? true : false} helperText={message.email ? message.email : ""} variant="outlined" onChange={(e) => setRegisterInfo({ ...registerInfo, email: e.target.value })}></TextField>
                </div>
                <div className={classes.submitBox}>
                    <Button variant="contained" color="primary" onClick={validateRegister}>Register</Button>
                    <Link to="/login"><p>Click here to login.</p></Link><br></br>
                    <div id="registerStatus">{message.status}</div>
                </div>
            </Paper>
        </Container>
    );
}

export default Register;
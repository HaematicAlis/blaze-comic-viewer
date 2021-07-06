import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import validator from 'validator';

import { cookies } from '../../index.js'
import { register } from '../../api';
import { reload } from '../../actions/account.js';

import { Button, Paper, Container, TextField, Typography, Grid } from '@material-ui/core';
import useStyles from './styles.js';

const Register = () => {
    const [registerInfo, setRegisterInfo] = useState({ username: '', password: '', confirmPassword: '', email: '' });
    const [message, setMessage] = useState({ username: '', password: '', confirmPassword: '', email: '', status: '' });
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        if (cookies.get('Username')) {
            dispatch(reload({ id: cookies.get('ID'), username: cookies.get('Username') }))
            .then(() => {
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
        <Container maxWidth="xs" className={classes.outerContainer}>
            <Paper className={classes.registerPaper} elevation={5}>
                <Grid container className={classes.registerFields} spacing={2} justify="center" direction="column">
                    <Grid item>
                        <Typography variant="h3" gutterBottom>Register</Typography>
                    </Grid>
                    <Grid item>
                        <TextField label="Username" variant="outlined" size="small"
                            error={message.username ? true : false}
                            helperText={message.username ? message.username : ""}
                            onChange={(e) => setRegisterInfo({ ...registerInfo, username: e.target.value })}>
                        </TextField>
                    </Grid>
                    <Grid item>
                        <TextField label="Password" variant="outlined" size="small"
                            error={message.password ? true : false}
                            helperText={message.password ? message.password : ""}
                            onChange={(e) => setRegisterInfo({ ...registerInfo, password: e.target.value })}>
                        </TextField>
                    </Grid>
                    <Grid item>
                        <TextField label="Confirm Password" variant="outlined" size="small"
                            error={message.confirmPassword ? true : false}
                            helperText={message.confirmPassword ? message.confirmPassword : ""}
                            onChange={(e) => setRegisterInfo({ ...registerInfo, confirmPassword: e.target.value })}>
                        </TextField>
                    </Grid>
                    <Grid item>
                        <TextField label="Email" variant="outlined" size="small"
                            error={message.email ? true : false}
                            helperText={message.email ? message.email : ""}
                            onChange={(e) => setRegisterInfo({ ...registerInfo, email: e.target.value })}>
                        </TextField>
                    </Grid>
                </Grid>
                <Container className={classes.submitBox}>
                    <Button variant="contained" color="primary" onClick={validateRegister}>Register</Button>
                    <Link to="/login"><p>Click here to login.</p></Link><br></br>
                    <Typography variant="body1">{message.status}</Typography>
                </Container>
            </Paper>
        </Container>
    );
}

export default Register;
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { cookies } from '../../index.js';
import { login } from '../../actions/account.js';

import { Paper, Container, Grid, Typography, Button, TextField } from '@material-ui/core';
import useStyles from './styles.js';

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({ username: '', password: '' });
    const [message, setMessage] = useState("");
    const session = useSelector((state) => state.session);
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        setMessage(session.message);
    }, [session]);

    const doLogin = () => {
        dispatch(login(loginInfo))
        .then((response) => {
            if (cookies.get('ID')) {
                history.push('/shelf');
            }
        });
    }

    return (
        <Container className={classes.outerContainer} maxWidth="xs">
            <Paper elevation={5}>
                <Grid container spacing={3} justify="center" direction="column">
                    <Grid item className={classes.loginFields}>
                        <Typography variant="h3" gutterBottom>Login</Typography>
                    </Grid>
                    <Grid item>
                        <TextField label="Username" variant="outlined" size="small"
                            onChange={(e) => setLoginInfo({ ...loginInfo, username: e.target.value })}>
                        </TextField>
                    </Grid>
                    <Grid item>
                        <TextField label="Password" variant="outlined" type="password" size="small"
                            onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}>
                        </TextField>
                    </Grid>
                </Grid>
                <Container className={classes.submitBox}>
                    <Button variant="contained" color="primary" onClick={doLogin}>Login</Button>
                    <Link to="/"><Typography className={classes.submitBox} variant="subtitle2">Don't have an account? Click here to register.</Typography></Link>
                    <Typography variant="body1">{message}</Typography>
                </Container>
            </Paper>
        </Container>
    );
}

export default Login;
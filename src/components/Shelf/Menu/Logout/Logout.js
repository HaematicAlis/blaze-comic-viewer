import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cookies } from '../../../../index.js';
import { logout } from '../../../../actions/account.js';
import { clearSelected } from '../../../../actions/selected.js';

import { Container, Grid, Typography, Button } from '@material-ui/core';

const Logout = () => {
    const session = useSelector((state) => state.session);
    const dispatch = useDispatch();

    const doLogout = () => {
        if (session.username) {
            dispatch(logout())
            .then(() => {
                cookies.remove('ID');
                cookies.remove('Username');
                dispatch(clearSelected());
            });
        }
    }

    return (
        <Container maxWidth={false}>
            <Grid container direction="column" align="center">
                <Grid item>
                    <Typography variant="h6" style={{color: '#ccc'}}>Are you sure you want to logout?</Typography>
                    <Button color="secondary" onClick={doLogout}>Yes</Button>
                    <Button color="secondary">No</Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Logout;
import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getComics } from '../../actions/comic.js';
import Preview from './Preview/Preview.js';
import Comics from './Comics/Comics.js';

import { Grid } from '@material-ui/core';
import useStyles from './styles.js';

const Shelf = () => {
    const session = useSelector((state) => state.session);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (session.id !== 0) {
            dispatch(getComics({ id: session.id }));
        }
    }, [dispatch, session.id]);

    const renderRedirect = () => {
        if (!session.username) {
            return <Redirect to="/" />
        }
    }

    return (
        <Grid container className={classes.outerContainer} direction="row">
            {renderRedirect()}
            <Grid item>
                <Comics />
            </Grid>
            <Grid item>
                <Preview />
            </Grid>
        </Grid>
    );
}

export default Shelf;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getComics } from '../../../../actions/comic.js';

import { Container, Grid, Button } from '@material-ui/core';

const Sort = () => {
    const session = useSelector((state) => state.session);
    const dispatch = useDispatch();

    const sortAlphabetical = () => {
        dispatch(getComics(session.id,  'alphabetical'));
    }

    const sortRevAlphabetical = () => {
        dispatch(getComics(session.id, 'revAlphabetical'));
    }

    return (
        <Container maxWidth={false}>
            <Grid container direction="column" align="center">
                <Grid item>
                    <Button variant="contained" color="secondary" onClick={sortAlphabetical}>Alphabetical</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="secondary" onClick={sortRevAlphabetical}>Reverse Alphabetical</Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Sort;
import React, { useState } from 'react';

import { Container, Grid, TextField, Button, Typography } from '@material-ui/core';

import useStyles from './styles.js';

const Dictionary = () => {
    const [search, setSearch] = useState('');
    const classes = useStyles();

    const doSearch = () => {
        window.open('https://jisho.org/search/' + search, '_blank');
    }

    const keyPress = (e) => {
        if (e.key === 'Enter') {
            doSearch();
        }
    }

    return (
        <Container maxWidth={false}>
            <Grid container direction="column" align="left">
                <Grid item>
                    <Typography variant="body1">Jisho.org:</Typography>
                </Grid>
                <Grid item>
                    <TextField className={classes.searchBox} onKeyDown={keyPress} color="secondary" onChange={(e) => setSearch(e.target.value)}></TextField>
                </Grid>
                <Grid item>
                    <Button color="secondary" onClick={doSearch}>Search</Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Dictionary;
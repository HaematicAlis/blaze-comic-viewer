import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getComics } from '../../../../actions/comic.js';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import HistoryIcon from '@material-ui/icons/History';
import UpdateIcon from '@material-ui/icons/Update';
import { Container, Grid, Button } from '@material-ui/core';
import useStyles from './styles.js';

const Sort = () => {
    const [sort, setSort] = useState('-dateCreated');
    const session = useSelector((state) => state.session);
    const dispatch = useDispatch();
    const classes = useStyles();

    const sortAlphabetical = () => {
        setSort('name');
        dispatch(getComics(session.id,  'name'));
    }

    const sortRevAlphabetical = () => {
        setSort('-name');
        dispatch(getComics(session.id, '-name'));
    }

    const sortDate = () => {
        setSort('-dateCreated');
        dispatch(getComics(session.id, '-dateCreated'));
    }

    const sortRevDate = () => {
        setSort('dateCreated');
        dispatch(getComics(session.id, 'dateCreated'));
    }

    return (
        <Container maxWidth={false}>
            <Grid container direction="column" align="center">
                <Grid item>
                    <Button className={classes.sortButton} variant={sort === 'name' ? 'contained' : 'outlined'} size="small" color="secondary" onClick={sortAlphabetical}><ArrowUpwardIcon />&nbsp;Alphabetical</Button>
                </Grid>
                <Grid item>
                    <Button className={classes.sortButton} variant={sort === '-name' ? 'contained' : 'outlined'} size="small" color="secondary" onClick={sortRevAlphabetical}><ArrowDownwardIcon />&nbsp;Reverse Alphabetical</Button>
                </Grid>
                <Grid item>
                    <Button className={classes.sortButton} variant={sort === '-dateCreated' ? 'contained' : 'outlined'} size="small" color="secondary" onClick={sortDate}><UpdateIcon />&nbsp;Newest First</Button>
                </Grid>
                <Grid item>
                    <Button className={classes.sortButton} variant={sort === 'dateCreated' ? 'contained' : 'outlined'} size="small" color="secondary" onClick={sortRevDate}><HistoryIcon />&nbsp;Oldest First</Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Sort;
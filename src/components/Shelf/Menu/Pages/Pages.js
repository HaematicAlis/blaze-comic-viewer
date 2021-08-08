import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setPage } from '../../../../actions/page.js';

import { Container, Grid, Typography, Button } from '@material-ui/core';
import useStyles from './styles.js';

const Pages = () => {
    const [vocabStates, setVocabStates] = useState([0])
    const selected = useSelector((state) => state.selected);
    const page = useSelector((state) => state.page);
    const vocab = useSelector((state) => state.vocab);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        var arr = [];
        selected.images.forEach((image, index) => {
            var found = false;
            vocab.forEach((word) => {
                if (!found && word.page === index) {
                    arr.push(1);
                    found = true;
                }
            });
            if (!found) {
                arr.push(0);
            }
        });
        setVocabStates(arr);
    }, [vocab, selected]);

    const doSetPage = (page) => {
        dispatch(setPage(page));
    }

    const getVocabState = (index) => {
        switch (vocabStates[index]) {
            case 0:
                if (page === index) {
                    return `${classes.blankButton} ${classes.selectedPage}`;
                } else {
                    return classes.blankButton;
                }
            case 1:
                if (page === index) {
                    return `${classes.greenButton} ${classes.selectedPage}`;
                } else {
                    return classes.greenButton;
                }
            default:
                return classes.blankButton;
        }
    }

    const markDone = (index) => {
        vocabStates[index] = 1;
    }

    return (
        <Container maxWidth={false}>
            <Grid container direction="column" align="center">
                <Grid item>
                    {selected.images[page] ? (<>
                            {selected.images.map((image, index) => {
                                return(
                                    <Grid container key={index} direction="row" align="center">
                                        <Grid item>
                                            <Button variant="outlined" className={getVocabState(index)} onClick={() => doSetPage(index)}>Page {index+1}</Button>
                                        </Grid>
                                        <Grid item>
                                            <Button variant="outlined" color="secondary" onClick={() => markDone(index)}>Done</Button>
                                        </Grid>
                                    </Grid>
                                );
                            })}
                        </>
                    ) : <Typography variant="body1" className={classes.text}>Not viewing any comic.</Typography>}
                </Grid>
            </Grid>
        </Container>
    );
}

export default Pages;
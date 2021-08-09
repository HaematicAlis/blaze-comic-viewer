import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setPage } from '../../../../actions/page.js';
import { setDone, setComicDone } from '../../../../actions/comic.js';

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
                    found = true;
                    if (image.done) {
                        arr.push(2);
                    } else {
                        arr.push(3);
                    }
                }
            });
            if (!found) {
                if (!image.done) {
                    arr.push(0);
                } else {
                    arr.push(1);
                }
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
            case 2:
                if (page === index) {
                    return `${classes.redButton} ${classes.selectedPage}`;
                } else {
                    return classes.redButton;
                }
            case 3:
                if (page === index) {
                    return `${classes.yellowButton} ${classes.selectedPage}`;
                } else {
                    return classes.yellowButton;
                }
            default:
                return classes.blankButton;
        }
    }

    const markDone = (index) => {
        if (selected.images[index].done) {
            dispatch(setDone(selected._id, index, false));
        } else {
            dispatch(setDone(selected._id, index, true));
        }
    }

    const markComicDone = () => {
        if (selected.done) {
            dispatch(setComicDone(selected._id, false));
        } else {
            dispatch(setComicDone(selected._id, true));
        }
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
                                            <Button variant="outlined" color={selected.images[index].done ? "primary" : "secondary"} onClick={() => markDone(index)}>Done</Button>
                                        </Grid>
                                    </Grid>
                                );
                            })}
                            <Button variant="outlined" color={selected.done ? "primary" : "secondary"} onClick={markComicDone}>{selected.done ? 'Mark Comic New' : 'Mark Comic Done'}</Button>
                        </>
                    ) : <Typography variant="body1" className={classes.text}>Not viewing any comic.</Typography>}
                </Grid>
            </Grid>
        </Container>
    );
}

export default Pages;
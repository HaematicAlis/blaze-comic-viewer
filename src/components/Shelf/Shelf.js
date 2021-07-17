import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getComics } from '../../actions/comic.js';
import { clearSelected } from '../../actions/selected.js';
import { setPage } from '../../actions/page.js';
import { setMode } from '../../actions/viewOptions.js';
import Menu from './Menu/Menu.js';
import Comics from './Comics/Comics.js';

import { Grid, AppBar, Toolbar, IconButton, Container } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles.js';
import { cookies } from '../../index.js';

const Shelf = () => {
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const session = useSelector((state) => state.session);
    const selected = useSelector((state) => state.selected);
    const viewOptions = useSelector((state) => state.viewOptions);
    const page = useSelector((state) => state.page);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = 'Shelf';
        let sb = cookies.get('Sidebar');
        sb && setSidebarVisible(sb === 'true');
        if (session.id !== 0) {
            dispatch(getComics(session.id));
        }
    }, [dispatch, session.id]);

    const renderRedirect = () => {
        if (!session.username) {
            return <Redirect to="/" />
        }
    }

    const doClear = () => {
        dispatch(clearSelected());
    }

    const doToggleView = () => {
        if (viewOptions.mode) {
            dispatch(setMode(0));
        } else {
            dispatch(setMode(1));
        }
    }

    function doPrev() {
        if (page > 0) {
            dispatch(setPage(page - 1));
        }
    }

    const doNext = () => {
        if (page < selected.length - 1) {
            dispatch(setPage(page + 1));
        }
    }

    const toggleSidebar = () => {
        cookies.set('Sidebar', sidebarVisible ? false : true, { secure: true });
        sidebarVisible ? setSidebarVisible(false) : setSidebarVisible(true);
    }

    return (
        <Grid container className={classes.outerContainer} direction="row-reverse">
            {renderRedirect()}
            <AppBar className={classes.appbar} position="static" color="secondary">
                <Toolbar variant="dense">
                    <Grid container className={classes.toolbarPageControl} direction="row">
                        <Grid item>
                            <IconButton className={classes.toolbarButton} size="small" color="secondary" onClick={() => dispatch(setPage(0))}><SkipPreviousIcon/></IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton className={classes.toolbarButton} size="small" color="secondary" onClick={doPrev}><NavigateBeforeIcon /></IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton className={classes.toolbarButton} size="small" color="secondary">{`${page+1}/${selected.length}`}</IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton className={classes.toolbarButton} size="small" color="secondary" onClick={doNext}><NavigateNextIcon /></IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton className={classes.toolbarButton} size="small" color="secondary" onClick={() => dispatch(setPage(selected.length-1))}><SkipNextIcon /></IconButton>
                        </Grid>
                    </Grid>
                    <IconButton className={classes.toolbarButton} size="small" color="secondary" onClick={doClear}><HomeIcon /></IconButton>
                    <IconButton className={classes.toolbarButton} size="small" color="secondary" onClick={doToggleView}>{viewOptions.mode ? <ZoomOutIcon /> : <ZoomInIcon />}</IconButton>
                    <IconButton className={classes.toolbarButton} edge="end" size="small" color="secondary" onClick={toggleSidebar}>{sidebarVisible ? <ClearAllIcon /> : <MenuIcon />}</IconButton>
                </Toolbar>
            </AppBar>
            <Grid item>
                {sidebarVisible ? <Menu /> : <Container style={{width: '15vw'}}><></></Container>}
            </Grid>
            <Grid item>
                <Comics />
            </Grid>
        </Grid>
    );
}

export default Shelf;
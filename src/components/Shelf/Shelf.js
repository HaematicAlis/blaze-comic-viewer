import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { cookies } from '../../index.js';
import { logout } from '../../actions/account.js';
import { getComics } from '../../actions/comic.js';
import { clearSelected } from '../../actions/selected.js';
import { setPage } from '../../actions/page.js';
import { setMode } from '../../actions/viewOptions.js';
import Preview from './Preview/Preview.js';
import Comics from './Comics/Comics.js';

import { Grid, AppBar, Toolbar, Button, IconButton, Container, Drawer, Divider } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import ClearIcon from '@material-ui/icons/Clear';
import HomeIcon from '@material-ui/icons/Home';
import ImageIcon from '@material-ui/icons/Image';
import AddIcon from '@material-ui/icons/Add';
import MinimizeIcon from '@material-ui/icons/Minimize';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles.js';

const Shelf = () => {
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [drawerState, setDrawerState] = useState(false);
    const session = useSelector((state) => state.session);
    const selected = useSelector((state) => state.selected);
    const viewOptions = useSelector((state) => state.viewOptions);
    const page = useSelector((state) => state.page);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (session.id !== 0) {
            dispatch(getComics({ id: session.id }));
        }
    }, [dispatch, session.id]);

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

    const getInfo = () => {
        let image = selected[page];
        image ? alert(`Name: ${image.name}\nSize: ${image.size}\nType: ${image.fileType}`) : alert('Not viewing any image.');
    }

    const toggleSidebar = () => {
        sidebarVisible ? setSidebarVisible(false) : setSidebarVisible(true);
    }

    const toggleDrawer = () => {
        drawerState ? setDrawerState(false) : setDrawerState(true);
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
                    <IconButton className={classes.toolbarButton} edge="end" size="small" color="secondary" onClick={toggleDrawer}><MenuIcon /></IconButton>
                    <Drawer variant="persistent" anchor="right" open={drawerState}>
                        <IconButton className={classes.toolbarButton} fullWidth color="secondary" onClick={toggleDrawer}><ClearIcon /></IconButton>
                        <Divider />
                        <Button className={classes.toolbarButton} color="secondary" onClick={doClear}><HomeIcon />&nbsp;Home</Button>
                        <Button className={classes.toolbarButton} color="secondary" onClick={toggleSidebar}>{sidebarVisible ? <><MinimizeIcon />&nbsp;Close Info</> : <><AddIcon />&nbsp;Open Info</>}</Button>
                        <Button className={classes.toolbarButton} color="secondary" onClick={getInfo}><ImageIcon />&nbsp;Image Data</Button>
                        <Button className={classes.toolbarButton} color="secondary" onClick={doToggleView}>{viewOptions.mode ? <><ZoomOutIcon />&nbsp;Zoom Out</> : <><ZoomInIcon />&nbsp;Zoom In</>}</Button>
                        <Button className={classes.toolbarButton} color="secondary" onClick={doLogout}><MeetingRoomIcon />&nbsp;Logout</Button>
                    </Drawer>
                </Toolbar>
            </AppBar>
            <Grid item>
                {sidebarVisible ? <Preview /> : <Container style={{width: '15vw'}}></Container>}
            </Grid>
            <Grid item>
                <Comics />
            </Grid>
        </Grid>
    );
}

export default Shelf;
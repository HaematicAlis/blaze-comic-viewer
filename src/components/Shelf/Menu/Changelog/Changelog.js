import React from 'react';

import { Container, Grid, Typography } from '@material-ui/core';

import useStyles from './styles.js';

const Changelog = () => {
    const classes = useStyles();

    return (
        <Container maxWidth={false}>
            <Grid container direction="column" align="left">
                <Grid item>
                    <Typography variant="h4" className={classes.version}>1.0.3</Typography>
                    <Typography variant="body1" className={classes.bullet}>• Comic page menu looks prettier</Typography>
                    <Typography variant="body1" className={classes.bullet}>• Default red check means page is not done yet</Typography>
                    <Typography variant="body1" className={classes.bullet}>• Clicking it toggles to green check which means that page is done</Typography>
                    <Typography variant="body1" className={classes.bullet}>• Vocab menu shows check mark and congrats if page is done with no words</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h4" className={classes.version}>1.0.2</Typography>
                    <Typography variant="body1" className={classes.bullet}>• Comics or pages can be marked as done</Typography>
                    <Typography variant="body1" className={classes.bullet}>• Color in page menu will change based on status</Typography>
                    <Typography variant="body1" className={classes.bullet}>• Gray: No words, not done (new)</Typography>
                    <Typography variant="body1" className={classes.bullet}>• Yellow: Words, not done (WIP)</Typography>
                    <Typography variant="body1" className={classes.bullet}>• Red: Words, done (learning)</Typography>
                    <Typography variant="body1" className={classes.bullet}>• Green: No words, done (learned)</Typography>
                    <Typography variant="body1" className={classes.bullet}>• Full vocabulary list with count under comic thumbnail</Typography>
                    <Typography variant="body1" className={classes.bullet}>• Vocab list changes to green check when comic is done</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h4" className={classes.version}>1.0.1</Typography>
                    <Typography variant="body1" className={classes.bullet}>• Pages section added to menu</Typography>
                    <Typography variant="body1" className={classes.bullet}>• Click to select a page</Typography>
                    <Typography variant="body1" className={classes.bullet}>• Buttons turn green if there are words on that page</Typography>
                    <Typography variant="body1" className={classes.bullet}>• Button to mark page as done (coming soon)</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h4" className={classes.version}>1.0.0</Typography>
                    <Typography variant="body1" className={classes.bullet}>• First release</Typography>
                    <Typography variant="body1" className={classes.bullet}>• Upload comics from Imgur album link</Typography>
                    <Typography variant="body1" className={classes.bullet}>• View comics with two zoom options</Typography>
                    <Typography variant="body1" className={classes.bullet}>• View image and album info</Typography>
                    <Typography variant="body1" className={classes.bullet}>• Register accounts and store login</Typography>
                    <Typography variant="body1" className={classes.bullet}>• Delete comics</Typography>
                    <Typography variant="body1" className={classes.bullet}>• Responsive to screen sizes and mobile</Typography>
                    <Typography variant="body1" className={classes.bullet}>• Add vocabulary on each page</Typography>
                    <Typography variant="body1" className={classes.bullet}>• Sort by date added or alphabetically</Typography>
                    <Typography variant="body1" className={classes.bullet}>• Toggleable sidebar with accordion menu</Typography>
                    <Typography variant="body1" className={classes.bullet}>• Top bar with home, zoom, menu, and page control buttons</Typography>
                    <Typography variant="body1" className={classes.bullet}>• Click image to go to next page</Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Changelog;
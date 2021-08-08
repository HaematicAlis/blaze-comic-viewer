import React from 'react';

import { Container, Grid, Typography } from '@material-ui/core';

import useStyles from './styles.js';

const Changelog = () => {
    const classes = useStyles();

    return (
        <Container maxWidth={false}>
            <Grid container direction="column" align="left">
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
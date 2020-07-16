import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        padding: theme.spacing.unit * 6
    },
    title: {
        paddingBottom: theme.spacing.unit * 6
    }
});

const DashboardMenu = ({ children, classes, title }) => {
    return (
        <Paper className={classes.root}>
            <Typography variant="h4" align="center" className={classes.title}>
                {title}
            </Typography>
            { children }
        </Paper>
    );
};

export default withStyles(styles)(DashboardMenu)
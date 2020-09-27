import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
    spacer: {
        padding: theme.spacing(1)
    }
}));

/**
 * A spacer to space components
 */
export default function Spacer() {
    const classes = useStyles();
    return <div className={classes.spacer} />;
}
import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme =>({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }), 
        paddingTop: 100,
        marginLeft: 0,
      },
      contentShift: {
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        paddingTop: 100,
        marginLeft: 240,
      },
}));

type ContainerProps = {
    open: boolean
    children: React.ReactElement
}

export default function Container({open, children}: ContainerProps) {
    const classes = useStyles();
    // If the menu is open shift the content of the screen over
    return (
        <div className={open ? classes.contentShift: classes.content}>
            {children}
        </div>
    );
}
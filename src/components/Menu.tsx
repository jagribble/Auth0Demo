import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import makeStyles from '@material-ui/core/styles/makeStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';

import { History } from 'history';

const useStyles = makeStyles(theme => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: 240,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: 240
    },
    toolbar: theme.mixins.toolbar,
    closeMenuButton: {
        marginRight: 0,
        marginLeft: 'auto',
    },
}));

type MenuProps = {
    open: boolean,
    history: History,
    handleDrawerToggle: () => void
}

const menuItems = [{ title: 'Home', path: '/' }]

export default function Menu(props: MenuProps) {
    const { open, history, handleDrawerToggle } = props;
    const classes = useStyles();
    return (
        <>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
                        <ChevronLeftIcon fontSize="large"/>
                    </IconButton>
                <div className={classes.toolbar} />
                <List>
                    {menuItems.map((item) => {
                        return (
                            <ListItem button key={`item_${item.title}`} onClick={() => history.push(item.path)}>
                                <ListItemText primary={item.title} />
                            </ListItem>
                        );
                    })}
                </List>
            </Drawer>
        </>
    )
}
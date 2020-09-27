import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { useAuth0 } from "@auth0/auth0-react";
import { History } from 'history';

import Menu from './Menu';

const useStyles = makeStyles(theme => ({
  title: {
    marginLeft: 5,
    flexGrow: 1,
  },
  icon: {
    marginRight: 15,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  userGroup: {
    marginLeft: theme.spacing(1),
  }
}));

type NavigationProps = {
    handleDrawerToggle: () => void,
    open: boolean,
    clipped?: string,
    rightToolbar?: React.ReactElement,
    history: History
  }

export default function Navigation(props: NavigationProps) {

  const { open, handleDrawerToggle, history, clipped = false, rightToolbar = <></> } = props;
  const classes = useStyles();
 
  const { loginWithRedirect, isAuthenticated, user, isLoading, logout } = useAuth0();

  function User(){
    if (isAuthenticated && !isLoading && user){
      return (
        <Avatar alt={user.name} src={user.picture} onClick={() => logout()} />
      );
    } return <></>
  }
  

  return (
    <>
      <AppBar position="fixed" color="primary" className={clipped ? classes.appBar : ''}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
           Jules Gribble - Auth0 Demo
          </Typography>
          { isLoading || isAuthenticated ? <User />:  <Button onClick={() => loginWithRedirect()}>Login</Button>}
              {rightToolbar}
        </Toolbar>
      </AppBar>
      <Menu open={open} history={history} handleDrawerToggle={handleDrawerToggle}/>
    </>
  );
}

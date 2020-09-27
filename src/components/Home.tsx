import React from 'react';
import Card from '@material-ui/core/Card';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useAuth0 }  from '@auth0/auth0-react';

import User from './User';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        padding: 10,
        margin: 15
    }
})

export default function Home() {
    const { isAuthenticated, user, isLoading, getAccessTokenSilently } = useAuth0();
    const classes = useStyles();
    // React.useEffect(() => {
    //     async function getUserProfile(){
    //         const token = await getAccessTokenSilently();
    //         const response = await fetch('https://auth0demo.eu.auth0.com/userinfo', {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         });
    //         const json = await response.json();
    //         console.log('user profile', json)
    //     }
    //     if(isAuthenticated){
    //         getUserProfile();
    //     }
    // }, [isAuthenticated]);

    if(isAuthenticated) {
        if (user !== undefined){
            return <User user={user} />
        }
    } else if(isLoading){
        return (
        <>
        <Backdrop open>
            <CircularProgress />
        </Backdrop>
        </>
        );
    }return (
        <Card className={classes.card}>
            <Typography>You are not logged in. Log in to see user details</Typography>
        </Card>
        )
    
}
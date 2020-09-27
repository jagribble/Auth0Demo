import React from 'react';
import Card from '@material-ui/core/Card';
import Typograhy from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Spacer from './Spacer';

type UserProps = {
    user: any
}

const useStyles = makeStyles(theme => ({
    card: {
        padding: 10,
        margin: 15,
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        marginRight: 10,
    },
}))

function getUserType(sub: string){
    const type = sub.split('|')[0];
    switch (type){
        case 'linkedin': 
            return 'LinkendIn';
        case 'auth0':
            return 'Auth0';
        case 'apple':
            return 'Apple';
    }
}

type UserPropertiesProps = {
    properties: any
}

const useTableStyles = makeStyles({
    table: {
        minWidth: 650,
    }
});

function UserProperties({properties}: UserPropertiesProps){
    const keys = Object.keys(properties);
    const classes = useTableStyles();
    return (
        <TableContainer component={Paper}>
             <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Key</TableCell>
            <TableCell>Property</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {keys.map(key => (
                <TableRow key={`${key}_row`}>
                     <TableCell>{key}</TableCell>
                    <TableCell>{typeof properties[key] === 'string' || typeof properties[key] === 'number' ? properties[key]: JSON.stringify(properties[key])}</TableCell>
                </TableRow>
            ))}
        </TableBody>
        </Table>
        </TableContainer>
    )
}

export default function User({ user }: UserProps) {
    const classes = useStyles();
    const { name, picture , ...rest} = user;
    return (
        <Card className={classes.card}>
            <Grid container>
                <Avatar alt={name} src={picture} className={classes.large} />
                <Typograhy variant="h3">{name}</Typograhy>
            </Grid>
            <Spacer />
        <Typograhy>Type: {getUserType(user.sub)}</Typograhy>
        <UserProperties properties={user} />
        </Card>
    );
}

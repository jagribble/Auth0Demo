import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider } from '@material-ui/core/styles';
import { Auth0Provider } from "@auth0/auth0-react";
import store from 'store';

import AppBar from './AppBar';
import Container from './Container';
import Home from './Home';

function getDarkMode() {
    const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const darkMode = store.get('dark-mode');
    if (darkMode !== undefined) {
        return darkMode;
    }
    if (systemDarkMode) {
        store.set('dark-mode', true);
        return true;
    }
    store.set('dark-mode', false);
    return false;
}

export default function App() {
    const [open, setOpen] = React.useState(false);

    function handleDrawerToggle() {
        setOpen(open => !open);
    }
    return (
        <ThemeProvider theme={createMuiTheme( {palette: { type: getDarkMode() ? 'dark' : 'light' } })}>
            <Auth0Provider
             domain="auth0demo.eu.auth0.com"
             clientId="2Xgd20GbfUi9hcbei1tVa1eCiOSMGCqc"
             redirectUri={window.location.origin}
            >
            <Router>
                <Route
                    render={pageProps => <AppBar open={open} handleDrawerToggle={handleDrawerToggle} {...pageProps} />}
                />
                <Switch>
                    <Route path="/" render={() => <Container open={open}><Home /></Container>} />
                </Switch>
            </Router>
            </Auth0Provider>
        </ThemeProvider>

    );
}

if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength,padString) {
        targetLength = targetLength>>0; //truncate if number or convert non-number to 0;
        padString = String((typeof padString !== 'undefined' ? padString : ' '));
        if (this.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength-this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
            }
            return padString.slice(0,targetLength) + String(this);
        }
    };
}
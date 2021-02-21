import React, { Component } from "react";
import routes from "./routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AuthLayout from "./layouts/AuthLayout";
import DefaultLayout from "./layouts/DefaultLayout";
import { useSelector } from 'react-redux'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#e77448',
        },
        secondary: {
            main: '#32c3f3',
        },
    },
});

function App() {
    const firebase = useSelector(state => state.firebase)
    if(!firebase.auth.isLoaded) return(<div/>)
    // console.log(firebase.auth)
    return (
        <ThemeProvider theme={theme}>
            <Router history={createBrowserHistory()}>
                <Switch>
                    {routes
                        .filter(route => firebase.auth.uid ? route.layout === DefaultLayout : route.layout === AuthLayout)
                        .map((route, index) => (
                            <Route
                                key={index}
                                exact={route.exact}
                                path={route.path}
                                component={route.layout(route.component)}
                            />
                        ))}
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;

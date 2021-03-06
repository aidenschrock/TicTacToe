import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from './pages/home'

function PrivateRoute ({component: Component, authenticated, ...rest}){
    return (
        <Route
        {...rest}
        render={props =>
            authenticated === true ? (
                <Component {...props} />
            ) : (
                <Redirect 
                    to={{ pathname: "/login", state: { from: props.location }}}
                />
            )
        }
        />
    )
}

function PublicRoute ({component: Component, authenticated, ...rest}){
    return (
        <Route
        {...rest}
        render={props =>
            authenticated === false ? (
                <Component {...props} />
            ) : (
                <Redirect to="/chat"/>
            )
        }
        />
    )
}

class App extends Component {
    render() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />

            </Switch>
        </Router>
    )
}}

export default App;

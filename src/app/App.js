import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import "./App.sass";
import Header from "../header";
import NotFound from "../not-found";

const App = () => {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <h1>Index</h1>
                </Route>
                <Route path="/charts">
                    <h1>Chart</h1>
                </Route>
                <Route path="/music">
                    <h1>Music</h1>
                </Route>
                <Route path="/video">
                    <h1>Video</h1>
                </Route>
                <Route path="/profile">
                    <h1>Profile</h1>
                </Route>
                <Route path="/settings">
                    <h1>Settings</h1>
                </Route>
                <Route path="/statistic">
                    <h1>Statistic</h1>
                </Route>
                <Route path="*">
                    <NotFound/>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
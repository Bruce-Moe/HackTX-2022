import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import { About } from "./About";
import { Layout } from "./Component/Layout";
import { NavBar } from "./Component/NavBar";


function App() {

    return (
        <React.Fragment>
            <NavBar />
            <Router>
                <Switch>
                    <Route path="/about">
                        <Layout> <About /></Layout>
                        <Route path="/api"></Route>
                    </Route>
                    <Route path="/" exact> <Home />
                    </Route>
                </Switch>
            </Router>
        </React.Fragment>
    );

}

export default App;

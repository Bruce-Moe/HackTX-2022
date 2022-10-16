import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import { About } from "./About";
import { Contracts } from "./Contracts";
import { Layout } from "./Component/Layout";
import { NavBar } from "./Component/NavBar";


function App() {
    return (
        <React.Fragment>
            <NavBar />
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/about">
                        <Layout> <About /></Layout>
                        <Route path="/api"></Route>
                    </Route>
                    <Route path="/contracts">
                        <Layout> <Contracts /></Layout>
                        <Route path="/api"></Route>
                    </Route>

                </Switch>
            </Router>
        </React.Fragment>
    );

}

export default App;

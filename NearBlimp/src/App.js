import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import { About } from "./About";
import { StandardContracts } from "./StandardContracts";
import { AuditedContracts } from "./AuditedContracts";
import { ContractInfo } from "./Component/ContractInfo";
import { Layout } from "./Component/Layout";
import { NavBar } from "./Component/NavBar";
import { collection, getDocs } from "firebase/firestore";
import db from "./firebase.config";

function App() {
  const [stdContracts, setStdContracts] = useState([]);
  // const [auditedContracts, setAuditedContracts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "standard-contracts"));
      querySnapshot.forEach(doc => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        setStdContracts(stdContracts.push({ name: doc.data().name, id: doc.id }));
      });
    };
    fetchData();
    // eslint-disable-next-line
  }, []);
  return (
    <React.Fragment>
      <NavBar stdContracts={stdContracts} />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <Layout>
              {" "}
              <About />
            </Layout>
            <Route path="/api"></Route>
          </Route>
          <Route path="/std-contracts/:id">
            <Layout>
              {" "}
              <ContractInfo />
            </Layout>
            <Route path="/api"></Route>
          </Route>
          <Route path="/audited-contracts/:id">
            <Layout>
              {" "}
              <ContractInfo />
            </Layout>
            <Route path="/api"></Route>
          </Route>
          <Route path="/std-contracts">
            <Layout>
              {" "}
              <StandardContracts />
            </Layout>
            <Route path="/api"></Route>
          </Route>
          <Route path="/audited-contracts">
            <Layout>
              {" "}
              <AuditedContracts />
            </Layout>
            <Route path="/api"></Route>
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;

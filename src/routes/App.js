import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../containers/Home.jsx";
import SignIn from "../containers/SignIn.jsx";
import SignUp from "../containers/SignUp.jsx";

const App = ({ isLogged }) => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signIn" component={SignIn} />
        <Route exact path="/SignUp" component={SignUp} />
      </Switch>
    </Layout>
  </Router>
);

export default App;

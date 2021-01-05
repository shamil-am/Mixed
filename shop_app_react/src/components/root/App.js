import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
//
import Dashboard from "./Dashboard";
import Navi from "../navi/Navbar";
import { Route, Switch } from "react-router-dom";
import CartSummary from "../cart/CartSummary";
//

export default class App extends Component {
  render() {
    return (
      <Grid container>
        <Navi />
        <Switch>
          <Route exact path="/cart">
            <CartSummary/>
          </Route>
          <Route exact path="/">
            <Dashboard />
          </Route>
        </Switch>
        <CssBaseline />
      </Grid>
    );
  }
}

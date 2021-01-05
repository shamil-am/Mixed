import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import CategoryList from "../categories/CategoryList";
import ProductList from "../products/ProductList";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  contentBody: {
    maxWidth: "1140px",
    marginLeft: "auto",
    marginRight: "auto",
  },
};

class Dashboard extends Component {
  render() {
    return (
      <Grid container className={this.props.classes.contentBody}>
        <Grid item xs={12} md={4} lg={3}>
          <CategoryList />
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <ProductList />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Dashboard);

import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { bindActionCreators } from "redux";
import { getCategories } from "../../redux/actions/categoryActions";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { changeCategory } from "../../redux/actions/categoryActions";
// import Divider from "@material-ui/core/Divider";
import { getProducts } from "../../redux/actions/productActions";

const styles = {
  categoryMain: {
    padding: "1.5rem 0",
  },
  tableList: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  selected: {
    backgroundColor: "#f50057b8",
    color: "#fff",
    "&:hover": {
      cursor: "pointer",
    },
  },
};

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }
  //
  render() {
    return (
      <Grid className={this.props.classes.categoryMain}>
        <Typography variant="h4" align="center" color="primary">
          Categories
        </Typography>
        <List>
          {this.props.state.categories.map((category) => (
            <ListItem
              key={category.id}
              onClick={() => {
                this.props.actions.changeCategory(category.categoryName);
                this.props.actions.getProducts(category.id);
              }}
              className={
                this.props.state.currentCategory === category.categoryName
                  ? this.props.classes.selected
                  : this.props.classes.tableList
              }
            >
              <ListItemText primary={category.categoryName} />
            </ListItem>
          ))}
        </List>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: {
      currentCategory: state.changeCategoryReducer,
      categories: state.categoryListReducer,
      cart: state.cartReducer,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getCategories: bindActionCreators(getCategories, dispatch),
      changeCategory: bindActionCreators(changeCategory, dispatch),
      getProducts: bindActionCreators(getProducts, dispatch),
    },
  };
};

//
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CategoryList));

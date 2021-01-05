import React, { Component } from "react";
import { Grid, Typography, Badge } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProducts } from "../../redux/actions/productActions";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import alertify from "alertifyjs";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { addToCart } from "../../redux/actions/cartActions";

const styles = {
  productMain: {
    padding: "1.5rem 0",
    margin: "0 0 0 1.5rem",
    "@media (max-width: 960px)": {
      margin: "0",
    },
  },
};

class ProductList extends Component {
  boolReturner = {
    true: true,
    false: false,
  };
  componentDidMount() {
    if (this.props.state.cart.length === 0) {
      this.props.actions.getProducts();
    }
  }
  render() {
    return (
      <Grid className={this.props.classes.productMain}>
        <Typography variant="h4" color="primary" align="center">
          <Badge
            badgeContent={this.props.state.currentCategory}
            color="secondary"
          >
            Product List
          </Badge>
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">
                  <Typography variant="h6" color="secondary">
                    Product name
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="h6" color="secondary">
                    Quantity per unit
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="h6" color="secondary">
                    Unit in stock
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="h6" color="secondary">
                    Price
                  </Typography>
                </TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.state.products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.productName}</TableCell>
                  <TableCell>{product.quantityPerUnit}</TableCell>
                  <TableCell>{product.unitsInStock}</TableCell>
                  <TableCell>{product.unitPrice}$</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        alertify.success(
                          `${product.productName} added to cart!`,
                          1.5
                        );
                        this.props.actions.addToCart(product);
                      }}
                      startIcon={<ShoppingCartIcon />}
                      size="small"
                      disabled={
                        product.unitsInStock === 0
                          ? this.boolReturner.true
                          : this.boolReturner.false
                      }
                    >
                      add
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: {
      currentCategory: state.changeCategoryReducer,
      products: state.productListReducer,
      cart: state.cartReducer,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getProducts: bindActionCreators(getProducts, dispatch),
      addToCart: bindActionCreators(addToCart, dispatch),
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ProductList));

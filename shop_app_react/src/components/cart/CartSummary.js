import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { removeFromCart } from "../../redux/actions/cartActions";
import { bindActionCreators } from "redux";

const styles = {
  contentBody: {
    maxWidth: "1140px",
    marginLeft: "auto",
    marginRight: "auto",
    "& .MuiTableCell-root.MuiTableCell-body": {
      backgroundColor: "#cecece",
    },
  },
};

class CartSummary extends Component {
  calculateCartPrice = () => {
    let sumPrice = 0;
    this.props.state.cart.forEach((cartItem) => {
      sumPrice += Number(cartItem.name.unitPrice) * cartItem.quantity;
    });
    return sumPrice;
  };

  render() {
    return (
      <Grid container className={this.props.classes.contentBody}>
        <Grid item sm={12}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h6" color="primary">
                    Product name
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6" color="primary">
                    Quantity per unit
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6" color="primary">
                    Unit in stock
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6" color="primary">
                    Price
                  </Typography>
                </TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.state.cart.map((cartItem) => (
                <TableRow key={cartItem.name.id}>
                  <TableCell component="th" scope="row">
                    {cartItem.name.productName} - <span style={{color: "red"}}>x{cartItem.quantity}</span>
                  </TableCell>
                  <TableCell>{cartItem.name.quantityPerUnit}</TableCell>
                  <TableCell>{cartItem.name.unitsInStock}</TableCell>
                  <TableCell>{cartItem.name.unitPrice}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        let res = window.confirm("Are u sure?");
                        if (res) {
                          this.props.actions.removeFromCart(cartItem.name);
                        }
                      }}
                    >
                      remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Typography variant="h6" color="secondary">
            Price: {this.calculateCartPrice()}$
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: {
      cart: state.cartReducer,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      removeFromCart: bindActionCreators(removeFromCart, dispatch),
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CartSummary));

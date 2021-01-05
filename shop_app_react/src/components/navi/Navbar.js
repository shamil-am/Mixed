import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { connect } from "react-redux";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
// import AddIcon from "@material-ui/icons/Add";
// import RemoveIcon from "@material-ui/icons/Remove";
import { removeFromCart } from "../../redux/actions/cartActions";
import { bindActionCreators } from "redux";
import alertify from "alertifyjs";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import LocalMallIcon from "@material-ui/icons/LocalMall";

//
const styles = {
  root: {
    maxWidth: "1140px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    "&  .MuiListItemIcon-root": {
      minWidth: "1rem",
    },
    "& .MuiCollapse-wrapper": {
      backgroundColor: "#3f51b5ed",
    },
  },
  shoppingList: {
    position: "absolute",
    top: "-0.25rem",
    right: "0",
    color: "#fff",
    "& .MuiButtonBase-root.MuiIconButton-root": {
      color: "#fff",
    },
  },
};
//
class Navbar extends Component {
  state = {
    open: false,
  };
  renderEmpty = () => {
    return (
      <Typography variant="h6" noWrap>
        Empty Cart
      </Typography>
    );
  };
  renderGoToCart = () => {
    return (
      <List>
        <ListItem style={{ display: "flex", justifyContent: "center" }}>
          <ListItemIcon>
            <LocalMallIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <Link
            to="/cart"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "1rem",
              padding: ".5rem",
            }}
          >
            go to cart
          </Link>
        </ListItem>
      </List>
    );
  };
  removeFromCart = (cartItem) => {
    this.props.actions.removeFromCart(cartItem.name);
    alertify.error(`${cartItem.name.productName} removed!`);
  };
  calculateCartPrice = () => {
    let sumPrice = 0;
    this.props.state.cart.forEach((cartItem) => {
      sumPrice += Number(cartItem.name.unitPrice) * cartItem.quantity;
    });
    return sumPrice;
  };
  //
  render() {
    return (
      <AppBar position="sticky" className={this.props.classes.root}>
        <Toolbar className={this.props.classes.toolbar}>
          <Typography variant="h5" noWrap>
            <Link
              to="/"
              style={{
                color: "#fff",
                textDecoration: "none",
              }}
            >
              MyShop
            </Link>
          </Typography>
          <List className={this.props.classes.shoppingList}>
            <ListItem>
              <ListItemText primary="" />
              <ListItemIcon>
                <IconButton
                  onClick={() => this.setState({ open: !this.state.open })}
                >
                  <Badge
                    badgeContent={this.props.state.cart.length}
                    color="secondary"
                  >
                    <ShoppingCartIcon style={{ fontSize: "1.5rem" }} />
                  </Badge>
                  {this.state.open ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              </ListItemIcon>
            </ListItem>
            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {this.props.state.cart.map((cartItem) => (
                  <ListItem key={cartItem.name.productName}>
                    <ListItemIcon onClick={() => this.removeFromCart(cartItem)}>
                      <DeleteForeverIcon color="secondary" />
                    </ListItemIcon>
                    <Badge color="secondary" badgeContent={cartItem.quantity}>
                      <ListItemText primary={cartItem.name.productName} />
                    </Badge>
                  </ListItem>
                ))}
              </List>
              <Divider style={{ backgroundColor: "#ffffff" }} />
              {this.props.state.cart.length > 0 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: ".5rem",
                  }}
                >
                  <Typography>Price:</Typography>
                  <Typography>{this.calculateCartPrice()}$</Typography>
                </div>
              )}
              <Divider style={{ backgroundColor: "#ffffff" }} />
              {this.props.state.cart.length < 1
                ? this.renderEmpty()
                : this.renderGoToCart()}
            </Collapse>
          </List>
        </Toolbar>
      </AppBar>
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

const mapDispatchFromCart = (dispatch) => {
  return {
    actions: {
      removeFromCart: bindActionCreators(removeFromCart, dispatch),
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchFromCart
)(withStyles(styles)(Navbar));

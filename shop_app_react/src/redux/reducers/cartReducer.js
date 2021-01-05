import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      let alreadyAdded = state.find(
        (el) => el.name.productName === action.payload.productName
      );
      if (alreadyAdded) {
        let newState = state.map((cartItem) => {
          if (cartItem.name.productName === action.payload.productName) {
            return Object.assign({}, cartItem, {
              quantity: cartItem.quantity+1,
            });
          }
          return cartItem;
        });
        return newState;
      } else {
        let newAdded = {
          name: action.payload,
          quantity: 1,
        };
        state = [newAdded, ...state];
        return state;
      }
    case actionTypes.REMOVE_FROM_CART:
      let newCart = state.filter(
        (cartItem) => cartItem.name.productName !== action.payload.productName
      );
      return newCart;
    default:
      return state;
  }
};

export default cartReducer;

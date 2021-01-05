import * as actionTypes from "./actionTypes";

export const getProductsSuccess = (products) => {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const getProducts = (categoryId) => {
  return function (dispatch) {
    let url;
    categoryId
      ? (url = `http://localhost:3000/products?categoryId=${categoryId}`)
      : (url = `http://localhost:3000/products`);
    fetch(url)
      .then((resp) => resp.json())
      .then((result) => dispatch(getProductsSuccess(result)));
  };
};

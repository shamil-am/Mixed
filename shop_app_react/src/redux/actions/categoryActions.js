import * as actionTypes from "./actionTypes";

export const changeCategory = (category) => ({
  type: actionTypes.CHANGE_CATEGORY,
  payload: category,
});

export const getCategoriesSuccess = (categories) => ({
  type: actionTypes.GET_CATEGORIES_SUCCESS,
  payload: categories,
});

export const getCategories = () => {
  return function (dispatch) {
    let url = "http://localhost:3000/categories";
    fetch(url)
      .then((resp) => resp.json())
      .then((result) => dispatch(getCategoriesSuccess(result)));
  };
};

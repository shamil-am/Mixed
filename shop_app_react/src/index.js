import React from "react";
import ReactDOM from "react-dom";
import App from "./components/root/App";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./redux/reducers/index";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "alertifyjs/build/css/alertify.css";
import { BrowserRouter } from "react-router-dom";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

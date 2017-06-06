import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore}  from "redux";

import MainComponent from "./main/components/main.js";
import reducers from "./reducers";
const store = createStore(reducers, window.initState);

window.onload = () => {
  ReactDOM.render(
    <Provider store={store}>
      <MainComponent />
    </Provider>
    ,document.getElementById("main")
  );
};

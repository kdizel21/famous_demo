import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import MainComponent from "./main/components/main.js";
import store from "./store";

window.onload = () => {
  ReactDOM.render(
    <Provider store={store}>
      <MainComponent />
    </Provider>
    ,document.getElementById("main")
  );
};

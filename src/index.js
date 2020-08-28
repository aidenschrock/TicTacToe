import React from "react";
import ReactDOM from "react-dom";
import App from "./component/app";
import "./index.css";
import "normalize.css"

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
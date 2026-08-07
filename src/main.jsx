import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import "cesium/Build/Cesium/Widgets/widgets.css";

ReactDOM.createRoot(document.getElementById("roots")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
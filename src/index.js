import React from "react";
import ReactDOM from "react-dom";
import App from "./componentes/App";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

ReactDOM.render(
  <App nombre="Edgar" mensaje="Este es un mensaje desde los parámetros." />,
  document.getElementById("root")
);

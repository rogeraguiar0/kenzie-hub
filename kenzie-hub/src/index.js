import React from "react";
import ReactDOM from "react-dom/client";
import { BrouserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrouserRouter>
      <App />
    </BrouserRouter>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const sum = (a, b) => a + b;

root.render(
  <React.StrictMode>
    <h1>{sum(2, 3)}</h1>
  </React.StrictMode>
);
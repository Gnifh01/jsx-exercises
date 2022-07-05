import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const name = "Gabbo";
const heading = <h1>Hello {name}</h1>;

root.render(
  <React.StrictMode>
    {heading}
  </React.StrictMode>
);
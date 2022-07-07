import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const sum = (a, b) => <h1>{a + b}</h1> ;

root.render(
  <React.StrictMode>
    {sum(2, 3)}
  </React.StrictMode>
);
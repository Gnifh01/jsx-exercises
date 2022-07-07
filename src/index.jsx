import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Hello = (prop) => {
  return <h1>Hello {prop.name}</h1>
}

root.render(
  <React.StrictMode>
    <Hello name="Gabbo"/>
  </React.StrictMode>
);
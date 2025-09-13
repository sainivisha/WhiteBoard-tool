import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ToolboxProvider from "./store/toolboxProvider";
import BoardProvider from "./store/BoardProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ToolboxProvider>
    <BoardProvider>
      <App />
    </BoardProvider>
  </ToolboxProvider>
);

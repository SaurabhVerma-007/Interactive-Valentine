import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "wouter";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router base="/Interactive-Valentine">
      <App />
    </Router>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {MainContextProvider} from "./context/MainContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MainContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MainContextProvider>
);

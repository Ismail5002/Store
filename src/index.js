import React from "react";
import { createRoot } from "react-dom/client";
import App from "./Components/App/App";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import { Provider } from "react-redux";
import { store } from "./features/store";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

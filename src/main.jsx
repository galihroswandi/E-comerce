import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./config/redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

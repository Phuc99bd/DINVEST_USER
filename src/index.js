import React from "react";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "antd/dist/antd.css";
import configureStore from "./redux/configureStore";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "./assets/css/global.scss";
import "react-toastify/dist/ReactToastify.css";

const initialState = {};
const store = configureStore(initialState);

const renderApp = () =>
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./App", renderApp);
}

renderApp();
serviceWorker.unregister();

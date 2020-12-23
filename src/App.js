import React, { Component, useEffect, useState } from "react";

import { IntlProvider } from "react-intl";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

import { ToastContainer } from "react-toastify";

import {
  ROUTE,
  LANGUAGE,
  TOKEN,
  CUSTOMER_LINK_INVITE_SPONSOR,
} from "commons/constants";
import { PrivateLayout, PublicLayout } from "commons/layouts";
import { DashboardPage } from "modules/home";
import { InvestPage } from "modules/invest";
import { WalletPage } from "modules/wallets";
import { NetworkPage } from "modules/networks";
import axios from "helpers/AxiosHelper";
import { getProfile } from "modules/auth/redux/actions";
import * as actions from "modules/auth/redux/actions";

import messages_en from "translations/en.json";

import { SignInPage, SignUpPage } from "modules/auth";
import { SettingsPages } from "modules/settings/Index";
import { ChromeOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

const LANGUAGE_DEFAUL = "en";
const messages = {
  en: messages_en,
};

const languageBrowser = navigator.language.split(/[-_]/)[0];
const languageLocal = localStorage.getItem(LANGUAGE);

const isLogin = () => {
  const authToken = Cookies.get(TOKEN);
  return Boolean(authToken);
};

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        ) : (
          <PublicLayout {...rest}>
            <Component {...props}></Component>
          </PublicLayout>
        )
      }
    />
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? (
          <PrivateLayout {...rest}>
            <Component {...props} />
          </PrivateLayout>
        ) : (
          <Redirect
            to={{
              pathname: `${ROUTE.LOGIN}`,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const App = () => {
  const language = languageLocal || languageBrowser;
  const [showLoading, setShowLoading] = useState(false);
  const dispatch = useDispatch();
  axios.interceptors.request.use((config) => {
    setShowLoading(true);
    return config;
  });
  axios.interceptors.response.use((config) => {
    setTimeout(() => setShowLoading(false), 200);
    return config;
  });

  useEffect(() => {
    if (isLogin()) {
      dispatch(actions.getProfile({}, () => {}));
    }
  }, []);
  return (
    <div className="App">
      <ToastContainer />

      {showLoading && (
        <div className="loader loading">
          <span>
            <ChromeOutlined className="image-loading" />
          </span>
        </div>
      )}
      <IntlProvider locale={language} messages={messages[LANGUAGE_DEFAUL]}>
        <Router>
          <PublicRoute exact path={ROUTE.LOGIN} component={SignInPage} />
          <PublicRoute exact path={ROUTE.SIGNUP} component={SignUpPage} />
          <PrivateRoute
            exact
            path={ROUTE.DASHBOARD}
            component={DashboardPage}
          />
          <PrivateRoute exact path={ROUTE.INVEST} component={InvestPage} />
          <PrivateRoute exact path={ROUTE.WALLETS} component={WalletPage} />
          <PrivateRoute path={ROUTE.NETWORKS} component={NetworkPage} />
          <PrivateRoute path={ROUTE.SETTINGS} component={SettingsPages} />
        </Router>
      </IntlProvider>
    </div>
  );
};

export default App;

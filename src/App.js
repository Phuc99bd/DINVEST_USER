import React, { useEffect, useState } from "react";

import { IntlProvider } from "react-intl";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

import {
  ROUTE,
  LANGUAGE,
  TOKEN,
  CUSTOMER_LINK_INVITE_SPONSOR,
} from "commons/constants";
import { PrivateLayout, PublicLayout } from "commons/layouts";
import { DashboardPage } from "modules/home";

// import { getProfile } from "modules/profile/redux/actions";

import messages_en from "translations/en.json";

import {
  SignInPage,
  SignUpPage,

} from "modules/auth";


const LANGUAGE_DEFAUL = "en";
const messages = {
  en: messages_en
};

const languageBrowser = navigator.language.split(/[-_]/)[0];
const languageLocal = localStorage.getItem(LANGUAGE);

const isLogin = () => {
  const authToken = Cookies.get(TOKEN);
  if (authToken) {
    // fetchHelper.addDefaultHeader("Authorization", `Bearer ${authToken}`);
  }
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
        // isLogin() ? (
          <PrivateLayout {...rest}>
            <Component {...props} />
          </PrivateLayout>
        // ) : (
        //   <Redirect
        //     to={{
        //       pathname: `${ROUTE.LOGIN}`,
        //       state: { from: props.location },
        //     }}
        //   />
        // )
      }
    />
  );
};

const isToken = () => {
  const authToken = Cookies.get(TOKEN);
  return authToken;
};

const App = () => {
  const language = languageLocal || languageBrowser;
  const [showLoading, setShowLoading] = useState(false);

  const hadToken = isToken();
  const dispatch = useDispatch();


  return (
    <div className="App">
      <ToastContainer />

      {showLoading && (
        <div className="loader loading">
          <span>
            <img
              className="image-preloader"
              src={require("assets/images/loading/loader.svg")}
              alt="loading"
            />
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
          </Router>
        {/* <AlertVerifyTransactionModal /> */}
        {/* <AuthyModal /> */}
        {/* <AlertVerifySponsorModal /> */}
      </IntlProvider>
    </div>
  );
};

export default App;

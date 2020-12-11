export const ROOT_API_URL = process.env.REACT_APP_API;
export const TOKEN = 'token'
export const ROUTE = {
    HOME: "/",
    DASHBOARD: "/",
    NETWORKS: "/networks",
    PUBLIC: "/public",
    LOGIN: "/login",
    SIGNUP: "/signup",
    WALLETS: "/wallets",
    SETTING_SECURITY: "/security",
    SETTING_PERSONAL: "/personal",
    WALLET: "/wallets",
    PACKAGE: "/packages"
}
export const USER_INFO_KEY = "userInfo";
export const LANGUAGE = "lang";
export const LANGUAGE_LIST = [
    { key: "en", name: "lang.en", url: "en-flag.png" },
    {
      key: "vi",
      name: "lang.vi",
      url: "vn-flag.jpg",
    },
  ];export const LOGIN = "LOGIN";
export const TRANSACTION = "TRANSACTION";
export const CUSTOMER_LINK_INVITE_SPONSOR =  process.env.CUSTOMER_LINK_INVITE_SPONSOR || "/verify-sponsor";
export const PRODUCTION = "production";

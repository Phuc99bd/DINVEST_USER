import Cookies from "js-cookie";
import { all, takeLatest, call, put } from "redux-saga/effects";
// import fetchHelper from "helpers/FetchHelper";
import { get } from "lodash";
import * as types from "./constants";
import * as actions from "./actions";
import {
  ROOT_API_URL,
  USER_INFO_KEY,
  LANGUAGE,
  LANGUAGE_LIST,
  TRANSACTION,
  LOGIN,
} from "commons/constants";

export const setSession = (token, redirectCallback = () => null) => {
  // process.env.NODE_ENV === 'development' && Cookies.set('token', token);
  Cookies.set("token", token);
  setTimeout(redirectCallback(), 100);
};


// viet function call api
// sau khi call api xog dua vào response gọi function bên file actions

export default function* rootSaga() {
  yield all([
    
  ]);
}


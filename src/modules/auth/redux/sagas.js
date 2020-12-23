import Cookies from "js-cookie";
import { all, takeLatest, call, put, fork } from "redux-saga/effects";
import { get } from "lodash";
import * as types from "./constants";
import * as actions from "./actions";
import axios from "helpers/AxiosHelper";
import {
  ROOT_API_URL,
  USER_INFO_KEY,
  TRANSACTION,
  LOGIN,
} from "commons/constants";
import { toast } from "react-toastify";

export const setSession = (token, redirectCallback = () => null) => {
  process.env.NODE_ENV === "development" && Cookies.set("token", token);
  Cookies.set("token", token);
  setTimeout(redirectCallback(), 100);
};
function* onLogin({ payload, redirect }) {
  try {
    const { data } = yield call(requestLogin, payload);
    if (get(data, "status_code") === 200) {
      const user = data?.data || {};
      if (user.email) {
        setSession(get(data, "data.token"), redirect);
        localStorage.setItem(USER_INFO_KEY, JSON.stringify(data.data));
        yield put(actions.loginSuccess(data.data));
        return;
      }
    }
  } catch (err) {}
}

function* onSignup({ payload, redirect }) {
  const { data } = yield call(requestSignup, payload);
  if (get(data, "status_code") === 200) {
    toast.success(data.message);
    redirect();
    return;
  }
}

function* getProfile({ payload, redirect }) {
  const { data } = yield call(requestGetProfile, payload);
  if (get(data, "status_code") === 200) {
    toast.success(data.message);
    yield put(actions.getProfileSuccess(data.data));
    return;
  }
  return;
}

// viet function call api
// sau khi call api xog dua vào response gọi function bên file actions

export default function* rootSaga() {
  yield all([
    takeLatest(types.LOGIN, onLogin),
    takeLatest(types.SIGN_UP, onSignup),
    takeLatest(types.GET_PROFILE, getProfile),
  ]);
}

// Request Api
function requestLogin(payload) {
  return axios({
    url: `${ROOT_API_URL}/login`,
    method: "POST",
    data: JSON.stringify(payload),
  }).then((data) => {
    return data;
  });
}

function requestSignup(payload) {
  return axios({
    url: `${ROOT_API_URL}/signup`,
    method: "POST",
    data: JSON.stringify(payload),
  }).then((data) => {
    return data;
  });
}

function requestGetProfile(payload) {
  return axios({
    url: `${ROOT_API_URL}/user-profile`,
    method: "GET",
  }).then((data) => {
    return data;
  });
}

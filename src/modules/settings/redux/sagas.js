import * as types from "./types";
import { all, takeLatest, call, put } from "redux-saga/effects";
import { get } from "lodash";
import axios from "helpers/AxiosHelper";
import { ROOT_API_URL } from "commons/constants";
import { toast } from "react-toastify";
import { getProfile } from "modules/auth/redux/actions";

function* onUpdateProfile({ payload }) {
  const { data } = yield call(requestUpdateProfile, payload);
  if (get(data, "status_code") === 200) {
    toast.success(data.message);
    yield put(getProfile({}));
  }
}

function* onChangePassword({ payload, redirect }) {
  const { data } = yield call(requestChangePassword, payload);
  if (get(data, "status_code") === 200) {
    toast.success(data.message);
    redirect();
    yield put(getProfile({}));
  }
}

function* onGenerateQR() {
  const { data } = yield call(requestGenerateQR);
  if (get(data, "status_code") === 200) {
    toast.success(data.message);
    yield put(getProfile({}));
  }
}

function* onActiveAuthenticator({ payload }) {
  const { data } = yield call(activeAuthenticator, payload);
  if (get(data, "status_code") === 200) {
    toast.success(data.message);
    yield put(getProfile({}));
  }
}

function* onChangeSecurity({ payload }) {
  const { data } = yield call(requestChangeSecurity, payload);
  if (get(data, "status_code") === 200) {
    toast.success(data.message);
    yield put(getProfile({}));
  }
}

function* onChangeEmail({ payload }) {
  const { data } = yield call(requestChangEmail, payload);
  if (get(data, "status_code") === 200) {
    toast.success(data.message);
  }
}

function* onVerifyChangeEmail({ payload, redirect }) {
  const { data } = yield call(requestVerifyChangeEmail, payload);
  if (get(data, "status_code") === 200) {
    toast.success(data.message);
    redirect();
    yield put(getProfile({}));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(types.UPDATE_PROFILE, onUpdateProfile),
    takeLatest(types.CHANGE_PASSWORD, onChangePassword),
    takeLatest(types.GENERATE_QR, onGenerateQR),
    takeLatest(types.ACTIVE_AUTHENTICATOR, onActiveAuthenticator),
    takeLatest(types.ON_CHANGE_SECURITY, onChangeSecurity),
    takeLatest(types.CHANGE_EMAIL, onChangeEmail),
    takeLatest(types.VERIFY_EMAIL, onVerifyChangeEmail),
  ]);
}

function requestUpdateProfile(payload) {
  return axios({
    url: `${ROOT_API_URL}/update-profile`,
    method: "POST",
    data: payload,
    headers: {
      "Content-type": "application/json",
    },
  }).then((data) => {
    return data;
  });
}

function requestGenerateQR() {
  return axios({
    url: `${ROOT_API_URL}/register-authy`,
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
  }).then((data) => {
    return data;
  });
}

function requestChangeSecurity(payload) {
  return axios({
    url: `${ROOT_API_URL}/update-authy`,
    method: "POST",
    data: payload,
    headers: {
      "Content-type": "application/json",
    },
  }).then((data) => {
    return data;
  });
}

function activeAuthenticator(code) {
  return axios({
    url: `${ROOT_API_URL}/verify-authy`,
    method: "POST",
    data: {
      code,
    },
    headers: {
      "Content-type": "application/json",
    },
  }).then((data) => {
    return data;
  });
}

function requestChangePassword(payload) {
  return axios({
    url: `${ROOT_API_URL}/change-password`,
    method: "POST",
    data: payload,
    headers: {
      "Content-type": "application/json",
    },
  }).then((data) => {
    return data;
  });
}

function requestChangEmail(payload) {
  return axios({
    url: `${ROOT_API_URL}/change-email`,
    method: "POST",
    data: payload,
    headers: {
      "Content-type": "application/json",
    },
  }).then((data) => {
    return data;
  });
}

function requestVerifyChangeEmail(payload) {
  return axios({
    url: `${ROOT_API_URL}/verify-change-email`,
    method: "POST",
    data: payload,
    headers: {
      "Content-type": "application/json",
    },
  }).then((data) => {
    return data;
  });
}

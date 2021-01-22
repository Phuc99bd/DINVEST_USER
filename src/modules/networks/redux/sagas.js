import * as types from "./constants";
import { all, takeLatest, call } from "redux-saga/effects";
import { get } from "lodash";
import axios from "helpers/AxiosHelper";
import { ROOT_API_URL } from "commons/constants";

function* onGetCommission({ payload, redirect }) {
  const { data } = yield call(requestGetCommission, payload);
  if (get(data, "status_code") === 200) {
    redirect(data.data);
    return;
  }
}

function* onGetRefById({ payload, redirect }) {
  const { data } = yield call(requestGetRefById, payload);
  if (get(data, "status_code") === 200) {
    redirect(data.data);
    return;
  }
}

function* onGetRevenue({ payload, redirect }) {
  const { data } = yield call(requestGetRevenue, payload);
  if (get(data, "status_code") === 200) {
    redirect(data.data);
    return;
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(types.GET_COMMISSIONS, onGetCommission),
    takeLatest(types.GET_REF_BY_USER, onGetRefById),
    takeLatest(types.GET_REVENUE, onGetRevenue),
  ]);
}

function requestGetCommission(payload) {
  const queryParams = Object.entries(payload)
    .map(([key, val]) => key + "=" + val)
    .join("&");
  return axios({
    url: `${ROOT_API_URL}/wallet-trans/revenue/list?${queryParams}`,
    method: "GET",
  }).then((data) => {
    return data;
  });
}

function requestGetRefById(payload) {
  const queryParams = Object.entries(payload)
    .map(([key, val]) => key + "=" + val)
    .join("&");
  return axios({
    url: `${ROOT_API_URL}/childrents?${queryParams}`,
    method: "GET",
  }).then((data) => {
    return data;
  });
}

function requestGetRevenue(payload) {
  const queryParams = Object.entries(payload)
    .map(([key, val]) => key + "=" + val)
    .join("&");
  return axios({
    url: `${ROOT_API_URL}/get-revenue-ref?${queryParams}`,
    method: "GET",
  }).then((data) => {
    return data;
  });
}

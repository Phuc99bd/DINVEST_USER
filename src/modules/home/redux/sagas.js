import * as types from "./constants";
import * as actions from "./actions";
import { all, takeLatest, call } from "redux-saga/effects";
import { get } from "lodash";
import axios from "helpers/AxiosHelper";
import { ROOT_API_URL } from "commons/constants";
import { toast } from "react-toastify";

function* onWithdraw({ payload, redirect }) {
  const { data } = yield call(requestWithdraw, payload);
  if (get(data, "status_code") === 200) {
    toast.success(data.message);
    redirect();
    return;
  }
}

function* onGetCommissionMember({ payload, redirect }) {
  const { data } = yield call(requestCommissionMember, payload);
  if (get(data, "status_code") === 200) {
    redirect(data.data);
    return;
  }
}

function* onGetCommissionRef({ payload, redirect }) {
  const { data } = yield call(requestCommissionRef, payload);
  if (get(data, "status_code") === 200) {
    redirect(data.data);
    return;
  }
}

function* onGetLineChart({ payload, redirect }) {
  const { data } = yield call(requestLineChart, payload);
  if (get(data, "status_code") === 200) {
    redirect(data.data);
    return;
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(types.WITHDRAW_EARN, onWithdraw),
    takeLatest(types.GET_COMMISSION_MEMBER, onGetCommissionMember),
    takeLatest(types.GET_COMMISSION_REF, onGetCommissionRef),
    takeLatest(types.HISTORY_D_INVEST, onGetLineChart),
  ]);
}

function requestWithdraw(payload) {
  return axios({
    url: `${ROOT_API_URL}/wallet-trans/earn`,
    method: "POST",
    data: JSON.stringify(payload),
  }).then((data) => {
    return data;
  });
}

function requestCommissionMember(payload) {
  return axios({
    url: `${ROOT_API_URL}/referals/count-members`,
    method: "GET",
  }).then((data) => {
    return data;
  });
}

function requestCommissionRef(payload) {
  return axios({
    url: `${ROOT_API_URL}/referals/count-commission`,
    method: "GET",
  }).then((data) => {
    return data;
  });
}

function requestLineChart(payload) {
  const queryParams = Object.entries(payload)
    .map(([key, val]) => key + "=" + val)
    .join("&");
  return axios({
    url: `${ROOT_API_URL}/report/total-usj-invest?${queryParams}`,
    method: "GET",
  }).then((data) => {
    return data;
  });
}

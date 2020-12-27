import * as types from "./constants";
import { all, takeLatest, call } from "redux-saga/effects";
import { get } from "lodash";
import axios from "helpers/AxiosHelper";
import { ROOT_API_URL } from "commons/constants";
import { toast } from "react-toastify";

function* onWithdraw({ payload, redirect }) {
  const { data } = yield call(requestWithdraw, payload);
  if (get(data, "status_code") === 200) {
    toast.success(data.message);
    redirect(data.data.id);
    return;
  }
}

function* onSwap({ payload, redirect }) {
  const { data } = yield call(requestSwap, payload);
  if (get(data, "status_code") === 200) {
    toast.success(data.message);
    redirect();
    return;
  }
}

function* onGetMore({ payload, redirect }) {
  const { data } = yield call(requestGetMore, payload);
  if (get(data, "status_code") === 200) {
    toast.success(data.message);
    redirect();
    return;
  }
}

function* onVerify({ payload, redirect }) {
  const { data } = yield call(requestVerifyTransaction, payload);
  if (get(data, "status_code") === 200) {
    toast.success(data.message);
    redirect();
    return;
  }
}

function* onTransactions({ payload, redirect }) {
  const { data } = yield call(requestGetTransactions, payload);
  if (get(data, "status_code") === 200) {
    redirect(data.data);
    return;
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(types.WITHDRAW, onWithdraw),
    takeLatest(types.SWAP, onSwap),
    takeLatest(types.GET_MORE, onGetMore),
    takeLatest(types.VERIFY_TRANSACTION, onVerify),
    takeLatest(types.GET_TRANSACTIONS, onTransactions),
  ]);
}

function requestWithdraw(payload) {
  return axios({
    url: `${ROOT_API_URL}/wallet/withdraw`,
    method: "POST",
    data: JSON.stringify(payload),
  }).then((data) => {
    return data;
  });
}

function requestSwap(payload) {
  return axios({
    url: `${ROOT_API_URL}/wallet-trans/swap`,
    method: "POST",
    data: JSON.stringify(payload),
  }).then((data) => {
    return data;
  });
}

function requestGetMore(payload) {
  return axios({
    url: `${ROOT_API_URL}/wallet-trans/exchange/d-vest`,
    method: "POST",
    data: JSON.stringify(payload),
  }).then((data) => {
    return data;
  });
}

function requestVerifyTransaction(payload) {
  return axios({
    url: `${ROOT_API_URL}/wallet/withdraw/verify-transaction`,
    method: "POST",
    data: JSON.stringify(payload),
  }).then((data) => {
    return data;
  });
}

function requestGetTransactions(payload) {
  const queryParams = Object.entries(payload)
    .map(([key, val]) => key + "=" + val)
    .join("&");
  return axios({
    url: `${ROOT_API_URL}/wallet-trans/list?${queryParams}`,
    method: "GET",
  }).then((data) => {
    return data;
  });
}

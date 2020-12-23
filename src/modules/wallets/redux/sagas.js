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
    redirect();
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

export default function* rootSaga() {
  yield all([
    takeLatest(types.WITHDRAW, onWithdraw),
    takeLatest(types.SWAP, onSwap),
    takeLatest(types.GET_MORE, onGetMore),
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
    url: `${ROOT_API_URL}/wallet-trans/exchange/d-invest`,
    method: "POST",
    data: JSON.stringify(payload),
  }).then((data) => {
    return data;
  });
}

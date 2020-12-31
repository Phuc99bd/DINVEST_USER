import { all, takeLatest, call, put } from "redux-saga/effects";
import { get } from "lodash";
import * as types from "./constants";
import * as actions from "./actions";
import axios from "helpers/AxiosHelper";
import { ROOT_API_URL } from "commons/constants";
import { toast } from "react-toastify";

/** Get current invest */
function* onGetCurrentInvest({ payload }) {
  const { data } = yield call(requestGetCurrentInvest, payload);

  if (get(data, "status_code") === 200) {
    yield put(actions.setCurrentInvest(data.data));
    return;
  }
}

function* onGetListInvest({ payload }) {
  const { data } = yield call(requestGetListInvest, payload);

  if (get(data, "status_code") === 200) {
    yield put(actions.setListInvestment(data.data));
    return;
  }
}

function* onBuyInvestment({ payload, redirect }) {
  const { data } = yield call(requestBuyInvestMent, payload);

  if (get(data, "status_code") === 200) {
    toast.success(data.message);
    redirect();
    return;
  }
}

function* onGetHistoryInvest({ payload, redirect }) {
  const { data } = yield call(requestGetHistoryInvest, payload);

  if (get(data, "status_code") === 200) {
    redirect(data.data);
    return;
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(types.GET_INVEST_CURRENT, onGetCurrentInvest),
    takeLatest(types.GET_LIST_PACKAGE_INVESTMENT, onGetListInvest),
    takeLatest(types.BUY_INVESTMENT, onBuyInvestment),
    takeLatest(types.HISTORY_INVESTMENT, onGetHistoryInvest),
  ]);
}

function requestGetCurrentInvest() {
  return axios({
    url: `${ROOT_API_URL}/get-investment`,
    method: "GET",
  }).then((data) => {
    return data;
  });
}

function requestGetListInvest() {
  return axios({
    url: `${ROOT_API_URL}/list-product-investment`,
    method: "GET",
  }).then((data) => {
    return data;
  });
}

function requestBuyInvestMent(payload) {
  return axios({
    url: `${ROOT_API_URL}/buy/package-investment`,
    method: "POST",
    data: JSON.stringify(payload),
  }).then((data) => {
    return data;
  });
}

function requestGetHistoryInvest(payload) {
  const queryParams = Object.entries(payload)
    .map(([key, val]) => key + "=" + val)
    .join("&");
  return axios({
    url: `${ROOT_API_URL}/get-history-invest?${queryParams}`,
    method: "GET",
  }).then((data) => {
    return data;
  });
}

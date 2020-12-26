import { all, takeLatest, call, put, fork } from "redux-saga/effects";
import { get } from "lodash";
import * as types from "./constants";
import * as actions from "./actions";
import axios from "helpers/AxiosHelper";
import { ROOT_API_URL } from "commons/constants";
import { toast } from "react-toastify";

/** Get current invest */
function* onGetCurrentInvest({ payload, redirect }) {
  const { data } = yield call(requestGetCurrentInvest, payload);

  if (get(data, "status_code") === 200) {
    yield put(actions.setCurrentInvest(data.data));
    toast.success(data.message);
    redirect();
    return;
  }
}

function* onGetListInvest({ payload, redirect }) {
  const { data } = yield call(requestGetListInvest, payload);

  if (get(data, "status_code") === 200) {
    yield put(actions.setListInvestment(data.data));
    toast.success(data.message);
    return;
  }
}
export default function* rootSaga() {
  yield all([
    takeLatest(types.GET_INVEST_CURRENT, onGetCurrentInvest),
    takeLatest(types.GET_LIST_PACKAGE_INVESTMENT, onGetListInvest),
  ]);
}

function requestGetCurrentInvest(payload) {
  return axios({
    url: `${ROOT_API_URL}/get-investment`,
    method: "GET",
  }).then((data) => {
    return data;
  });
}
function requestGetListInvest(payload) {
  return axios({
    url: `${ROOT_API_URL}/list-product-investment`,
    method: "GET",
  }).then((data) => {
    return data;
  });
}

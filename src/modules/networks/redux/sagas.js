import * as types from "./constants";
import { all, takeLatest, call } from "redux-saga/effects";
import { get } from "lodash";
import axios from "helpers/AxiosHelper";
import { ROOT_API_URL } from "commons/constants";
import { toast } from "react-toastify";

function* onGetCommission({ payload, redirect }) {
  const { data } = yield call(requestGetCommission, payload);
  if (get(data, "status_code") === 200) {
    redirect(data.data);
    return;
  }
}

export default function* rootSaga() {
  yield all([takeLatest(types.GET_COMMISSIONS, onGetCommission)]);
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

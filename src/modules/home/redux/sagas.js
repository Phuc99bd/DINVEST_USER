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

export default function* rootSaga() {
  yield all([takeLatest(types.WITHDRAW_EARN, onWithdraw)]);
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

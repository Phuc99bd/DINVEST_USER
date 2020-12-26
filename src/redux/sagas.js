import { all } from "redux-saga/effects";

import { AuthSaga } from "modules/auth";
import { DashboardSaga } from "modules/home";
import { WalletSaga } from "modules/wallets";
import { InvestSaga } from "modules/invest";

export default function* rootSaga() {
  yield all([AuthSaga(), DashboardSaga(), WalletSaga(), InvestSaga()]);
}

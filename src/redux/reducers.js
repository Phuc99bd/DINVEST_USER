import { combineReducers } from "redux";

import LoadingStateReducer from "./status/reducer";
import { AuthReducer } from "../modules/auth";
import { InvestReducer } from "../modules/invest";

export default combineReducers({
  auth: AuthReducer,
  loadingState: LoadingStateReducer,
  invest: InvestReducer,
});

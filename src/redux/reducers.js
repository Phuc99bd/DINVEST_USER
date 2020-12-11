import { combineReducers } from "redux";

import LoadingStateReducer from "./status/reducer";
import { AuthReducer } from "../modules/auth";

export default combineReducers({
  auth: AuthReducer,
  loadingState: LoadingStateReducer
});

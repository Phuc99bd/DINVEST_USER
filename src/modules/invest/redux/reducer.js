import produce from "immer";
import * as types from "./constants";

const initialState = {
  dataCurrentInvest: null,
  listInvestment: null,
};

export default function InvestReducer(state = initialState, action) {
  const { payload } = action;
  return produce(state, (draft) => {
    switch (action.type) {
      case types.SET_INVEST_CURRENT:
        draft.dataCurrentInvest = payload;
        break;
      case types.SET_LIST_PACKAGE_INVESTMENT:
        draft.listInvestment = payload;
        break;
      default:
        break;
    }
  });
}

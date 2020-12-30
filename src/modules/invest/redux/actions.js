import * as types from "./constants";

export const getCurrentInvest = (payload, redirect) => ({
  type: types.GET_INVEST_CURRENT,
  payload,
  redirect,
});

export const getListInvestment = (payload, redirect) => ({
  type: types.GET_LIST_PACKAGE_INVESTMENT,
  payload,
  redirect,
});

export const setCurrentInvest = (payload, redirect) => ({
  type: types.SET_INVEST_CURRENT,
  payload,
  redirect,
});

export const setListInvestment = (payload, redirect) => ({
  type: types.SET_LIST_PACKAGE_INVESTMENT,
  payload,
  redirect,
});

export const onBuyInvestment = (payload, redirect) => ({
  type: types.BUY_INVESTMENT,
  payload,
  redirect,
});

export const getHistoryInvestment = (payload, redirect) => ({
  type: types.HISTORY_INVESTMENT,
  payload,
  redirect,
});

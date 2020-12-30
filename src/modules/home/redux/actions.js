import * as types from "./constants";

export const withdrawEarn = (payload, redirect) => ({
  type: types.WITHDRAW_EARN,
  payload,
  redirect,
});

export const getCommissionMember = (payload, redirect) => ({
  type: types.GET_COMMISSION_MEMBER,
  payload,
  redirect,
});

export const getCommissionRef = (payload, redirect) => ({
  type: types.GET_COMMISSION_REF,
  payload,
  redirect,
});

export const getLineChart = (payload, redirect) => ({
  type: types.HISTORY_D_INVEST,
  payload,
  redirect,
});

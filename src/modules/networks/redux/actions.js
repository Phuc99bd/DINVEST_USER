import * as types from "./constants";

export const getCommission = (payload, redirect) => ({
  type: types.GET_COMMISSIONS,
  payload,
  redirect,
});

export const getRefByUser = (payload, redirect) => ({
  type: types.GET_REF_BY_USER,
  payload,
  redirect,
});

export const getRevenue = (payload, redirect) => ({
  type: types.GET_REVENUE,
  payload,
  redirect,
});

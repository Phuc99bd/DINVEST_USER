import * as types from "./constants";

export const getCommission = (payload, redirect) => ({
  type: types.GET_COMMISSIONS,
  payload,
  redirect,
});

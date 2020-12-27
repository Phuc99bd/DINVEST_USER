import * as types from "./constants";

export const withdraw = (payload, redirect) => ({
  type: types.WITHDRAW,
  payload,
  redirect,
});

export const swap = (payload, redirect) => ({
  type: types.SWAP,
  payload,
  redirect,
});

export const getMore = (payload, redirect) => ({
  type: types.GET_MORE,
  payload,
  redirect,
});

export const onVerify = (payload, redirect) => ({
  type: types.VERIFY_TRANSACTION,
  payload,
  redirect,
});

export const onGetTransaction = (payload, redirect) => ({
  type: types.GET_TRANSACTIONS,
  payload,
  redirect,
});

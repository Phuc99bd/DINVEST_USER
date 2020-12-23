import * as types from "./constants";

export const withdrawEarn = (payload, redirect) => ({
  type: types.WITHDRAW_EARN,
  payload,
  redirect,
});

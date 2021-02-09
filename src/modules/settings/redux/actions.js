import * as types from "./types";

export const changePassword = (payload, redirect) => ({
  type: types.CHANGE_PASSWORD,
  payload,
  redirect,
});

export const updateProfile = (payload) => ({
  type: types.UPDATE_PROFILE,
  payload,
});

export const generateQR = (payload) => ({
  type: types.GENERATE_QR,
  payload,
});

export const activeAuthenticator = (payload, redirect) => ({
  type: types.ACTIVE_AUTHENTICATOR,
  payload,
  redirect,
});

export const onChangeSecurity = (payload, redirect) => ({
  type: types.ON_CHANGE_SECURITY,
  payload,
  redirect,
});

export const onChangeEmail = (payload, redirect) => ({
  type: types.CHANGE_EMAIL,
  payload,
  redirect,
});

export const onVerifyEmail = (payload, redirect) => ({
  type: types.VERIFY_EMAIL,
  payload,
  redirect,
});
